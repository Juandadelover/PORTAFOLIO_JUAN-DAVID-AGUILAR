export interface NavItem {
  title: string
  href: string
}

export interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    github: string
    linkedin: string
    twitter: string
  }
}