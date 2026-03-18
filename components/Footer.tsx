import Link from 'next/link'
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react'
import { orgName, tagline, beliefs, contact, catchmentAreas } from '@/constants/organization'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Programs', href: '/programs' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' }
  ]

  const programLinks = [
    { name: 'Children', href: '/programs/children' },
    { name: 'Youth', href: '/programs/youth' },
    { name: 'Women', href: '/programs/women' },
    { name: 'Disaster Response', href: '/programs/disaster-response' },
    { name: 'Spiritual', href: '/programs/spiritual' },
    { name: 'Community', href: '/programs/community' }
  ]

  return (
    <footer className="bg-[#1E3A3F] text-[#E5D7C1] border-t border-[#A65D45]/20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-12 sm:py-14 md:py-16">
          {/* About Column - 4 columns */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group mb-3 sm:mb-4">
              <div className="relative">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 fill-[#A65D45] text-[#A65D45] group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-[#A65D45]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-serif font-bold text-white leading-tight">{orgName}</span>
                <span className="text-[8px] sm:text-[10px] tracking-[0.3em] uppercase text-[#E5D7C1]/40">{tagline}</span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm leading-relaxed text-[#E5D7C1]/60 mb-4 sm:mb-5 md:mb-6 max-w-sm">
              "{beliefs.loveQuote}"
            </p>
            
            <div className="flex space-x-2 sm:space-x-3">
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-[#A65D45]/10 flex items-center justify-center hover:bg-[#A65D45] hover:text-white transition-colors">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-[#A65D45]/10 flex items-center justify-center hover:bg-[#A65D45] hover:text-white transition-colors">
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-[#A65D45]/10 flex items-center justify-center hover:bg-[#A65D45] hover:text-white transition-colors">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-serif text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-xs sm:text-sm text-[#E5D7C1]/60 hover:text-[#A65D45] transition-colors inline-flex items-center gap-1.5 sm:gap-2"
                  >
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-serif text-base sm:text-lg mb-3 sm:mb-4">Our Programs</h3>
            <ul className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-1.5 sm:gap-y-2">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-xs sm:text-sm text-[#E5D7C1]/60 hover:text-[#A65D45] transition-colors inline-flex items-center gap-1.5 sm:gap-2"
                  >
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-serif text-base sm:text-lg mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#A65D45] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#E5D7C1]/60">{contact.address}</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#A65D45] shrink-0" />
                <span className="text-xs sm:text-sm text-[#E5D7C1]/60">
                  {Array.isArray(contact.phone) ? (
                    contact.phone.map((num, idx) => (
                      <span key={idx}>{num}<br /></span>
                    ))
                  ) : (
                    contact.phone
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#A65D45] shrink-0" />
                <span className="text-xs sm:text-sm text-[#E5D7C1]/60 break-all">{contact.generalEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#A65D45]/20 py-4 sm:py-5 md:py-6 text-xs sm:text-sm text-[#E5D7C1]/40 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p>&copy; {currentYear} {orgName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}