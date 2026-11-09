# Bain Capital — reference page structure
Reviewed: 9 November 2026
Source: https://www.baincapital.com/
Purpose: structural reference for Frontier Capital Partners. This document records the reference hierarchy; it does not change the live website.

## Scope and confidence
Verified core navigation destinations and source HTML links; read core landing pages and representative detail pages. This is a core information architecture map, not an exhaustive crawl of historical news, every person, external business sites, or embedded sector microsites. Responsive appearance, animations, and interaction timing have not been visually audited. Labels below describe the reference, not proposed claims about Frontier.

## Primary navigation and actual destinations
| Item | Destination | Behaviour |
|---|---|---|
| Logo | / | Home |
| About Us | /about-us | Landing page with section links |
| Businesses | /#ourintegratedplatform | Homepage section plus grouped business menu |
| Sustainability & Impact | /sustainability-and-impact | Landing page and five detail pages |
| Careers | /careers | Landing page with section links |
| News | /news | Filtered archive |
| People | /people | Directory; present in source header and footer |
| Locations | /locations | Utility and footer destination |
| Search | Search interface | Overlay/interface; result route not verified |
| Investors | External FIS account portal | External login |

### About Us: one page, four anchors
- /about-us#overview
- /about-us#purposeandValue
- /about-us#ourpartnership
- /about-us#globalpresence

### Businesses: five menu groups
| Group | Linked businesses |
|---|---|
| Private Equity | Global Private Equity; Double Impact; Insurance |
| Growth & Venture | Ventures; Life Sciences; Tech Opportunities; Crypto |
| Capital Solutions | Special Situations |
| Credit | Credit |
| Real Assets | Real Estate; Special Situations |

Local business landing routes: /ventures and /crypto.
Other business links lead to separate domains: baincapitalprivateequity.com, baincapitaldoubleimpact.com, baincapitalinsurance.com, baincapitallifesciences.com, baincapitaltechopportunities.com, baincapitalspecialsituations.com, baincapitalcredit.com, baincapitalrealestate.com.
Special Situations appears in two groups; it is one destination.

### Sustainability detail routes
All below are children of /sustainability-and-impact:
- /active-governance-and-stewardship
- /sustainable-growth-reducing-climate-impact
- /fair-employment-engagement-well-being
- /opportunity-and-inclusion
- /community-engagement

### Careers: one page, three anchors
- /careers#your-opportunity
- /careers#our-support
- /careers#join-the-team

### News: archive states and detail template
- /news
- /news?filter=&newscategory=press-releases
- /news?filter=&newscategory=in-the-news
- /news/{article-slug}
Some coverage links go directly to external publications. Business and year filters plus Load More are present.

### People
- /people
- /people/{person-slug}
Directory provides name search, location/title/business filters and layout controls.
Representative profile: /people/john-connaughton.

### Sector destinations
- Industrials: external baincapitalindustrials.com
- Healthcare: /healthcare/ — embedded sector site with its own navigation
- Technology: /technology/ — embedded sector site with sector and capability navigation
These are additional content systems, not ordinary business menu detail pages. Their full subtrees need a separate audit.

### Footer and utility routes
- /privacy-policy
- /terms-use
- /regulatory-disclosures
- /fraud-and-cybersecurity-warning
- /fraud-and-cybersecurity-warning-chinese
- /fraud-and-cybersecurity-warning-spanish
- Japan local site: external baincapital.co.jp
- LinkedIn and X links
- Sustainability report PDFs on the CDN
Footer repeats corporate navigation and business destinations.

## Page composition
| Template | Main structure |
|---|---|
| Home | Image-led rotating hero; partnership/value proposition; interactive business platform; three sector features; sustainability cards/report; people feature; news feed; global locations; footer |
| About | Overview metrics; purpose and values; people/careers feature; partnership sections; global office module |
| Sustainability landing | Leadership commentary; five commitment cards; further leadership perspectives; report links |
| Sustainability detail | Introductory statement; themed editorial sections; executive quote/profile; supporting approach content |
| Careers | Hero/introduction; three-section local navigation; opportunity themes and testimonials; growth/support content; recruitment section |
| News archive | Media contacts; title; business/year filters; category controls; featured story; results; Load More |
| News detail | Category/date/title; article body and supporting information; shared site navigation/footer |
| People directory | Intro; layout controls; filters/name search; person cards; incremental results |
| Person detail | Identity/portrait; position/business/location; biography; shared navigation/footer |
| Locations | Global office presentation and business filtering; addresses/contact/map links |
| Ventures / Crypto | Local business landing pages bridging corporate site and specialist business content |
| Legal | Shared shell with long-form policy/disclosure text |

## Reusable implementation model
Build these as templates and content records:
1. Global header, grouped menu, search and footer.
2. Homepage modules.
3. Anchored editorial landing page.
4. Topic detail page.
5. Filtered archive and article detail.
6. People directory and profile detail.
7. Locations module/page.
8. Legal page.
9. Sector microsite shell only if required.

Preserve the difference between a route, anchor, archive filter and external destination. Keep business groups as navigation data so the same destination can appear in more than one group.

## Frontier application
Retain this structural reference unchanged. A separate Frontier sitemap should map these patterns to its actual funding services, team, process and contact journey. Bain's asset-manager-specific business categories, investor portal and global-office claims are reference content, not Frontier requirements.
