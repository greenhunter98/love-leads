import Link from 'next/link'
import Image from 'next/image'
import { 
  HeartIcon,
  UserGroupIcon,
  HomeIcon,
  BuildingLibraryIcon,
  TrophyIcon,
  UsersIcon,
  EyeIcon,
  ArrowRightIcon,
  SunIcon,
  GlobeAltIcon,
  FlagIcon,
  HandRaisedIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

export default function Homepage() {
  const programs = [
    {
      icon: HeartIcon,
      title: 'Children',
      description: 'Early childhood development, school feeding, and back-to-school support.',
      href: '/programs/children',
      color: '#A65D45',
      stats: '500+ children'
    },
    {
      icon: TrophyIcon,
      title: 'Youth',
      description: 'Sports, talent development, and HIV/AIDS awareness for young people.',
      href: '/programs/youth',
      color: '#1E3A3F',
      stats: '200+ youth'
    },
    {
      icon: UserGroupIcon,
      title: 'Women',
      description: 'Empowering single parents through entrepreneurship and support.',
      href: '/programs/women',
      color: '#A65D45',
      stats: '150+ women'
    },
    {
      icon: HomeIcon,
      title: 'Disaster Response',
      description: 'Emergency relief, preparedness, and community resilience.',
      href: '/programs/disaster-response',
      color: '#1E3A3F',
      stats: '8 communities'
    },
    {
      icon: BuildingLibraryIcon,
      title: 'Spiritual',
      description: 'Evangelism and the "Action Way" – demonstrating love through action.',
      href: '/programs/spiritual',
      color: '#A65D45',
      stats: 'Weekly gatherings'
    },
    {
      icon: UsersIcon,
      title: 'Community',
      description: 'Income generation, counseling, and community education.',
      href: '/programs/community',
      color: '#1E3A3F',
      stats: '12+ topics'
    }
  ]

  const coreValues = [
    'Incorporation of Christian values and culture',
    'Integrity',
    'Transparency',
    'Accountability',
    'Neutrality',
    'Participatory decision making',
    'Non discrimination',
    'Commitment and hardworking'
  ]

  const approachPoints = [
    {
      icon: HeartIcon,
      title: 'Faith in Action',
      description: 'We demonstrate God\'s love through tangible help, not just words.'
    },
    {
      icon: UserGroupIcon,
      title: 'Community-Led',
      description: 'We work alongside communities, empowering them to lead their own development.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Holistic Care',
      description: 'We address physical, emotional, and spiritual needs together.'
    },
    {
      icon: HandRaisedIcon,
      title: 'Sustainable Impact',
      description: 'We create lasting change through education, skills, and income generation.'
    }
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[550px] lg:min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1772885884005.jpg"
            alt="Malawi community"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A3F] via-[#1E3A3F]/90 to-[#1E3A3F]/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <GlobeAltIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#A65D45]" />
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E5D7C1]">Malawi · Est. 2020</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-1 sm:mb-2 leading-[1.1]">
              Love Leads
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-light italic text-[#E5D7C1] mb-3 sm:mb-4">
              The Action Way
            </h2>
            
            <div className="w-16 sm:w-20 h-1 bg-[#A65D45] mb-4 sm:mb-5"></div>
            
            <p className="text-base sm:text-lg md:text-xl mb-5 sm:mb-6 max-w-xl leading-relaxed text-[#E5D7C1]/90">
              A faith-based non-profit transforming lives in Malawi through education, empowerment, and disaster response.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link 
                href="/programs" 
                className="bg-[#A65D45] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 font-semibold hover:bg-[#8E4F3A] transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base group"
              >
                Explore Our Work <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 font-semibold hover:bg-white hover:text-[#1E3A3F] transition-all duration-300 text-sm sm:text-base"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach - Replaces Lives Transformed */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#A65D45] text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 block">How We Work</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1E3A3F] mb-4 sm:mb-6 leading-tight">
              Our Approach
            </h2>
            <p className="text-lg sm:text-xl text-[#1E3A3F]/50 max-w-2xl mx-auto">
              Four principles guide everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {approachPoints.map((point, idx) => {
              const Icon = point.icon
              return (
                <div key={idx} className="bg-[#FAF7F2] p-6 sm:p-8 text-center group hover:bg-[#F5F0E8] transition-colors duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#A65D45]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1E3A3F] mb-2 sm:mb-3">{point.title}</h3>
                  <p className="text-sm sm:text-base text-[#1E3A3F]/60 leading-relaxed">{point.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#1E3A3F]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <SunIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#A65D45] mx-auto mb-5 sm:mb-6 md:mb-8" />
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#E5D7C1] leading-tight mb-5 sm:mb-6 md:mb-8">
              "Little love demonstrated can do much more than much love spoken."
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[#E5D7C1]/60 max-w-3xl mx-auto">
              Kindness is the language the vulnerable understand best.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            <div className="bg-[#FAF7F2] p-6 sm:p-8 md:p-10 lg:p-12">
              <EyeIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#A65D45] mb-4 sm:mb-5 md:mb-6" />
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1E3A3F] mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-base sm:text-lg text-[#1E3A3F]/60 leading-relaxed">
                To create new hope and a better future where young people and women have equal access to resources and advocacy.
              </p>
            </div>
            <div className="bg-[#FAF7F2] p-6 sm:p-8 md:p-10 lg:p-12 md:mt-12">
              <FlagIcon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#A65D45] mb-4 sm:mb-5 md:mb-6" />
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1E3A3F] mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg text-[#1E3A3F]/60 leading-relaxed">
                Engaging in evangelism, education, and empowerment to bring hope and self-sufficiency through Christ's love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#A65D45] text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 block">What We Do</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1E3A3F] mb-4 sm:mb-6 leading-tight">
              Our Programs
            </h2>
            <p className="text-lg sm:text-xl text-[#1E3A3F]/50">
              Six focus areas creating lasting change in Malawian communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {programs.map((program, idx) => {
              const Icon = program.icon
              return (
                <Link 
                  key={idx} 
                  href={program.href}
                  className="group bg-[#F5F0E8] p-5 sm:p-6 md:p-7 lg:p-8 hover:bg-[#FAF7F2] transition-colors duration-300"
                >
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" style={{ color: program.color }} />
                    <span className="text-[10px] sm:text-xs text-[#1E3A3F]/30">{program.stats}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1E3A3F] mb-2 sm:mb-3">{program.title}</h3>
                  <p className="text-xs sm:text-sm text-[#1E3A3F]/50 mb-3 sm:mb-4 leading-relaxed">{program.description}</p>
                  <span className="inline-flex items-center text-[#A65D45] text-xs sm:text-sm group-hover:underline">
                    Learn more <ArrowRightIcon className="w-3 h-3 ml-1" />
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link 
              href="/programs" 
              className="inline-flex items-center text-[#A65D45] font-medium border-b-2 border-[#A65D45]/30 pb-1 hover:border-[#A65D45] transition-all text-sm sm:text-base"
            >
              View all programs <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <span className="text-[#A65D45] text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 block">Our Foundation</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1E3A3F] mb-4 sm:mb-6">Core Values</h2>
            <p className="text-base sm:text-lg text-[#1E3A3F]/50">The principles that guide everything we do</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {coreValues.map((value, idx) => (
              <div key={idx} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white hover:shadow-md transition-shadow">
                <span className="text-xl sm:text-2xl font-serif text-[#A65D45] w-6 sm:w-8">{idx + 1}</span>
                <span className="text-sm sm:text-base md:text-lg text-[#1E3A3F]">{value}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link 
              href="/about" 
              className="inline-flex items-center text-[#A65D45] font-medium border-b-2 border-[#A65D45]/30 pb-1 hover:border-[#A65D45] transition-all text-sm sm:text-base"
            >
              Read more about us <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <div>
              <span className="text-[#A65D45] text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 block">Our Impact</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1E3A3F] mb-4 sm:mb-6 leading-tight">
                Measurable Change
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#1E3A3F]/50 mb-6 sm:mb-8 leading-relaxed">
                Real lives transformed through your support. Every number represents a person, a family, a community changed.
              </p>
              <Link 
                href="/programs" 
                className="inline-flex items-center text-[#A65D45] font-medium border-b-2 border-[#A65D45]/30 pb-1 hover:border-[#A65D45] transition-all text-sm sm:text-base"
              >
                See our programs <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              <div className="text-center p-4 sm:p-5 md:p-6 bg-[#FAF7F2]">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#A65D45] mb-1 sm:mb-2">500+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#1E3A3F]/50">Children Fed</div>
              </div>
              <div className="text-center p-4 sm:p-5 md:p-6 bg-[#FAF7F2]">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#A65D45] mb-1 sm:mb-2">200+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#1E3A3F]/50">Back to School</div>
              </div>
              <div className="text-center p-4 sm:p-5 md:p-6 bg-[#FAF7F2]">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#A65D45] mb-1 sm:mb-2">150+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#1E3A3F]/50">Women Empowered</div>
              </div>
              <div className="text-center p-4 sm:p-5 md:p-6 bg-[#FAF7F2]">
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#A65D45] mb-1 sm:mb-2">5+</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#1E3A3F]/50">Communities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#1E3A3F] text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#E5D7C1] mb-5 sm:mb-6 md:mb-8 leading-tight">
              Be Part of the Change
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#E5D7C1]/70 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
              Your support helps children go to school, mothers start businesses, and communities recover from disaster.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#A65D45] text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 font-semibold hover:bg-[#8E4F3A] transition-all duration-200 text-sm sm:text-base md:text-lg inline-flex items-center group"
              >
                Get Involved <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-white text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 font-semibold hover:bg-white hover:text-[#1E3A3F] transition-all duration-200 text-sm sm:text-base md:text-lg"
              >
                Learn Our Story
              </Link>
            </div>
            
            <div className="mt-12 sm:mt-14 md:mt-16 flex justify-center gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A65D45]/30"></span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A65D45]/60"></span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A65D45]"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}