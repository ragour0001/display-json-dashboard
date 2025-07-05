/**
 * Sitemap Manager Component
 * Optional admin tool for managing sitemap URLs
 */

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { generateSitemap, downloadSitemap, publicRoutes, type SitemapUrl } from '@/utils/sitemap-generator';
import { Copy, Download, Plus, Trash2 } from 'lucide-react';

const SitemapManager: React.FC = () => {
  const [urls, setUrls] = useState<SitemapUrl[]>(publicRoutes);
  const [newUrl, setNewUrl] = useState<SitemapUrl>({
    loc: '',
    changefreq: 'monthly',
    priority: 0.5
  });

  const addUrl = () => {
    if (newUrl.loc) {
      setUrls([...urls, { ...newUrl }]);
      setNewUrl({ loc: '', changefreq: 'monthly', priority: 0.5 });
    }
  };

  const removeUrl = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const copyToClipboard = () => {
    const sitemapContent = generateSitemap(urls);
    navigator.clipboard.writeText(sitemapContent);
  };

  const handleDownload = () => {
    const sitemapContent = generateSitemap(urls);
    const blob = new Blob([sitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sitemap Manager</CardTitle>
          <CardDescription>
            Manage your website's sitemap URLs for better SEO
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Add New URL */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
            <Input
              placeholder="https://refillhealth.com/page"
              value={newUrl.loc}
              onChange={(e) => setNewUrl({ ...newUrl, loc: e.target.value })}
            />
            <Select
              value={newUrl.changefreq}
              onValueChange={(value: any) => setNewUrl({ ...newUrl, changefreq: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="number"
              min="0"
              max="1"
              step="0.1"
              placeholder="Priority"
              value={newUrl.priority}
              onChange={(e) => setNewUrl({ ...newUrl, priority: parseFloat(e.target.value) })}
            />
            <Button onClick={addUrl} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add URL
            </Button>
          </div>

          {/* URLs List */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Current URLs ({urls.length})</h3>
            {urls.map((url, index) => (
              <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{url.loc}</div>
                  <div className="text-sm text-gray-500">
                    {url.changefreq} • Priority: {url.priority}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeUrl(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button onClick={copyToClipboard} variant="outline">
              <Copy className="w-4 h-4 mr-2" />
              Copy XML
            </Button>
            <Button onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download Sitemap
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Sitemap Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto">
            {generateSitemap(urls)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};

export default SitemapManager; 