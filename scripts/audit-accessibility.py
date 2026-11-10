"""Structural checks only: not a screen-reader or WCAG conformance claim."""
from html.parser import HTMLParser
from pathlib import Path
import json
class Audit(HTMLParser):
 def __init__(self):
  super().__init__(); self.labels=set(); self.controls=[]; self.errors=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='img' and 'alt' not in a: self.errors.append('Image missing alt')
  if tag=='html' and not a.get('lang'): self.errors.append('Missing document language')
  if tag=='label' and a.get('for'): self.labels.add(a['for'])
  if tag in ('input','select','textarea') and a.get('type')!='hidden': self.controls.append(a)
results=[]
for route in json.loads(Path('dist/route-inventory.json').read_text()):
 p=Audit(); p.feed(Path('dist',route['file']).read_text())
 for a in p.controls:
  if not (a.get('id') in p.labels or a.get('aria-label') or a.get('aria-labelledby') or a.get('type') in ('submit','button')): p.errors.append('Control missing explicit label')
 results.append({'route':route['route'],'errors':p.errors})
print(json.dumps(results,indent=2))
assert all(not r['errors'] for r in results)
