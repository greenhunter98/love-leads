import Link from 'next/link'
import Image from 'next/image'
import { 
  Heart, 
  CreditCard, 
  Banknote, 
  Smartphone, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Globe,
  Mail,
  Phone,
  Copy
} from 'lucide-react'

export default function DonatePage() {
  const donationOptions = [
    {
      icon: CreditCard,
      title: 'Online Giving',
      description: 'Secure credit card donations through our payment partner.',
      action: 'Donate Online',
      color: '#A65D45'
    },
    {
      icon: Banknote,
      title: 'Bank Transfer',
      description: 'Direct bank transfers to our Malawi account.',
      action: 'View Bank Details',
      color: '#1E3A3F'
    },
    {
      icon: Smartphone,
      title: 'Mobile Money',
      description: 'Send donations via Airtel Money or TNM Mpamba.',
      action: 'View Numbers',
      color: '#A65D45'
    }
  ]

  const bankDetails = {
    bank: 'National Bank of Malawi',
    accountName: 'Love Leads Organization',
    accountNumber: '1009876543',
    branch: 'Blantyre Main Branch',
    swift: 'NBMA MWMW'
  }

  const mobileMoney = [
    { provider: 'Airtel Money', number: '+265 994 291 015' },
    { provider: 'TNM Mpamba', number: '+265 884 127 220' }
  ]

  const impactItems = [
    'provides school supplies for one child',
    'feeds 10 children for a week',
    'helps a single parent start a small business',
    'supports disaster relief for a family'
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1772885865551.jpg"
            alt="Community in Malawi"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A3F] via-[#1E3A3F]/90 to-[#1E3A3F]/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="max-w-3xl text-white">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-[#A65D45]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#E5D7C1]">Give · Love · Transform</span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-4 text-[#A65D45]">
                Donate
              </h1>
              <div className="w-20 h-1 bg-[#A65D45] mb-6"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl">
                Your generosity brings hope, education, and opportunity to vulnerable communities in Malawi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-16 md:py-20">
        <div className="text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#1E3A3F] leading-relaxed">
            "Little love demonstrated can do much more than much love spoken."
          </p>
          <p className="text-[#A65D45] mt-4 text-sm">— Love Leads Organization</p>
        </div>
      </div>

      {/* Impact Preview */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl pb-12">
        <div className="bg-white p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-serif text-[#1E3A3F] mb-6 text-center">Your Gift Creates Change</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {impactItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#A65D45] shrink-0 mt-0.5" />
                <span className="text-sm text-[#1E3A3F]/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation Options Grid */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">Ways to Give</h2>
          <p className="text-lg text-[#1E3A3F]/50">Choose the method that works best for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {donationOptions.map((option, idx) => {
            const Icon = option.icon
            return (
              <div key={idx} className="bg-white p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#F5F0E8] rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7" style={{ color: option.color }} />
                </div>
                <h3 className="text-2xl font-serif text-[#1E3A3F] mb-3">{option.title}</h3>
                <p className="text-sm text-[#1E3A3F]/60 mb-5 leading-relaxed">{option.description}</p>
                <button className="text-[#A65D45] font-medium inline-flex items-center text-sm group">
                  {option.action} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-12">
        <div className="bg-[#FAF7F2] p-8 md:p-10">
          <h3 className="text-2xl font-serif text-[#1E3A3F] mb-6">Bank Transfer Details</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1E3A3F]/40 mb-1">Bank</p>
                <p className="text-[#1E3A3F] font-medium">{bankDetails.bank}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1E3A3F]/40 mb-1">Account Name</p>
                <p className="text-[#1E3A3F] font-medium">{bankDetails.accountName}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1E3A3F]/40 mb-1">Account Number</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#1E3A3F] font-medium">{bankDetails.accountNumber}</p>
                  <button className="text-[#A65D45] hover:text-[#8E4F3A]">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1E3A3F]/40 mb-1">Branch</p>
                <p className="text-[#1E3A3F] font-medium">{bankDetails.branch}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1E3A3F]/40 mb-1">SWIFT Code</p>
                <p className="text-[#1E3A3F] font-medium">{bankDetails.swift}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Money Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-12">
        <div className="bg-[#FAF7F2] p-8 md:p-10">
          <h3 className="text-2xl font-serif text-[#1E3A3F] mb-6">Mobile Money</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {mobileMoney.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white">
                <div>
                  <p className="text-sm font-medium text-[#1E3A3F]">{item.provider}</p>
                  <p className="text-xs text-[#1E3A3F]/60">{item.number}</p>
                </div>
                <button className="text-[#A65D45] hover:text-[#8E4F3A]">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Note */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-8">
        <div className="flex items-center justify-center gap-3 text-sm text-[#1E3A3F]/40">
          <Shield className="w-4 h-4" />
          <span>All donations are secure and used directly for our programs in Malawi</span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl py-16 md:py-20">
        <div className="text-center border-t border-[#E5D7C1] pt-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E3A3F] mb-4">Questions?</h2>
          <p className="text-lg text-[#1E3A3F]/50 mb-8">
            We're here to help with any questions about giving.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:lovleads20@gmail.com" className="flex items-center gap-2 text-[#1E3A3F]/70 hover:text-[#A65D45] transition-colors">
              <Mail className="w-4 h-4" />
              <span>lovleads20@gmail.com</span>
            </a>
            <a href="tel:+265994291015" className="flex items-center gap-2 text-[#1E3A3F]/70 hover:text-[#A65D45] transition-colors">
              <Phone className="w-4 h-4" />
              <span>(+265) 0994 291 015</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl pb-20 md:pb-32">
        <div className="bg-[#1E3A3F] text-white p-10 md:p-12 text-center">
          <Heart className="w-10 h-10 text-[#A65D45] mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-serif text-[#E5D7C1] mb-3">Every Gift Matters</h3>
          <p className="text-[#E5D7C1]/70 mb-6 max-w-lg mx-auto">
            No matter the size, your donation helps transform lives in Malawi.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-[#A65D45] text-white px-6 py-3 font-medium hover:bg-[#8E4F3A] transition-colors group"
          >
            Contact Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}