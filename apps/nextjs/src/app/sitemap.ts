import { MetadataRoute } from 'next'

const BASE_URL = 'https://citizenshipweb.com'
const LOCALES = ['tr', 'en', 'ru', 'ar', 'fa'] as const

type RouteConfig = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency']
}

const ROUTES: RouteConfig[] = [
  { path: '',            priority: 1.0, changeFrequency: 'weekly'  },
  { path: '/about',      priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services',   priority: 0.9, changeFrequency: 'monthly' },
  { path: '/citizenship',priority: 0.9, changeFrequency: 'monthly' },
  { path: '/knowledge',  priority: 0.8, changeFrequency: 'weekly'  },
  { path: '/news',       priority: 0.8, changeFrequency: 'weekly'  },
  { path: '/questions',  priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact',    priority: 0.6, changeFrequency: 'monthly' },
]

const hreflangAlts = (path: string) =>
  Object.fromEntries([
    ['x-default', `${BASE_URL}/en${path}`],
    ...LOCALES.map(l => [l, `${BASE_URL}/${l}${path}`]),
  ])

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: { languages: hreflangAlts(path) },
    }))
  )
}
