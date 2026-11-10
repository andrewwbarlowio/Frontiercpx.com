# Optional QA dependency: WeasyPrint 70 and pypdf; not part of the production build.
from pathlib import Path
import json,logging
from urllib.parse import urlparse
from weasyprint import HTML
from weasyprint import URLFetcher
default_url_fetcher=URLFetcher()
from pypdf import PdfReader
logging.getLogger('weasyprint').setLevel(logging.ERROR)
r=Path(__file__).resolve().parents[1];out=r/'tmp/pdfs/sprint-04';out.mkdir(parents=True,exist_ok=True)
class LocalFetcher(URLFetcher):
 def fetch(self,url,headers=None):
  u=urlparse(url)
  if u.hostname=='frontiercpx.com' or (u.scheme=='file' and u.path.startswith('/assets/')):
   response=super().fetch((r/'dist'/u.path.lstrip('/')).as_uri());response.url='https://frontiercpx.com'+u.path;return response
  return super().fetch(url,headers)
fetch=LocalFetcher()
results=[]
for x in json.loads((r/'content/customer-journeys.json').read_text())['solutions']:
 src=r/'dist/briefs'/x['slug']/'index.html';dest=out/(x['slug']+'.pdf')
 HTML(string=src.read_text(),base_url='https://frontiercpx.com/briefs/'+x['slug'],url_fetcher=fetch).write_pdf(dest)
 pdf=PdfReader(dest);texts=[p.extract_text() for p in pdf.pages];results.append({'slug':x['slug'],'pages':len(pdf.pages),'firstPageMarker':'Page 1 of 2' in ' '.join(texts[0].split()),'secondPageMarker':len(texts)>1 and 'Page 2 of 2' in ' '.join(texts[-1].split()),'characters':[len(t) for t in texts]})
print(json.dumps(results,indent=2));(out/'results.json').write_text(json.dumps(results,indent=2))

assert all(x['pages']==2 and x['firstPageMarker'] and x['secondPageMarker'] for x in results), 'Print pagination or source marker failed'
