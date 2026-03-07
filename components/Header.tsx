'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
    { name: 'Contact', href: '/contact' }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProgramsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Function to close dropdown when clicking any link
  const handleLinkClick = () => {
    setIsProgramsDropdownOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-[#1E3A3F] text-white sticky top-0 z-50 border-b border-[#A65D45]/20">
      {/* Main Header */}
      <div className="relative" ref={dropdownRef}>
        <nav className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo and brand */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={handleLinkClick}>
              <div className="relative">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-[#A65D45] text-[#A65D45] group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-[#A65D45]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                    <div key={link.name} className="relative">
                      <button
                        onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                        className="flex items-center gap-1 py-2 text-[#E5D7C1] hover:text-white transition-colors text-sm font-medium tracking-wide"
                      >
                        {link.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  )
                }
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#E5D7C1] hover:text-white transition-colors text-sm font-medium tracking-wide"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                )
              })}
              
              {/* Distinctive Donate Link */}
              <Link
                href="/contact"
                className="bg-[#A65D45] text-white px-5 py-2 text-sm font-semibold hover:bg-[#8E4F3A] transition-colors shadow-md"
                onClick={handleLinkClick}
              >
                Donate
              </Link>
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
        </nav>

        {/* Full-Width Dropdown with Animation - Hidden on Mobile */}
        {isProgramsDropdownOpen && (
          <div 
            className="absolute left-1/2 -translate-x-1/2 bg-white shadow-lg border-t border-[#E5D7C1]/20 z-50 transition-all duration-300 ease-in-out hidden md:block"
            style={{ 
              top: '100%',
              width: '100vw',
              marginLeft: 'calc(-50vw + 50%)',
              marginRight: 'calc(-50vw + 50%)'
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 md:px-12 py-8">
              {/* Programs Grid - 4 items top row */}
              <div className="grid grid-cols-4 gap-6 mb-6">
                {navLinks.find(l => l.hasDropdown)?.dropdownItems?.slice(0, 4).map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group block p-4 bg-[#F5F0E8] hover:bg-[#E5D7C1] transition-colors"
                    onClick={handleLinkClick}
                  >
                    {idx === 0 ? (
                      <div className="text-center">
                        <div className="text-xs text-[#A65D45] font-medium mb-1">ALL</div>
                        <div className="font-serif font-bold text-[#1E3A3F] text-xl mb-2">PROGRAMS</div>
                        <div className="text-sm text-[#A65D45] group-hover:underline">View all →</div>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-serif font-semibold text-[#1E3A3F] text-lg mb-2">{item.name}</h3>
                        <p className="text-xs text-[#1E3A3F]/60">
                          {idx === 1 && "Early Childhood • School Feeding • Back to School"}
                          {idx === 2 && "Sports • Talent Development • HIV/AIDS Awareness"}
                          {idx === 3 && "Entrepreneurship • Widow Support • Rights Education"}
                        </p>
                      </>
                    )}
                  </Link>
                ))}
              </div>
              
              {/* Bottom Row - 3 items */}
              <div className="grid grid-cols-3 gap-6">
                {navLinks.find(l => l.hasDropdown)?.dropdownItems?.slice(4, 7).map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group block p-4 bg-[#F5F0E8] hover:bg-[#E5D7C1] transition-colors"
                    onClick={handleLinkClick}
                  >
                    <h3 className="font-serif font-semibold text-[#1E3A3F] text-lg mb-2">{item.name}</h3>
                    <p className="text-xs text-[#1E3A3F]/60">
                      {idx === 0 && "Emergency Relief • Recovery • Preparedness"}
                      {idx === 1 && "Evangelism • The Action Way • Prayer"}
                      {idx === 2 && "IGAs • Counseling • Community Education"}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 sm:py-5 border-t border-[#A65D45]/20">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
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
                            onClick={() => {
                              setIsMenuOpen(false)
                              setIsProgramsDropdownOpen(false)
                            }}
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
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsProgramsDropdownOpen(false)
                    }}
                  >
                    {link.name}
                  </Link>
                )
              })}
              
              {/* Mobile Donate Link */}
              <Link
                href="/contact"
                className="block mx-2 bg-[#A65D45] text-white px-4 py-2.5 text-sm font-semibold text-center hover:bg-[#8E4F3A] transition-colors"
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsProgramsDropdownOpen(false)
                }}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}