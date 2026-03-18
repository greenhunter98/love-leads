import Link from 'next/link'
import { Phone, Mail, MapPin, Heart, Send, Clock, MessageCircle } from 'lucide-react'
import { contact, beliefs, catchmentAreas, orgName } from '@/constants/organization'

export default function ContactPage() {
  return (
    <div className="bg-[#F5F0E8]">
      {/* Header - warm, welcoming */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="max-w-3xl">
              <span className="text-[#A65D45] text-sm tracking-[0.3em] uppercase mb-4 block font-light">Let's Connect</span>
              <h1 className="text-6xl md:text-8xl font-serif text-[#1E3A3F] mb-6 leading-[0.9]">
                Contact Us
              </h1>
              <div className="w-24 h-1 bg-[#A65D45] mb-8"></div>
            </div>
            <p className="text-xl text-[#1E3A3F]/50 max-w-xl">
              We'd love to hear from you – whether you want to volunteer, partner, or just learn more.
            </p>
          </div>
        </div>
      </div>

      {/* Two Column Layout - Contact Info + Form */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <div className="bg-white p-8 md:p-10">
              <h2 className="text-2xl font-serif text-[#1E3A3F] mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F0E8] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#A65D45]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#1E3A3F] mb-1">Visit Us</h3>
                    <p className="text-sm text-[#1E3A3F]/60">{contact.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F0E8] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#A65D45]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#1E3A3F] mb-1">Call Us</h3>
                    {/* If contact.phones is an array, map over it; otherwise use a single line */}
                    {Array.isArray(contact.phone) ? (
                      contact.phone.map((num, idx) => (
                        <p key={idx} className="text-sm text-[#1E3A3F]/60">{num}</p>
                      ))
                    ) : (
                      <p className="text-sm text-[#1E3A3F]/60">{contact.phone}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F0E8] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#A65D45]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#1E3A3F] mb-1">Email Us</h3>
                    <p className="text-sm text-[#1E3A3F]/60 break-all">{contact.generalEmail}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F5F0E8] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#A65D45]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[#1E3A3F] mb-1">Office Hours</h3>
                    <p className="text-sm text-[#1E3A3F]/60">Mon-Fri: 8am-5pm</p>
                    <p className="text-sm text-[#1E3A3F]/60">Sat: 9am-12pm</p>
                    <p className="text-xs text-[#1E3A3F]/40 mt-1">Closed Sunday</p>
                  </div>
                </div>
              </div>

              {/* Quote - from beliefs */}
              <div className="mt-8 pt-6 border-t border-[#E5D7C1]">
                <p className="text-xs text-[#1E3A3F]/40 italic">
                  "{beliefs.loveQuote}"
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white p-8 md:p-10">
              <h2 className="text-2xl font-serif text-[#1E3A3F] mb-8">Send a Message</h2>
              
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-[#1E3A3F]/60 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-[#1E3A3F]/60 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs text-[#1E3A3F]/60 mb-1">
                    Phone Number <span className="text-[#1E3A3F]/30">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm"
                    placeholder="+265 ..."
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs text-[#1E3A3F]/60 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm"
                  >
                    <option value="" className="bg-[#F5F0E8]">Select an option</option>
                    <option value="volunteer" className="bg-[#F5F0E8]">I want to volunteer</option>
                    <option value="partner" className="bg-[#F5F0E8]">Partnership inquiry</option>
                    <option value="donate" className="bg-[#F5F0E8]">Donation support</option>
                    <option value="info" className="bg-[#F5F0E8]">General information</option>
                    <option value="other" className="bg-[#F5F0E8]">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-[#1E3A3F]/60 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm resize-none"
                    placeholder="I'd like to volunteer..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A65D45] text-white px-6 py-3 font-semibold hover:bg-[#8E4F3A] transition-colors inline-flex items-center justify-center gap-2 group text-sm"
                >
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-xs text-[#1E3A3F]/30 text-center mt-4">
                We'll respond within 2-3 business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Location Note - one line, no repetition */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-32">
        <div className="border-t border-[#E5D7C1] pt-12 text-center">
          <p className="text-sm text-[#1E3A3F]/40">
            Serving communities across {catchmentAreas.length} chieftaincies in Southern Malawi.
          </p>
        </div>
      </div>
    </div>
  )
}