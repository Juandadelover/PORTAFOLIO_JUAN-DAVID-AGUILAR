import { SiteConfig } from '../lib/types/site'

export const siteConfig: SiteConfig = {
  name: 'Juan David Aguilar',
  description: 'Portfolio personal y proyectos de desarrollo de software',
  mainNav: [
    {
      title: 'Inicio',
      href: '/',
    },
    {
      title: 'Sobre Mí',
      href: '/#about',
    },
    {
      title: 'Proyectos',
      href: '/#projects',
    },
    {
      title: 'Habilidades',
      href: '/#skills',
    },
    {
      title: 'Contacto',
      href: '/#contact',
    },
  ],
  links: {
    github: 'https://github.com/tuusuario',
    linkedin: 'https://linkedin.com/in/tuusuario',
    twitter: 'https://twitter.com/tuusuario',
  },
}