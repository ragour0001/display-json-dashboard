# Sitemap Configuration

This document explains how the sitemap is configured and managed in the RefillHealth web application.

## Overview

The sitemap helps search engines discover and index your website's pages. Our implementation includes:

- **Automated generation** during builds
- **Current dates** for better SEO
- **Public pages only** (private/auth pages excluded)
- **Proper robots.txt integration**

## Files

### Core Files
- `public/sitemap.xml` - The actual sitemap file served to search engines
- `public/robots.txt` - References the sitemap location
- `scripts/generate-sitemap.js` - Build-time sitemap generator
- `src/utils/sitemap-generator.ts` - TypeScript utility for sitemap generation

### Optional
- `src/components/admin/SitemapManager.tsx` - Admin UI for managing sitemap URLs

## Current URLs

The sitemap includes these public pages:

1. **Homepage** (`/`) - Priority 1.0, Daily updates
2. **Application Form** (`/onboarding/application-form`) - Priority 0.8, Monthly updates  
3. **Login** (`/login`) - Priority 0.6, Monthly updates
4. **Sign Up** (`/sign-up`) - Priority 0.6, Monthly updates

## Automatic Updates

The sitemap is automatically regenerated with current dates during:

```bash
npm run build        # Production build
npm run build:dev    # Development build
npm run generate-sitemap  # Manual generation
```

## Adding New Pages

To add new public pages to the sitemap:

1. **Edit** `scripts/generate-sitemap.js` and `src/utils/sitemap-generator.ts`
2. **Add** the new URL to the `publicRoutes` array:

```javascript
{
  loc: 'https://refillhealth.com/new-page',
  changefreq: 'monthly',
  priority: 0.7
}
```

3. **Run** `npm run generate-sitemap` to update

## Robots.txt Integration

The `robots.txt` file correctly references the sitemap:

```
Sitemap: https://refillhealth.com/sitemap.xml
```

It also properly disallows private pages while allowing public ones.

## SEO Best Practices

Our configuration follows SEO best practices:

- ✅ **Current dates** (updated on each build)
- ✅ **Proper priorities** (homepage=1.0, others=0.6-0.8)  
- ✅ **Realistic change frequencies**
- ✅ **Only public pages included**
- ✅ **XML validation compliant**
- ✅ **Robots.txt integration**

## Testing

You can test the sitemap:

1. **Local**: Visit `http://localhost:5173/sitemap.xml`
2. **Production**: Visit `https://refillhealth.com/sitemap.xml`
3. **Google Search Console**: Submit sitemap for indexing

## Maintenance

The sitemap requires minimal maintenance since it's automated. Only update when:

- Adding new public pages
- Changing page priorities
- Updating change frequencies

## Troubleshooting

**Sitemap not updating?**
- Run `npm run generate-sitemap` manually
- Check that the build process includes sitemap generation
- Verify file permissions on `public/sitemap.xml`

**URLs missing?**
- Check if they're in the `publicRoutes` array
- Ensure they're not disallowed in `robots.txt`
- Run the generation script and check console output 