import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://citizenshipweb.com'
  const locales = ['tr', 'en', 'ru', 'ar', 'fa']
  const routes = ['', '/services', '/citizenship', '/knowledge', '/news', '/questions', '/contact']
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  routes.forEach(route => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            'x-default': `${baseUrl}/en${route}`,
            'tr': `${baseUrl}/tr${route}`,
            'en': `${baseUrl}/en${route}`,
            'ru': `${baseUrl}/ru${route}`,
            'ar': `${baseUrl}/ar${route}`,
            'fa': `${baseUrl}/fa${route}`,
          }
        }
      })
    })
  })

  return sitemapEntries
}
