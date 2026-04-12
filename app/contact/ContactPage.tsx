"use client";
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { contact, beliefs, catchmentAreas } from '@/constants/organization';
import { useContactForm } from '@/hooks/useContactForm';

export default function ContactPage() {
  const {
    formData,
    status,
    errors,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="bg-[#F5F0E8]">
      {/* Header - warm, welcoming */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="max-w-3xl">
              <span className="text-[#A65D45] text-sm tracking-[0.3em] uppercase mb-4 block font-light">
                Let's Connect
              </span>
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
          {/* Left Column - Contact Information (unchanged) */}
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
                    {Array.isArray(contact.phone) ? (
                      contact.phone.map((num, idx) => <p key={idx} className="text-sm text-[#1E3A3F]/60">{num}</p>)
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
              <div className="mt-8 pt-6 border-t border-[#E5D7C1]">
                <p className="text-xs text-[#1E3A3F]/40 italic">"{beliefs.loveQuote}"</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white p-8 md:p-10">
              <h2 className="text-2xl font-serif text-[#1E3A3F] mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs text-[#1E3A3F]/60 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm ${
                        errors.name ? 'ring-1 ring-red-500' : ''
                      }`}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-[#1E3A3F]/60 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm ${
                        errors.email ? 'ring-1 ring-red-500' : ''
                      }`}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm"
                    placeholder="+265 ..."
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs text-[#1E3A3F]/60 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm ${
                      errors.subject ? 'ring-1 ring-red-500' : ''
                    }`}
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="volunteer">I want to volunteer</option>
                    <option value="partner">Partnership inquiry</option>
                    <option value="donate">Donation support</option>
                    <option value="info">General information</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-[#1E3A3F]/60 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#F5F0E8] border-0 focus:ring-1 focus:ring-[#A65D45] outline-none text-[#1E3A3F] text-sm resize-none ${
                      errors.message ? 'ring-1 ring-red-500' : ''
                    }`}
                    placeholder="I'd like to volunteer..."
                    required
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#A65D45] text-white px-6 py-3 font-semibold hover:bg-[#8E4F3A] transition-colors inline-flex items-center justify-center gap-2 group text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>Sending <span className="animate-spin">⏳</span></>
                  ) : (
                    <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>

                {status === 'success' && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 text-sm rounded-md">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && errorMessage && (
                  <div className="mt-4 p-3 bg-red-100 text-red-700 text-sm rounded-md">
                    {errorMessage}
                  </div>
                )}

                <p className="text-xs text-[#1E3A3F]/30 text-center mt-4">
                  We'll respond within 2-3 business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-32">
        <div className="border-t border-[#E5D7C1] pt-12 text-center">
          <p className="text-sm text-[#1E3A3F]/40">
            Serving communities across {catchmentAreas.length} chieftaincies in Southern Malawi.
          </p>
        </div>
      </div>
    </div>
  );
}