'use client'

import Link from 'next/link'
import { HiChevronRight, HiHome } from 'react-icons/hi'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Inicio"
          >
            <HiHome className="w-4 h-4 mr-1" />
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <HiChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-white font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}