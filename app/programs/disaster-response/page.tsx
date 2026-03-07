import Link from 'next/link'
import Image from 'next/image'
import { AlertCircle, Droplet, Users, Home, Heart, Shield, ArrowRight, Clock, Target, Activity, Map } from 'lucide-react'

export default function DisasterResponsePage() {
  const phases = [
    {
      icon: Shield,
      title: 'Preparedness',
      number: '01',
      description: 'While natural disasters cannot be prevented, we can equip ourselves with knowledge. The loss of many lives could be averted with sufficient disaster preparedness.',
      items: [
        'Planning: Developing comprehensive disaster response plans that outline roles, responsibilities, and strategies for various stakeholders.',
        'Training: Equipping emergency responders, volunteers, and communities with the necessary skills and knowledge to respond effectively.',
        'Infrastructure: Establishing resilient infrastructure and communication systems to facilitate a swift and coordinated response.'
      ],
      color: '#A65D45',
      image: '/images/disaster.jpg'
    },
    {
      icon: AlertCircle,
      title: 'Immediate Response',
      number: '02',
      description: 'Following a natural disaster, ensuring access to safe drinking water becomes a top priority. Human survival depends more on water than food.',
      items: [
        'Search and Rescue: Deploying specialized teams to locate and rescue individuals trapped in disaster-stricken areas.',
        'Medical Assistance: Providing emergency medical care and setting up medical facilities to treat injuries and prevent the spread of diseases.',
        'Clean Water Access: Communicating about clean water to prevent risks such as cholera, dysentery, and malnutrition.'
      ],
      color: '#1E3A3F',
      image: '/images/disaster2.jpg'
    },
    {
      icon: Home,
      title: 'Recovery',
      number: '03',
      description: 'After the immediate crisis, we focus on helping communities rebuild and restore their lives.',
      items: [
        'Rehabilitation: Rebuilding and restoring affected areas, including homes, infrastructure, and community services.',
        'Psycho-Social Support: Addressing the emotional and psychological needs of survivors through counseling and mental health services.',
        'Economic Recovery: Implementing strategies to revive local economies and livelihoods affected by the disaster.'
      ],
      color: '#A65D45',
      image: '/images/disaster4.jpg'
    },
    {
      icon: Target,
      title: 'Long-Term Resilience',
      number: '04',
      description: 'Building back stronger to withstand future disasters through continuous learning and community involvement.',
      items: [
        'Community Engagement: Involving local communities in the planning and decision-making processes to enhance resilience.',
        'Risk Reduction: Implementing measures to reduce the vulnerability of communities to future disasters.',
        'Research and Innovation: Continuously improving disaster response through research, technology, and innovation.'
      ],
      color: '#1E3A3F',
      image: '/images/disaster3.jpg'
    }
  ]

  const quickStats = [
    { label: 'Communities Served', value: '12', icon: Map },
    { label: 'Emergency Responses', value: '8', icon: Activity },
    { label: 'People Trained', value: '500+', icon: Users },
    { label: 'Water Projects', value: '6', icon: Droplet }
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Header*/}
      <div className="border-b border-[#E5D7C1]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="text-[#A65D45] text-sm tracking-[0.3em] uppercase mb-4 block font-mono">Emergency Response · Resilience · Recovery</span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1E3A3F] mb-4 leading-[0.9]">
                Disaster<br />Response
              </h1>
            </div>
            <div className="mt-6 md:mt-0 md:text-right max-w-md">
              <p className="text-[#1E3A3F]/50 text-sm uppercase tracking-wider font-mono">Our Framework</p>
              <p className="text-[#1E3A3F] text-lg">Preparedness → Response → Recovery → Resilience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar  */}
      <div className="border-b border-[#E5D7C1] bg-white/50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            {quickStats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F5F0E8] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#A65D45]" />
                  </div>
                  <div>
                    <div className="text-2xl font-serif text-[#1E3A3F]">{stat.value}</div>
                    <div className="text-xs text-[#1E3A3F]/40 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Hero Image  */}
      <div className="relative w-full h-[70vh] min-h-500px">
        <Image
          src="/images/disaster.jpg"
          alt="Community helping after disaster"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#1E3A3F] via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 md:px-12 pb-12">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-mono mb-2 text-[#E5D7C1]">PHOTO ESSAY · MALAWI 2024</p>
            <p className="text-2xl md:text-3xl font-light italic">
              "In coordinated efforts, Love Leads undertakes activities to address and mitigate the impact of disasters."
            </p>
          </div>
        </div>
      </div>

      {/* Introduction  */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif text-[#1E3A3F] mb-4">Our Approach</h2>
            <div className="w-12 h-1 bg-[#A65D45]"></div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-xl text-[#1E3A3F] leading-relaxed">
              To effectively respond to disasters, a collaborative and comprehensive approach involving governments, NGOs, international organizations, and local communities is essential.
            </p>
            <p className="text-lg text-[#1E3A3F]/60 leading-relaxed">
              This is why Love Leads organization is taking an intervention to reach out to disaster victims. Key elements include continuous innovation, drawing insights from past experiences, and the construction of resilient communities. These measures are critical in minimizing the impact of disasters on both human lives and infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Key Focus: Water - featured as a critical alert */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-24">
        <div className="bg-[#1E3A3F] text-white">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16">
              <div className="inline-flex items-center gap-2 bg-[#A65D45]/20 px-4 py-2 mb-6">
                <Droplet className="w-4 h-4 text-[#A65D45]" />
                <span className="text-sm font-mono uppercase tracking-wider text-[#E5D7C1]">Critical Priority</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#E5D7C1] mb-6">Clean Water is Life</h2>
              <p className="text-lg text-[#E5D7C1]/80 mb-4 leading-relaxed">
                Following a natural disaster, ensuring access to safe drinking water becomes a top priority. Human survival depends more on water than food, making communication about clean water crucial to prevent risks such as cholera, dysentery, malnutrition, famine, and mortality.
              </p>
              <p className="text-lg text-[#E5D7C1]/60 leading-relaxed">
                Embracing change is imperative when the alternative is disaster, even if some individuals resist change.
              </p>
            </div>
            <div className="relative h-80 md:h-auto">
              <Image
                src="/images/disaster5.jpg"
                alt="Clean water"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Four Phases */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">Our Response Framework</h2>
          <p className="text-lg text-[#1E3A3F]/50">A systematic approach to disaster management</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, idx) => {
            const Icon = phase.icon
            return (
              <div key={idx} className="border border-[#E5D7C1] bg-white">
                <div className="relative h-48">
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#1E3A3F] text-white w-12 h-12 flex items-center justify-center text-xl font-mono">
                    {phase.number}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6" style={{ color: phase.color }} />
                    <h3 className="text-2xl font-serif text-[#1E3A3F]">{phase.title}</h3>
                  </div>
                  <p className="text-[#1E3A3F]/60 text-sm mb-4 leading-relaxed">{phase.description}</p>
                  <div className="space-y-3">
                    {phase.items.map((item, i) => {
                      const [bold, ...rest] = item.split(':')
                      return (
                        <div key={i} className="text-sm">
                          <span className="font-medium text-[#1E3A3F]">{bold}:</span>
                          <span className="text-[#1E3A3F]/50 ml-1">{rest.join(':')}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Key Elements */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl pb-24">
        <div className="bg-[#F5F0E8] border-t border-b border-[#E5D7C1] py-16">
          <h2 className="text-3xl font-serif text-[#1E3A3F] mb-12 text-center">Key Elements of Our Response</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A65D45]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#A65D45]" />
              </div>
              <h3 className="text-xl font-serif text-[#1E3A3F] mb-2">Continuous Innovation</h3>
              <p className="text-sm text-[#1E3A3F]/50 max-w-xs mx-auto">Drawing insights from past experiences to improve response</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A65D45]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-[#A65D45]" />
              </div>
              <h3 className="text-xl font-serif text-[#1E3A3F] mb-2">Resilient Communities</h3>
              <p className="text-sm text-[#1E3A3F]/50 max-w-xs mx-auto">Construction of communities that can withstand future disasters</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A65D45]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#A65D45]" />
              </div>
              <h3 className="text-xl font-serif text-[#1E3A3F] mb-2">Collaborative Approach</h3>
              <p className="text-sm text-[#1E3A3F]/50 max-w-xs mx-auto">Working with governments, NGOs, and local communities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote - documentary style */}
      <div className="container mx-auto px-6 md:px-12 max-w-4xl pb-24">
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-[#1E3A3F] leading-relaxed">
            "As an organization, Love Leads recognizes that while natural disasters cannot be prevented, we can equip ourselves with knowledge. The loss of many lives could be averted with sufficient disaster preparedness."
          </p>
          <div className="w-12 h-1 bg-[#A65D45] mx-auto mt-8"></div>
        </div>
      </div>

      {/* CTA - urgent, bold */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="bg-[#1E3A3F] text-white">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#E5D7C1] mb-4 leading-tight">Help Communities Recover</h2>
              <p className="text-lg text-[#E5D7C1]/70 mb-8 max-w-md">
                Your support helps us provide emergency relief, clean water, and long-term resilience for disaster-affected communities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="bg-[#A65D45] text-white px-8 py-4 font-semibold hover:bg-[#8E4F3A] transition-colors inline-flex items-center group"
                >
                  Get Involved <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/programs" 
                  className="border border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-[#1E3A3F] transition-colors"
                >
                  View All Programs
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-auto bg-[#A65D45]/20 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="text-6xl font-serif text-[#A65D45] mb-2">24/7</div>
                <div className="text-sm uppercase tracking-wider text-[#E5D7C1]">Emergency Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}