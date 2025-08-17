'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/why-bearded-dragons', label: 'Why Bearded Dragons?' },
    { href: '/care-and-costs', label: 'Care & Costs' },
    { href: '/our-promise', label: 'Our Promise' },
  ]
  
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl">🦎</span>
            <span className="ml-2 text-white font-bold text-xl">Dragon Dreams</span>
          </div>
          <div className="flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-white text-orange-500'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}