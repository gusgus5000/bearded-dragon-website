'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const links = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/why-bearded-dragons', label: 'Why Dragons?', icon: '✨' },
    { href: '/care-and-costs', label: 'Care & Budget', icon: '💰' },
    { href: '/our-promise', label: 'Our Promise', icon: '🤝' },
  ]
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl' 
        : 'bg-gradient-to-r from-purple-600/90 to-indigo-600/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className={`text-3xl font-bold ${scrolled ? 'gradient-text' : 'text-white'}`}>
              Dragon Dreams
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  pathname === link.href
                    ? scrolled
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-white text-purple-600 shadow-lg'
                    : scrolled
                      ? 'text-gray-700 hover:bg-purple-100'
                      : 'text-white/90 hover:bg-white/20'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className={`p-2 rounded-lg ${scrolled ? 'text-purple-600' : 'text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}