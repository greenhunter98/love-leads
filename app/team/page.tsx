import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, ArrowRight, Quote, Mail, Phone, Linkedin } from 'lucide-react'

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'MR TIMOTHY FORTUNE PITANI',
      role: 'Founder',
      description: 'Meet the Founder of LOVE LEADS ORGANISATION',
      initial: 'T',
      color: '#A65D45'
    },
    {
      name: 'GRACE CHAMANIKA',
      role: 'Board Member',
      description: 'LOVE LEADS ORGANISATION',
      initial: 'G',
      color: '#1E3A3F'
    },
    {
      name: 'ANTHONY A. CHINIKO',
      role: 'Your Partner',
      description: 'Love Leads Organization',
      initial: 'A',
      color: '#A65D45'
    },
    {
      name: 'DOREEN PITANI',
      role: 'Team Member',
      description: 'Love Leads Organization',
      initial: 'D',
      color: '#1E3A3F'
    },
    {
      name: 'CHISOMO NKOLOMA',
      role: 'Board Member',
      description: 'Love Leads Organization',
      initial: 'C',
      color: '#A65D45'
    },
    {
      name: 'CHARITY KANYOZA',
      role: 'Board Member',
      description: 'Love Leads Organization',
      initial: 'C',
      color: '#1E3A3F'
    }
  ]

  return (
    <div className="bg-[#F5F0E8]">
<div className="relative h-[60vh] md:h-[70vh] bg-gradient-to-br from-[#1E3A3F] to-[#2A4A50] overflow-hidden">
  {/* Decorative pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="grid grid-cols-6 gap-4 p-8 rotate-12 scale-150">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="aspect-square">
            <Heart className="w-8 h-8 text-white" />
          </div>
        ))}
      </div>
    </div>
  </div>
  
  {/* Decorative circles */}
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#A65D45] opacity-10 rounded-full"></div>
  <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
  
  {/* Diagonal accent line */}
  <div className="absolute top-0 right-0 w-1/3 h-1 bg-[#A65D45] transform rotate-45 translate-x-1/2"></div>
  
  <div className="relative z-10 h-full flex items-center">
    <div className="container mx-auto px-4 sm:px-6 md:px-12">
      <div className="max-w-3xl text-white">
        <span className="text-[#A65D45] text-sm tracking-[0.3em] uppercase mb-4 block font-light">
          The Heart Behind the Mission
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 leading-[0.9]">
          Meet Our Team
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#A65D45] mb-6"></div>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl">
          Dedicated leaders serving with love and commitment
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Team Quote - preserved exactly */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-20 md:py-24">
        <div className="text-center">
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#A65D45] mx-auto mb-6" />
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1E3A3F] leading-relaxed">
            "Our team is propelled by the belief that the most useful asset of a person is not just knowledge but a heart full of love with ears open to listen and hand willing to help."
          </p>
        </div>
      </div>

      {/* Team Members - Clean Grid (bios removed) */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">Leadership Team</h2>
          <p className="text-lg text-[#1E3A3F]/40">The people who make our mission possible</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 md:p-8 hover:shadow-lg transition-all duration-300 text-center"
            >
              {/* Initial Circle */}
              <div className="mb-4">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-serif text-white mx-auto"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initial}
                </div>
              </div>
              
              {/* Name and Role */}
              <h3 className="text-xl md:text-2xl font-serif text-[#1E3A3F] mb-2">
                {member.name}
              </h3>
              <p className="text-[#A65D45] font-medium text-sm mb-4">
                {member.role}
              </p>
              <p className="text-sm text-[#1E3A3F]/50 mb-4">
                {member.description}
              </p>
              
              {/* Contact Icons */}
              <div className="flex items-center justify-center gap-3 pt-3 border-t border-[#E5D7C1]">
                <Mail className="w-4 h-4 text-[#1E3A3F]/30 hover:text-[#A65D45] cursor-pointer transition-colors" />
                <Phone className="w-4 h-4 text-[#1E3A3F]/30 hover:text-[#A65D45] cursor-pointer transition-colors" />
                <Linkedin className="w-4 h-4 text-[#1E3A3F]/30 hover:text-[#A65D45] cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What Drives Us - preserved exactly */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-16 md:py-20">
        <div className="text-center">
          <Heart className="w-8 h-8 text-[#A65D45] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E3A3F] mb-4">What Drives Us</h2>
          <p className="text-base md:text-lg text-[#1E3A3F]/60 leading-relaxed max-w-2xl mx-auto">
            We believe that true leadership is service. Every member of our team is committed to listening, learning, and loving – because we know that knowledge without compassion cannot change lives.
          </p>
        </div>
      </div>

      {/* Leadership Philosophy - preserved exactly */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl pb-20">
        <div className="bg-[#FAF7F2] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-serif text-[#1E3A3F] mb-3">Our Approach</h3>
              <p className="text-sm text-[#1E3A3F]/60 leading-relaxed">
                We lead with humility, serve with joy, and work together as one family. Each team member brings unique gifts, but we share one common purpose: to demonstrate love through action.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-serif text-[#1E3A3F] mb-3">Our Commitment</h3>
              <p className="text-sm text-[#1E3A3F]/60 leading-relaxed">
                To the communities we serve, we promise integrity, transparency, and unwavering dedication. To each other, we promise support, respect, and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us - preserved exactly */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl pb-20 md:pb-32">
        <div className="text-center border-t border-[#E5D7C1] pt-12 md:pt-16">
          <Users className="w-8 h-8 text-[#A65D45] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E3A3F] mb-3">Be Part of Our Story</h2>
          <p className="text-base md:text-lg text-[#1E3A3F]/50 mb-6 max-w-xl mx-auto">
            Whether you're interested in volunteering, partnering, or supporting our work, we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#A65D45] text-white px-6 py-3 font-medium hover:bg-[#8E4F3A] transition-colors inline-flex items-center justify-center group"
            >
              Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/programs" 
              className="text-[#1E3A3F] px-6 py-3 font-medium hover:bg-[#1E3A3F] hover:text-white transition-colors border border-[#1E3A3F]"
            >
              View Our Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}