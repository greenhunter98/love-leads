import Link from 'next/link'
import { 
  UserGroupIcon,
  BriefcaseIcon,
  HeartIcon,
  ScaleIcon,
  BuildingLibraryIcon,
  ArrowRightIcon,
  FlagIcon,
  SunIcon,
  SwatchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

export default function WomenPage() {
  const initiatives = [
    {
      icon: UserGroupIcon,
      title: 'Women Empowerment',
      description: 'Love Leads strives to minimize the number of women who are subjected to violence, parenting, spiritual, moral and psychosocial needs. This is achieved by empowering them to access knowledge and greater economic independence.',
      details: [
        'Support for single mothers (due to death or divorce)',
        'Reducing violence against women',
        'Addressing parenting pressures',
        'Spiritual and moral support',
        'Psychosocial counseling'
      ],
      color: '#A65D45',
    },
    {
      icon: BriefcaseIcon,
      title: 'Entrepreneurship & Business',
      description: 'We empower women to achieve economic independence by training them to become entrepreneurs and organizing business seminars.',
      details: [
        'Entrepreneurial skills training',
        'Business seminars and workshops',
        'Exposure to business opportunities',
        'Financial literacy education',
        'Support for small business startups'
      ],
      color: '#1E3A3F',
    },
    {
      icon: HeartIcon,
      title: 'Widow Support',
      description: 'We provide support to widows and promote women\'s and children\'s rights especially through community education.',
      details: [
        'Material support for widows',
        'Community education on women\'s rights',
        'Children\'s rights advocacy',
        'Emotional and spiritual support',
        'Connection to resources'
      ],
      color: '#A65D45',
    },
    {
      icon: BuildingLibraryIcon,
      title: 'Women in Politics',
      description: 'We encourage the participation of women in politics, socio-economic activities, and decision-making processes.',
      details: [
        'Encouraging political participation',
        'Leadership development training',
        'Advocacy for women\'s representation',
        'Support for women in decision-making roles',
        'Community awareness on women\'s leadership'
      ],
      color: '#1E3A3F',
    }
  ]

  const supportAreas = [
    "Entrepreneurship Training",
    "Spiritual Support",
    "Community Connection",
    "Leadership Development",
    "Financial Literacy",
    "Legal Rights Advocacy"
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Header - elegant, refined */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="max-w-3xl">
            <span className="text-[#A65D45] text-sm tracking-[0.3em] uppercase mb-4 block font-light">Strength · Dignity · Hope</span>
            <h1 className="text-6xl md:text-8xl font-serif text-[#1E3A3F] mb-6 leading-[0.9]">
              Women
            </h1>
            <div className="w-24 h-0.5 bg-[#A65D45] mb-8"></div>
            <p className="text-xl md:text-2xl text-[#1E3A3F]/50 max-w-2xl font-light">
              Empowering women to become financially independent, confident, and influential in their communities
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Pattern  */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl mb-32">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-1 h-48">
          {[...Array(32)].map((_, i) => (
            <div 
              key={i} 
              className={`${i % 3 === 0 ? 'bg-[#A65D45]' : i % 5 === 0 ? 'bg-[#1E3A3F]' : 'bg-[#E5D7C1]'} h-full`}
              style={{ 
                opacity: 0.1 + (i * 0.01),
              }}
            />
          ))}
        </div>
        <div className="text-center mt-6">
          <span className="text-xs text-[#1E3A3F]/30 tracking-[0.3em] uppercase">•  Empowered Women  •</span>
        </div>
      </div>

      {/* Introduction with quote  */}
      <div className="container mx-auto px-6 md:px-12 max-w-4xl pb-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-32">
              <SwatchIcon className="w-8 h-8 text-[#A65D45] mb-4" />
              <h2 className="text-3xl font-serif text-[#1E3A3F]">Our Vision</h2>
            </div>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div className="relative">
              <span className="absolute -top-8 -left-6 text-8xl text-[#E5D7C1] font-serif leading-none">"</span>
              <p className="text-2xl md:text-3xl font-serif italic text-[#1E3A3F] leading-relaxed relative z-10 pl-6">
                A woman with dignity can transform a community.
              </p>
            </div>
            <p className="text-lg text-[#1E3A3F]/40 leading-relaxed">
              We believe that when women are empowered, entire communities flourish. Our work focuses on creating opportunities for women to lead, earn, and thrive.
            </p>
          </div>
        </div>
      </div>

      {/* Key Quote - elegant pull quote */}
      <div className="container mx-auto px-6 md:px-12 max-w-4xl pb-32">
        <div className="bg-white p-16 md:p-20 relative">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#E5D7C1]"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#E5D7C1]"></div>
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-8xl text-[#E5D7C1] font-serif leading-none block">"</span>
            <p className="text-2xl md:text-3xl font-serif italic text-[#1E3A3F] max-w-3xl mx-auto leading-relaxed">
              We believe that little love demonstrated can do much than much love words spoken. This is why Love Leads ministry does not only believe in telling people about the love of Christ, rather, showing them the love of Christ by being kind and sharing what we have with those targeted needy people.
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              <div className="w-12 h-0.5 bg-[#A65D45]/30"></div>
              <p className="text-[#1E3A3F]/30">— Love Leads Organization</p>
              <div className="w-12 h-0.5 bg-[#A65D45]/30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Focus on Women */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-[#A65D45]"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-[#1E3A3F]/30">Our Focus</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4 leading-tight">
              Why Focus on Women?
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-[#1E3A3F]/60 leading-relaxed">
              Love Leads strives to minimize the number of women who are subjected to violence, parenting pressures, spiritual, moral and psychosocial needs. The organization is joining forces in minimizing the pressure and challenging responsibility experienced by single and foster parents.
            </p>
            <p className="text-lg text-[#1E3A3F]/40 leading-relaxed">
              This serves the purpose of creating time and opportunities for single parents to attend to other self-developing activities and providing material support to their children, reducing all kinds of immoralities like prostitution.
            </p>
            
            {/* Decorative stats block */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="border-l-4 border-[#A65D45] pl-4">
                <div className="text-3xl font-serif text-[#1E3A3F]">500+</div>
                <div className="text-xs text-[#1E3A3F]/40 uppercase tracking-wider">Women Empowered</div>
              </div>
              <div className="border-l-4 border-[#1E3A3F] pl-4">
                <div className="text-3xl font-serif text-[#1E3A3F]">50+</div>
                <div className="text-xs text-[#1E3A3F]/40 uppercase tracking-wider">Businesses Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives - elegant alternating, no images */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">Our Initiatives</h2>
          <p className="text-lg text-[#1E3A3F]/40">Programs designed with women in mind</p>
        </div>

        <div className="space-y-16">
          {initiatives.map((initiative, idx) => {
            const Icon = initiative.icon
            
            return (
              <div key={idx} className="group relative">
                {/* Background number - elegant, subtle */}
                <div className="absolute -top-6 -left-6 text-[6rem] md:text-[8rem] font-serif text-[#E5D7C1] opacity-40 select-none pointer-events-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                
                <div className="grid md:grid-cols-5 gap-8 items-start relative z-10">
                  {/* Icon column */}
                  <div className="md:col-span-1">
                    <div className="sticky top-32">
                      <div className="w-16 h-16 border-2 border-[#E5D7C1] flex items-center justify-center bg-white">
                        <Icon className="w-6 h-6" style={{ color: initiative.color }} />
                      </div>
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="md:col-span-4 space-y-6">
                    <h3 className="text-3xl md:text-4xl font-serif text-[#1E3A3F]">{initiative.title}</h3>
                    
                    <p className="text-lg text-[#1E3A3F]/50 leading-relaxed">
                      {initiative.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      {initiative.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-[#A65D45] mt-1">•</span>
                          <span className="text-sm text-[#1E3A3F]/40">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Decorative divider */}
                {idx < initiatives.length - 1 && (
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E5D7C1] to-transparent my-16"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Single Parents Focus - elegant, warm */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="bg-[#FAF7F2] p-16 md:p-20 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A65D45] opacity-5 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1E3A3F] opacity-5 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <HeartIcon className="w-8 h-8 text-[#A65D45]" />
              <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4 leading-tight">
                Supporting Single Parents
              </h2>
              <p className="text-lg text-[#1E3A3F]/60 leading-relaxed">
                Love Lead is there to improve the situation of women who have become single parents due to death or divorce of their spouses. This is achieved by sharing with them the Word of God and creating life changing opportunities that can transform their lives for good.
              </p>
            </div>
            
            <div className="space-y-6">
              {supportAreas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-4 border-b border-[#E5D7C1] pb-4 group hover:border-[#A65D45] transition-colors">
                  <div className="w-8 h-8 bg-white flex items-center justify-center">
                    <SparklesIcon className="w-4 h-4 text-[#A65D45]" />
                  </div>
                  <span className="text-[#1E3A3F]/70 group-hover:text-[#1E3A3F] transition-colors">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - elegant invitation */}
      <div className="container mx-auto px-6 md:px-12 max-w-4xl pb-32">
        <div className="text-center bg-white p-16 md:p-20 relative">
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 w-16 h-16 border-2 border-[#E5D7C1]"></div>
          <div className="absolute bottom-6 right-6 w-16 h-16 border-2 border-[#E5D7C1]"></div>
          
          <div className="relative z-10">
            <SunIcon className="w-10 h-10 text-[#A65D45] mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-serif text-[#1E3A3F] mb-6 leading-tight">
              Empower a Woman Today
            </h2>
            <p className="text-xl text-[#1E3A3F]/40 mb-10 max-w-2xl mx-auto">
              Your support helps single mothers gain skills, start businesses, and build a better future for themselves and their children.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#A65D45] text-white px-10 py-4 font-semibold hover:bg-[#8E4F3A] transition-colors inline-flex items-center group"
              >
                Get Involved <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/programs" 
                className="text-[#1E3A3F] px-10 py-4 font-semibold hover:bg-[#1E3A3F] hover:text-white transition-colors border border-[#1E3A3F]"
              >
                View All Programs
              </Link>
            </div>
            
            {/* Elegant separator */}
            <div className="flex justify-center gap-3 mt-16">
              <span className="w-2 h-2 rounded-full bg-[#E5D7C1]"></span>
              <span className="w-2 h-2 rounded-full bg-[#E5D7C1]"></span>
              <span className="w-2 h-2 rounded-full bg-[#A65D45]"></span>
              <span className="w-2 h-2 rounded-full bg-[#E5D7C1]"></span>
              <span className="w-2 h-2 rounded-full bg-[#E5D7C1]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}