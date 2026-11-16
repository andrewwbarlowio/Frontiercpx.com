-- Backward compatible: the trigger also assigns identity for the previous API version.
CREATE TABLE IF NOT EXISTS frontier_contact.customers (
 customer_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 environment text NOT NULL,
 name text NOT NULL,
 email text NOT NULL,
 phone text NOT NULL,
 normalized_name text NOT NULL,
 normalized_email text NOT NULL,
 normalized_phone text NOT NULL,
 identity_status text NOT NULL DEFAULT 'unverified' CHECK (identity_status IN ('unverified','reviewed')),
 review_needed boolean NOT NULL DEFAULT false,
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(environment,normalized_email,normalized_name,normalized_phone),
 UNIQUE(customer_id,environment)
);
CREATE INDEX IF NOT EXISTS customers_email_review ON frontier_contact.customers(environment,normalized_email);
ALTER TABLE frontier_contact.enquiries ADD COLUMN IF NOT EXISTS customer_id uuid;
-- Keep existing UUID enquiry references and the existing primary key intact.
-- This explicit enquiry_id is an immutable generated alias for integrations/exports.
ALTER TABLE frontier_contact.enquiries ADD COLUMN IF NOT EXISTS enquiry_id uuid GENERATED ALWAYS AS (id) STORED;
CREATE OR REPLACE FUNCTION frontier_contact.assign_customer_identity() RETURNS trigger
LANGUAGE plpgsql SET search_path=pg_catalog,frontier_contact AS $$
DECLARE
 email_key text := lower(btrim(NEW.email));
 name_key text := lower(regexp_replace(btrim(NEW.name),'\s+',' ','g'));
 phone_key text := regexp_replace(NEW.phone,'[^0-9]','','g');
 resolved_id uuid;
BEGIN
 IF TG_OP='UPDATE' AND NEW.id IS DISTINCT FROM OLD.id THEN
  RAISE EXCEPTION 'Enquiry IDs cannot be renumbered';
 END IF;
 IF TG_OP='UPDATE' AND OLD.customer_id IS NOT NULL AND NEW.customer_id IS DISTINCT FROM OLD.customer_id THEN
  RAISE EXCEPTION 'Customer links are immutable; use a reviewed canonical alias instead';
 END IF;
 IF NEW.customer_id IS NULL THEN
  INSERT INTO frontier_contact.customers(environment,name,email,phone,normalized_name,normalized_email,normalized_phone)
  VALUES(NEW.environment,NEW.name,NEW.email,NEW.phone,name_key,email_key,phone_key)
  ON CONFLICT(environment,normalized_email,normalized_name,normalized_phone)
  DO UPDATE SET normalized_email=EXCLUDED.normalized_email
  RETURNING customer_id INTO resolved_id;
  NEW.customer_id := resolved_id;
  -- Same email with conflicting details is not silently combined into one person.
  IF EXISTS(SELECT 1 FROM frontier_contact.customers WHERE environment=NEW.environment AND normalized_email=email_key AND customer_id<>resolved_id) THEN
   UPDATE frontier_contact.customers SET review_needed=true,updated_at=now()
   WHERE environment=NEW.environment AND normalized_email=email_key AND NOT review_needed;
  END IF;
 END IF;
 RETURN NEW;
END;
$$;
DO $$ BEGIN
 IF NOT EXISTS(SELECT 1 FROM pg_trigger WHERE tgname='enquiries_assign_customer_identity' AND tgrelid='frontier_contact.enquiries'::regclass) THEN
  CREATE TRIGGER enquiries_assign_customer_identity BEFORE INSERT OR UPDATE OF customer_id,id ON frontier_contact.enquiries
  FOR EACH ROW EXECUTE FUNCTION frontier_contact.assign_customer_identity();
 END IF;
END $$;
-- Runs through the same resolver as new submissions; all original enquiry IDs survive.
UPDATE frontier_contact.enquiries SET customer_id=customer_id WHERE customer_id IS NULL;
ALTER TABLE frontier_contact.enquiries ALTER COLUMN customer_id SET NOT NULL;
DO $$ BEGIN
 IF NOT EXISTS(SELECT 1 FROM pg_constraint WHERE conname='enquiries_customer_environment_fk' AND conrelid='frontier_contact.enquiries'::regclass) THEN
  ALTER TABLE frontier_contact.enquiries ADD CONSTRAINT enquiries_customer_environment_fk
  FOREIGN KEY(customer_id,environment) REFERENCES frontier_contact.customers(customer_id,environment) ON DELETE RESTRICT;
 END IF;
END $$;
CREATE INDEX IF NOT EXISTS enquiries_customer_lookup ON frontier_contact.enquiries(customer_id,received_at);
CREATE OR REPLACE FUNCTION frontier_contact.prevent_customer_renumbering() RETURNS trigger
LANGUAGE plpgsql AS $$ BEGIN
 IF NEW.customer_id IS DISTINCT FROM OLD.customer_id THEN RAISE EXCEPTION 'Customer IDs cannot be renumbered'; END IF;
 RETURN NEW;
END $$;
DO $$ BEGIN
 IF NOT EXISTS(SELECT 1 FROM pg_trigger WHERE tgname='customers_immutable_id' AND tgrelid='frontier_contact.customers'::regclass) THEN
  CREATE TRIGGER customers_immutable_id BEFORE UPDATE OF customer_id ON frontier_contact.customers
  FOR EACH ROW EXECUTE FUNCTION frontier_contact.prevent_customer_renumbering();
 END IF;
END $$;
-- Existing restricted runtime role needs access to the new parent table.
DO $$ BEGIN
 IF EXISTS(SELECT 1 FROM pg_roles WHERE rolname='frontier_contact_app') THEN
  GRANT SELECT,INSERT,UPDATE ON frontier_contact.customers TO frontier_contact_app;
 END IF;
END $$;
