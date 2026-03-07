'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Programs', 
      href: '/programs',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Programs', href: '/programs' },
        { name: 'Children', href: '/programs/children' },
        { name: 'Youth', href: '/programs/youth' },
        { name: 'Women', href: '/programs/women' },
        { name: 'Disaster Response', href: '/programs/disaster-response' },
        { name: 'Spiritual', href: '/programs/spiritual' },
        { name: 'Community', href: '/programs/community' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/contact' }
  ]

  return (
    <header className="bg-[#1E3A3F] text-white sticky top-0 z-50 border-b border-[#A65D45]/20">
      <nav className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and brand */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-[#A65D45] text-[#A65D45] group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-[#A65D45]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-serif font-bold text-white leading-tight">Love Leads</span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-[#E5D7C1]/60">The Action Way</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <button
                      className="flex items-center gap-1 py-2 text-[#E5D7C1] hover:text-white transition-colors text-sm font-medium tracking-wide"
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-48 lg:w-56 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1.5 lg:py-2">
                        {link.dropdownItems?.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className={`block px-3 lg:px-4 py-2 lg:py-2.5 text-xs lg:text-sm transition-colors ${
                              idx === 0 
                                ? 'text-[#1E3A3F] font-semibold bg-[#F5F0E8]' 
                                : 'text-[#1E3A3F]/70 hover:bg-[#F5F0E8] hover:text-[#1E3A3F]'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#E5D7C1] hover:text-white transition-colors text-sm font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#E5D7C1] hover:text-white transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation*/}
        {isMenuOpen && (
          <div className="md:hidden py-4 sm:py-5 border-t border-[#A65D45]/20">
            <div className="space-y-3 sm:space-y-4">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="space-y-1.5 sm:space-y-2">
                      <div className="text-[#E5D7C1] font-medium px-2 text-xs sm:text-sm tracking-wide">{link.name}</div>
                      <div className="pl-3 sm:pl-4 space-y-1 sm:space-y-1.5 border-l-2 border-[#A65D45]/30">
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-1.5 sm:py-2 text-xs sm:text-sm text-[#E5D7C1]/70 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block py-1.5 sm:py-2 text-xs sm:text-sm text-[#E5D7C1] hover:text-white transition-colors font-medium px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}