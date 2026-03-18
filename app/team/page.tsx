import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Heart, Users, ArrowRight, Quote, MapPin } from 'lucide-react'
import { teamMembers, teamQuote, catchmentAreas, colors } from '@/constants/organization'

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Meet Our Team | LOVE LEADS ORGANISATION</title>
        <meta name="description" content="Dedicated leaders serving with love and commitment. Get to know the team behind LOVE LEADS ORGANISATION." />
      </Head>

      <div className="bg-[#F5F0E8]">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] bg-gradient-to-br from-[#1E3A3F] to-[#2A4A50] overflow-hidden">
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
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#A65D45] opacity-10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white opacity-5 rounded-full"></div>
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
        </section>

        {/* Team Quote */}
        <section className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-20 md:py-24">
          <div className="text-center">
            <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#A65D45] mx-auto mb-6" />
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1E3A3F] leading-relaxed">
              "{teamQuote}"
            </p>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="container mx-auto px-6 py-20 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-5xl font-serif text-[#1E3A3F] tracking-tighter uppercase">Team</h2>
            <div className="w-16 h-1 bg-[#A65D45] mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col group">
                {/* Top: The Image */}
                <div className="relative aspect-[5/5] overflow-hidden bg-[#F2F2F2]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1E3A3F] flex items-center justify-center text-5xl font-serif text-white/10">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Bottom: Data Block */}
                <div className="bg-[#1E3A3F] p-6 text-white">
                  <div className="mb-6">
                    <p className="text-[#A65D45] text-[10px] font-bold uppercase tracking-[0.25em] mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-2xl font-serif leading-tight">
                      {member.name}
                    </h3>
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex gap-6 border-t border-white/10 pt-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-[10px] uppercase tracking-widest font-bold hover:text-[#A65D45] transition-colors"
                    >
                      Email
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="text-[10px] uppercase tracking-widest font-bold hover:text-[#A65D45] transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Catchment Area Section */}
        <section className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-16 md:py-20">
          <div className="bg-[#FAF7F2] p-8 md:p-12 text-center border border-[#E5D7C1]">
            <MapPin className="w-8 h-8 text-[#A65D45] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1E3A3F] mb-6">Our Catchment Areas</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
              {catchmentAreas.map((area) => (
                <div key={area.region}>
                  <h3 className="text-xl font-serif text-[#1E3A3F] mb-3 flex items-center">
                    <span className="w-2 h-2 bg-[#A65D45] mr-2"></span>
                    {area.chapterName}
                  </h3>
                  <p className="text-[#1E3A3F]/60">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Drives Us */}
        <section className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-16 md:py-20">
          <div className="text-center">
            <Heart className="w-8 h-8 text-[#A65D45] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#1E3A3F] mb-4">What Drives Us</h2>
            <p className="text-base md:text-lg text-[#1E3A3F]/60 leading-relaxed max-w-2xl mx-auto">
              We believe that true leadership is service. Every member of our team is committed to listening, learning, and loving – because we know that knowledge without compassion cannot change lives.
            </p>
          </div>
        </section>

        {/* Leadership Philosophy */}
        <section className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl pb-20">
          <div className="bg-[#FAF7F2] p-8 md:p-12 border border-[#E5D7C1]">
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
        </section>

        {/* Join Us */}
        <section className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl pb-20 md:pb-32">
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
        </section>
      </div>
    </>
  )
}