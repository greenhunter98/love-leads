import Link from 'next/link'
import Image from 'next/image'
import { Users, Briefcase, Heart, Stethoscope, GraduationCap, ArrowRight, Target, Leaf, Globe, HandHelping } from 'lucide-react'

export default function CommunityPage() {
  const initiatives = [
    {
      icon: Briefcase,
      title: 'Income Generating Activities (IGAs)',
      description: 'We promote and support income generating activities in the fight against poverty, helping communities build sustainable livelihoods.',
      details: [
        'Small business startups support',
        'Vocational skills training',
        'Market access and connections',
        'Savings and loan groups',
        'Agricultural initiatives'
      ],
      color: '#A65D45',
      stats: '200+ businesses started'
    },
    {
      icon: Stethoscope,
      title: 'Counseling & Medical Care',
      description: 'We provide counseling and medical care in the communities and refer those that need medical attention to the appropriate institutions.',
      details: [
        'Community-based counseling services',
        'Mental health support',
        'Medical referrals to hospitals and clinics',
        'Health education and awareness',
        'Follow-up care and support'
      ],
      color: '#1E3A3F',
      stats: '500+ individuals supported'
    },
    {
      icon: GraduationCap,
      title: 'Capacity Building',
      description: 'We provide capacity building to staff and community members to enhance their skills and effectiveness.',
      details: [
        'Staff training and development',
        'Leadership workshops',
        'Organizational strengthening',
        'Skills transfer to community members',
        'Continuous learning programs'
      ],
      color: '#A65D45',
      stats: '50+ workshops conducted'
    },
    {
      icon: Users,
      title: 'Community Education',
      description: 'We educate communities on various issues to promote awareness, rights, and sustainable development.',
      details: [
        'Women\'s and children\'s rights education',
        'Health and hygiene awareness',
        'HIV/AIDS prevention education',
        'Environmental conservation',
        'Civic education and participation'
      ],
      color: '#1E3A3F',
      stats: '12+ topics covered'
    }
  ]

  const educationTopics = [
    "Women's Rights", "Children's Rights", "HIV/AIDS Prevention", "Health & Hygiene",
    "Environmental Conservation", "Civic Participation", "Family Planning", "Nutrition",
    "Sanitation", "Legal Rights", "Financial Literacy", "Peace Building",
    "Agricultural Best Practices", "Water Safety", "Early Childhood Development", "Disaster Preparedness"
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Header - warm, inviting */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="max-w-3xl">
              <span className="text-[#A65D45] text-sm tracking-[0.3em] uppercase mb-4 block">Together We Thrive</span>
              <h1 className="text-6xl md:text-8xl font-serif text-[#1E3A3F] mb-6 leading-[0.9]">
                Community
              </h1>
              <div className="w-24 h-1 bg-[#A65D45] mb-8"></div>
            </div>
            <p className="text-xl text-[#1E3A3F]/50 max-w-xl">
              Strengthening communities through sustainable livelihoods, health services, education, and capacity building
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-32">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 h-32">
          {[...Array(18)].map((_, i) => (
            <div 
              key={i} 
              className={`${i % 2 === 0 ? 'bg-[#A65D45]/10' : 'bg-[#1E3A3F]/10'} h-full`}
              style={{ 
                opacity: 0.3 + (i * 0.02),
                transform: `scale(${0.8 + (i % 3) * 0.1})`
              }}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <span className="text-xs text-[#1E3A3F]/30 tracking-widest uppercase">•  Community Impact  •</span>
        </div>
      </div>

      {/* Introduction - varied width, warm tone */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-32">
              <Globe className="w-8 h-8 text-[#A65D45] mb-4" />
              <h2 className="text-3xl font-serif text-[#1E3A3F]">Our Belief</h2>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-2xl text-[#1E3A3F] leading-relaxed">
              We believe that sustainable change happens when communities are empowered with knowledge, skills, and resources.
            </p>
            <p className="text-lg text-[#1E3A3F]/50 leading-relaxed">
              Our community programs address multiple dimensions of development, recognizing that every community has unique needs and strengths. We work alongside community members to build solutions that last.
            </p>
          </div>
        </div>
      </div>

      {/* Initiatives  */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">Our Initiatives</h2>
          <p className="text-lg text-[#1E3A3F]/40">Programs that reach every corner of the community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map((initiative, idx) => {
            const Icon = initiative.icon
            
            return (
              <div 
                key={idx} 
                className="group relative bg-white p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3" style={{ backgroundColor: `${initiative.color}10` }}>
                    <Icon className="w-6 h-6" style={{ color: initiative.color }} />
                  </div>
                  <span className="text-xs text-[#1E3A3F]/30 font-mono">{initiative.stats}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-[#1E3A3F] mb-3">{initiative.title}</h3>
                <p className="text-[#1E3A3F]/50 text-sm mb-6 leading-relaxed">{initiative.description}</p>
                
                <div className="space-y-2 border-t border-[#1E3A3F]/10 pt-4">
                  {initiative.details.map((detail, i) => (
                    <p key={i} className="text-xs text-[#1E3A3F]/40 flex items-start gap-2">
                      <span className="text-[#A65D45] mt-1">•</span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* IGAs Focus - full width with decorative elements */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-32">
        <div className="relative bg-[#FAF7F2] p-12 md:p-16 overflow-hidden">
          {/* Decorative patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A65D45]/5 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1E3A3F]/5 rounded-full transform -translate-x-24 translate-y-24"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <HandHelping className="w-8 h-8 text-[#A65D45] mb-4" />
              <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4 leading-tight">
                Fighting Poverty <br/>Through IGAs
              </h2>
              <p className="text-lg text-[#1E3A3F]/60 mb-8 leading-relaxed">
                Income Generating Activities (IGAs) are at the heart of our poverty reduction strategy, helping communities build sustainable livelihoods.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Small Business', 'Agriculture', 'Handicrafts', 'Livestock'].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 text-center border-l-4 border-[#A65D45]">
                    <span className="text-sm text-[#1E3A3F] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Trade Skills', 'Market Access', 'Savings Groups', 'Micro-enterprise'].map((item, idx) => (
                <div key={idx} className="bg-white p-4 text-center border-r-4 border-[#1E3A3F]">
                  <span className="text-sm text-[#1E3A3F] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Health & Education - split with decorative elements */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1E3A3F] text-white p-12 relative">
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#A65D45] opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-2 border-[#A65D45]/20"></div>
            
            <Heart className="w-8 h-8 text-[#A65D45] mb-4" />
            <h3 className="text-3xl font-serif text-[#E5D7C1] mb-3">Counseling Services</h3>
            <p className="text-[#E5D7C1]/70 mb-6 text-sm leading-relaxed">
              We provide psychological and emotional support to individuals and families facing challenges, trauma, or difficult life circumstances.
            </p>
            <ul className="space-y-2 text-sm text-[#E5D7C1]/50">
              <li className="flex items-start gap-2">
                <span className="text-[#A65D45] mt-1">•</span>
                <span>Individual and group counseling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A65D45] mt-1">•</span>
                <span>Trauma healing sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A65D45] mt-1">•</span>
                <span>Family support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A65D45] mt-1">•</span>
                <span>Crisis intervention</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#FAF7F2] p-12 relative">
            {/* Decorative pattern */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#1E3A3F] opacity-5"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-2 border-[#1E3A3F]/10"></div>
            
            <Stethoscope className="w-8 h-8 text-[#A65D45] mb-4" />
            <h3 className="text-3xl font-serif text-[#1E3A3F] mb-3">Medical Referrals</h3>
            <p className="text-[#1E3A3F]/60 mb-6 text-sm leading-relaxed">
              We connect community members with appropriate medical institutions for specialized care and treatment.
            </p>
            <ul className="space-y-2 text-sm text-[#1E3A3F]/40">
              <li className="flex items-start gap-2">
                <span className="text-[#A65D45] mt-1">•</span>
                <span>Referrals to hospitals and clinics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A65D45] mt-1">•</span>
                <span>Follow-up support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A65D45] mt-1">•</span>
                <span>Health education</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A65D45] mt-1">•</span>
                <span>Preventive care awareness</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Community Education - topic cloud with decorative background */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-32">
        <div className="relative bg-white p-16">
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-32 h-32 border-2 border-[#A65D45]/10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-[#1E3A3F]/10"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">Community Education</h2>
            <p className="text-lg text-[#1E3A3F]/40">Topics we cover to build awareness and capacity</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto relative z-10">
            {educationTopics.map((topic, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 text-[#1E3A3F] text-sm"
                style={{
                  backgroundColor: idx % 3 === 0 ? '#A65D45' : idx % 5 === 0 ? '#1E3A3F' : '#F5F0E8',
                  color: idx % 3 === 0 || idx % 5 === 0 ? 'white' : '#1E3A3F',
                  fontSize: idx % 3 === 0 ? '1.1rem' : idx % 5 === 0 ? '1.2rem' : '0.9rem',
                  opacity: idx % 4 === 0 ? 0.9 : 1
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - warm, community-focused */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-32">
        <div className="bg-[#1E3A3F] text-white p-16 md:p-20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#A65D45]/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#A65D45]/10 rounded-full"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <Users className="w-12 h-12 text-[#A65D45] mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-serif text-[#E5D7C1] mb-6 leading-tight">
              Strengthen Communities
            </h2>
            <p className="text-xl text-[#E5D7C1]/70 mb-10 max-w-2xl mx-auto">
              Your support helps us provide income opportunities, health services, and education that empower entire communities.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#A65D45] text-white px-10 py-4 font-semibold hover:bg-[#8E4F3A] transition-colors inline-flex items-center group"
              >
                Get Involved <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/programs" 
                className="border-2 border-white text-white px-10 py-4 font-semibold hover:bg-white hover:text-[#1E3A3F] transition-colors"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}