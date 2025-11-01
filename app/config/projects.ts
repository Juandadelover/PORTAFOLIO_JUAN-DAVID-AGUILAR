interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  category: 'web' | 'mobile' | 'backend' | 'all'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/username/ecommerce',
    category: 'web'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicación móvil para gestión de tareas con sincronización en tiempo real y modo offline.',
    image: '/projects/taskapp.jpg',
    technologies: ['Flutter', 'Firebase', 'Google Cloud'],
    liveUrl: 'https://taskapp-demo.com',
    githubUrl: 'https://github.com/username/taskapp',
    category: 'mobile'
  },
  {
    id: 3,
    title: 'API REST Microservices',
    description: 'Sistema de microservicios para procesamiento de datos en tiempo real.',
    image: '/projects/api.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/username/api-microservices',
    category: 'backend'
  }
] as const