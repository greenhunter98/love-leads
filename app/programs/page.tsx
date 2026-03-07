import Link from 'next/link'
import Image from 'next/image'
import { 
  Heart, 
  Trophy, 
  Users, 
  Home, 
  Church, 
  Users2, 
  ArrowRight,
  Compass
} from 'lucide-react'

export default function ProgramsOverviewPage() {
  const programs = [
    {
      icon: Heart,
      title: 'Children',
      description: 'Early childhood development, school feeding, and back-to-school support.',
      href: '/programs/children',
      color: '#A65D45',
      stats: '500+ children served'
    },
    {
      icon: Trophy,
      title: 'Youth',
      description: 'Sports, talent development, and HIV/AIDS awareness for young people.',
      href: '/programs/youth',
      color: '#1E3A3F',
      stats: '200+ active youth'
    },
    {
      icon: Users,
      title: 'Women',
      description: 'Empowering single parents through entrepreneurship and support.',
      href: '/programs/women',
      color: '#A65D45',
      stats: '150+ women empowered'
    },
    {
      icon: Home,
      title: 'Disaster Response',
      description: 'Emergency relief, preparedness, and community resilience.',
      href: '/programs/disaster-response',
      color: '#1E3A3F',
      stats: '8 communities supported'
    },
    {
      icon: Church,
      title: 'Spiritual',
      description: 'Evangelism and the "Action Way" – demonstrating love through action.',
      href: '/programs/spiritual',
      color: '#A65D45',
      stats: 'Weekly gatherings'
    },
    {
      icon: Users2,
      title: 'Community',
      description: 'Income generation, counseling, and community education.',
      href: '/programs/community',
      color: '#1E3A3F',
      stats: '12+ education topics'
    }
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Hero  */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1772885865551.jpg"
            alt="Community in Malawi"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl  sm:text-6xl md:text-7xl font-serif font-bold mb-4 text-[#A65D45]">
                Our Programs
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90">
                Six focus areas creating lasting change in Malawian communities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Introduction */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-3xl py-16 md:py-20">
        <p className="text-xl md:text-2xl text-center text-[#1E3A3F]">
          Every program is designed for <span className="text-[#A65D45] font-medium">lasting transformation</span> in the lives of those we serve.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {programs.map((program, idx) => {
            const Icon = program.icon
            return (
              <Link
                key={idx}
                href={program.href}
                className="group bg-white p-6 md:p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: program.color }} />
                  <span className="text-xs text-[#1E3A3F]/40">{program.stats}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-[#1E3A3F] mb-3">{program.title}</h2>
                <p className="text-sm md:text-base text-[#1E3A3F]/60 mb-4">{program.description}</p>
                <span className="inline-flex items-center text-[#A65D45] text-sm group-hover:underline">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Quick Stats Row */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-serif text-[#A65D45]">500+</div>
            <div className="text-xs text-[#1E3A3F]/50">Children</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-serif text-[#A65D45]">200+</div>
            <div className="text-xs text-[#1E3A3F]/50">Youth</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-serif text-[#A65D45]">150+</div>
            <div className="text-xs text-[#1E3A3F]/50">Women</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-serif text-[#A65D45]">8</div>
            <div className="text-xs text-[#1E3A3F]/50">Communities</div>
          </div>
        </div>
      </div>

      {/* Simple CTA */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-3xl pb-20 md:pb-32">
        <div className="text-center border-t border-[#E5D7C1] pt-12 md:pt-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E3A3F] mb-4">Support Our Work</h2>
          <p className="text-base md:text-lg text-[#1E3A3F]/50 mb-6">
            Your help makes these programs possible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#A65D45] text-white px-8 py-3 font-medium hover:bg-[#8E4F3A] transition-colors"
          >
            Get Involved <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}