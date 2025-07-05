# Canonical URLs Implementation Guide

## What are Canonical URLs?

Canonical URLs are a way to tell search engines which version of a page is the "canonical" or preferred version when you have multiple URLs that display similar or duplicate content. This prevents duplicate content issues and helps consolidate page authority.

## Our Implementation

### 1. Automatic Canonical URL Generation

Our system automatically generates canonical URLs for every page using the `getCanonicalUrl()` function:

```typescript
import { getCanonicalUrl } from '@/utils/canonical';

const canonicalUrl = getCanonicalUrl('/login'); 
// Returns: https://refillhealth.com/login
```

### 2. Route-Specific Configuration

Different routes have different canonical URL behaviors:

#### Home Page (`/`)
- **Canonical**: `https://refillhealth.com/`
- **Behavior**: Simple, clean canonical URL

#### Authentication Pages
- **Login** (`/login`): Removes all query parameters for security
- **Sign Up** (`/sign-up`): Preserves UTM and referral parameters
- **Reset Password** (`/reset-password`): Preserves token and email parameters
- **Verification** (`/verify`): Preserves verification tokens

#### Onboarding Pages
- **All onboarding routes**: Clean URLs with no parameters
- **Application Form**: Public page with clean canonical URL

### 3. Parameter Handling

Our canonical URL system intelligently handles query parameters:

```typescript
// Examples:
// URL: /sign-up?utm_source=google&utm_campaign=mental-health&random=123
// Canonical: https://refillhealth.com/sign-up?utm_source=google&utm_campaign=mental-health

// URL: /login?redirect=/dashboard&token=abc123
// Canonical: https://refillhealth.com/login

// URL: /reset-password?token=reset123&email=user@example.com
// Canonical: https://refillhealth.com/reset-password?token=reset123&email=user@example.com
```

## Benefits for SEO

### 1. Duplicate Content Prevention
- Prevents search engines from indexing multiple versions of the same page
- Consolidates page authority to a single URL

### 2. Parameter Management
- UTM tracking parameters preserved where beneficial for marketing
- Security-sensitive parameters removed from public URLs
- Functional parameters (tokens, emails) preserved when necessary

### 3. Trailing Slash Consistency
- All URLs follow consistent trailing slash rules
- Home page (`/`) keeps its slash
- Other pages have trailing slashes removed for consistency

## Technical Implementation

### Core Functions

#### `getCanonicalUrl(pathname: string)`
Main function that returns the canonical URL for any given pathname.

#### `generateCanonicalUrl(config: CanonicalConfig)`
Low-level function that handles the actual URL generation with specific configurations.

#### `getCanonicalConfig(pathname: string)`
Returns route-specific configuration for canonical URL generation.

### Configuration Options

```typescript
interface CanonicalConfig {
  baseUrl: string;                    // Base domain URL
  pathname: string;                   // Current page path
  preserveParams?: string[];          // Parameters to keep
  removeParams?: string[];            // Parameters to remove
  forceTrailingSlash?: boolean;       // Force trailing slash
  removeTrailingSlash?: boolean;      // Remove trailing slash
}
```

## Usage in Components

### Automatic Usage
All pages automatically get canonical URLs through the `useSEO()` hook and `SEOHelmet` component.

### Manual Usage
For custom implementations:

```typescript
import { getCanonicalUrl } from '@/utils/canonical';
import { Helmet } from 'react-helmet-async';

const MyComponent = () => {
  const canonicalUrl = getCanonicalUrl(window.location.pathname);
  
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};
```

## Best Practices

### 1. Always Use Absolute URLs
✅ `https://refillhealth.com/page`
❌ `/page`

### 2. Consistent URL Structure
✅ `https://refillhealth.com/login`
❌ `https://refillhealth.com/login/`

### 3. Parameter Management
- Remove tracking parameters that don't affect content
- Preserve functional parameters (tokens, IDs)
- Remove session-specific parameters

### 4. HTTPS Only
All canonical URLs use HTTPS for security and SEO benefits.

## Testing Canonical URLs

### View Current Page Canonical
```javascript
// In browser console
console.log(document.querySelector('link[rel="canonical"]')?.href);
```

### Test Different Routes
```typescript
import { getCanonicalUrl } from '@/utils/canonical';

// Test various paths
console.log(getCanonicalUrl('/'));
console.log(getCanonicalUrl('/login'));
console.log(getCanonicalUrl('/sign-up'));
console.log(getCanonicalUrl('/onboarding/application-form'));
```

## Search Engine Verification

### Google Search Console
1. Check "Coverage" report for canonical URL issues
2. Verify "URL Inspection" tool shows correct canonical
3. Monitor "Duplicate content" warnings

### Meta Tag Validation
Use tools like:
- Google's Rich Results Test
- Facebook's Sharing Debugger
- Twitter Card Validator

## Future Enhancements

### Potential Additions
1. **Pagination Support**: For paginated content
2. **Language Support**: For multi-language sites
3. **Dynamic Parameters**: For product pages or user-generated content
4. **A/B Testing Support**: For variant page testing

### Monitoring
Consider adding:
- Canonical URL analytics tracking
- Automated canonical URL validation
- SEO monitoring integration

## Troubleshooting

### Common Issues

#### 1. Canonical URL Not Appearing
Check that `HelmetProvider` is properly wrapped around your app in `main.tsx`.

#### 2. Wrong Canonical URL
Verify the route configuration in `getCanonicalConfig()` function.

#### 3. Parameters Not Handled Correctly
Review the `preserveParams` and `removeParams` configuration for the specific route.

### Debug Tools

```typescript
// Debug canonical URL generation
import { getCanonicalUrl, getCanonicalConfig } from '@/utils/canonical';

const pathname = window.location.pathname;
console.log('Current path:', pathname);
console.log('Config:', getCanonicalConfig(pathname));
console.log('Canonical URL:', getCanonicalUrl(pathname));
``` 