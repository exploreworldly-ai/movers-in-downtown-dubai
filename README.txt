# Expert Movers Packer — Downtown Dubai Landing Page

## Files
- `index.html`: Semantic landing page content, metadata, internal links, and accessible FAQ markup.
- `style.css`: Responsive page styling with scoped design tokens and reduced-motion support.
- `script.js`: Small vanilla JavaScript FAQ accordion.

## Preview locally
Keep all three files in the same directory and open `index.html` in a browser.

## WordPress / Rank Math integration
This is a standalone HTML/CSS/JS implementation. When moving the content into an existing WordPress page:
- Keep the site's existing global header, footer, and navigation; this page intentionally does not duplicate them.
- If Rank Math or another SEO plugin outputs the title, meta description, canonical URL, or schema, configure those in the plugin and remove duplicate equivalents from the HTML.
- Check theme CSS for conflicts before deployment. Styles are mostly component-specific but should still be tested against the live theme.
- Do not add a second Organization/LocalBusiness schema if the SEO plugin already outputs equivalent markup.
- FAQ structured data is not included. The visible FAQ content alone does not guarantee Google FAQ rich-result display.

## Content note
The supplied brief described the source article but did not include its full original body or verbatim FAQ answers. The FAQ answers and supporting copy here are carefully drafted from the supplied requirements; compare them with the original article before publishing if exact source preservation is required.

## Pre-publish checklist
- Test at 320, 375, 430, 768, 1024, and 1440 px widths.
- Confirm phone links open the correct dialer: `tel:+971502312653`.
- Test every internal URL and the homepage link.
- Test accordion controls with keyboard and screen reader.
- Validate title, description, canonical, heading hierarchy, and schema output after WordPress integration.
- Check contrast, focus visibility, Core Web Vitals, and image needs in the real theme.
- No image was added because no approved hero asset was supplied.
