/**
 * Sitemap Generator Utility
 * Generates sitemap.xml with all public routes and proper metadata
 */

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const publicRoutes: SitemapUrl[] = [
  {
    loc: 'https://refillhealth.com/',
    changefreq: 'daily',
    priority: 1.0
  },
  {
    loc: 'https://refillhealth.com/onboarding/application-form',
    changefreq: 'monthly', 
    priority: 0.8
  },
  {
    loc: 'https://refillhealth.com/login',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    loc: 'https://refillhealth.com/sign-up',
    changefreq: 'monthly',
    priority: 0.6
  }
];

export function generateSitemap(urls: SitemapUrl[] = publicRoutes): string {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urlEntries = urls.map(url => {
    const lastmod = url.lastmod || currentDate;
    
    return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>${url.changefreq ? `
    <changefreq>${url.changefreq}</changefreq>` : ''}${url.priority ? `
    <priority>${url.priority}</priority>` : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

export function downloadSitemap(): void {
  const sitemapContent = generateSitemap();
  const blob = new Blob([sitemapContent], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sitemap.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
} 