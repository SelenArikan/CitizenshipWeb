import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/tr/admin/', '/en/admin/', '/ru/admin/', '/ar/admin/', '/fa/admin/'],
    },
    sitemap: 'https://citizenshipweb.com/sitemap.xml',
  }
}
