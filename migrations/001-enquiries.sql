CREATE SCHEMA IF NOT EXISTS frontier_contact;
CREATE TABLE IF NOT EXISTS frontier_contact.enquiries (
 id uuid PRIMARY KEY,
 submission_key uuid NOT NULL UNIQUE,
 payload_hash text NOT NULL,
 name text NOT NULL CHECK (length(name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (length(email) <= 254),
 phone text NOT NULL CHECK (length(phone) BETWEEN 1 AND 40),
 requirement text NOT NULL DEFAULT '' CHECK (length(requirement) <= 1600),
 source_path text NOT NULL,
 form_version text NOT NULL,
 environment text NOT NULL,
 privacy_notice_version text NOT NULL,
 received_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS frontier_contact.notification_deliveries (
 id uuid PRIMARY KEY,
 enquiry_id uuid NOT NULL REFERENCES frontier_contact.enquiries(id),
 recipient text NOT NULL,
 sender text NOT NULL,
 status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','processing','retry','accepted','failed')),
 attempt_count integer NOT NULL DEFAULT 0,
 next_attempt_at timestamptz NOT NULL DEFAULT now(),
 lease_until timestamptz,
 lease_token uuid,
 first_attempt_at timestamptz,
 provider_message_id text UNIQUE,
 last_error_code text,
 accepted_at timestamptz,
 delivery_status text,
 delivered_at timestamptz,
 updated_at timestamptz NOT NULL DEFAULT now(),
 created_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(enquiry_id, recipient)
);
CREATE INDEX IF NOT EXISTS contact_outbox_due ON frontier_contact.notification_deliveries(next_attempt_at) WHERE status IN ('pending','processing','retry');
CREATE TABLE IF NOT EXISTS frontier_contact.rate_limits (
 bucket text PRIMARY KEY,
 count integer NOT NULL,
 expires_at timestamptz NOT NULL
);
CREATE TABLE IF NOT EXISTS frontier_contact.provider_events (
 event_id text PRIMARY KEY,
 message_id text NOT NULL,
 event_type text NOT NULL,
 occurred_at timestamptz NOT NULL,
 received_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS contact_events_message ON frontier_contact.provider_events(message_id);
