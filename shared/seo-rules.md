# SEO Rules Documentation

## Global SEO Foundation
1. **H1 Tags**: Every page must have exactly one unique `<h1>` tag containing the core keyword for that page.
2. **Meta Descriptions**: Every page must have a unique meta description not exceeding 160 characters, with a clear Call to Action (CTA).
3. **Canonical Tags**: Every page must include a `<link rel="canonical" href="...">` tag pointing to itself to prevent duplicate content issues.
4. **Hreflang Implementation**:
   - `x-default` must point to the English (or primary) version of the page.
   - Separate `<link rel="alternate" hreflang="xx" href="...">` tags must be present for `tr`, `en`, `ru`, `ar`, ve `fa`.

## Structured Data (JSON-LD)
- **Organization**: Logo, address, contact point must be present on the homepage JSON-LD.
- **FAQPage**: Will be added on pages containing questions.
- **BreadcrumbList**: Must be present on every subpage.
- **WebSite (SearchAction)**: To be implemented on the homepage.
- **LocalBusiness / LegalService**: To be present on the Contact page.
- **ItemList / Service**: To be present on the Services page.
- **HowTo**: To be added to the Citizenship Process pipeline.
- **CollectionPage**: To be added to Knowledge Library and News.
