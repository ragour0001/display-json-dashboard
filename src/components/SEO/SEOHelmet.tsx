import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonicalUrl?: string;
  type?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const SEOHelmet: React.FC<SEOProps> = ({
  title = "Mental Wellness Solutions for All | Refill Health",
  description = "AI-driven mental health support, employee wellness programs, stress management tools for organisations, teams and individuals. Start with Refill Health.",
  keywords = "mental health, employee wellness, therapy, EAP, workplace mental health, online therapy, stress management, burnout prevention, psychological safety, mental health coaching, corporate wellness",
  image = "https://refillhealth.com/og-image.jpg",
  url = "https://refillhealth.com/",
  canonicalUrl,
  type = "website",
  noIndex = false,
  structuredData
}) => {
  const fullTitle = title.includes('Refill Health') ? title : `${title} | Refill Health`;
  
  // Use canonicalUrl if provided, otherwise fall back to url
  const finalCanonicalUrl = canonicalUrl || url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL - Most important for duplicate content prevention */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Alternative URLs for different formats */}
      <link rel="alternate" type="application/rss+xml" title="Refill Health Blog" href="https://refillhealth.com/blog/rss" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Refill Health" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional canonical-related meta tags */}
      <meta property="og:locale" content="en_US" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet; 