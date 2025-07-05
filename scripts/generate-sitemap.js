/**
 * Generate sitemap.xml for production builds
 * Run this script to update the sitemap with current dates
 */

import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicRoutes = [
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

function generateSitemap(urls = publicRoutes) {
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

// Generate and write sitemap
const sitemapContent = generateSitemap();
const publicDir = join(__dirname, '..', 'public');
const sitemapPath = join(publicDir, 'sitemap.xml');

try {
  writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`📅 Updated: ${new Date().toISOString().split('T')[0]}`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
} 