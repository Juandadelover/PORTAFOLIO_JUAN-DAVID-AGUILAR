import { MetadataRoute } from 'next'
import { projects } from './config/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eljuandadeloper.vercel.app'

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/proyectos/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...projectPages]
}