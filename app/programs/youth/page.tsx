import Link from 'next/link'
import { Trophy, Users, Music, Radio, Film, ArrowRight, Heart, Zap, Sparkles, Star, Activity } from 'lucide-react'

export default function YouthPage() {
  const initiatives = [
    {
      icon: Trophy,
      title: 'Sports Development',
      description: 'We concentrate on social and physical development of youth by developing teams for various sporting activities both indoor and outdoor.',
      stats: '12 teams • 200+ youth',
      color: '#A65D45',
    },
    {
      icon: Users,
      title: 'Talent Promotion',
      description: 'We identify and nurture young talents in various creative fields to provide alternative pathways for success.',
      stats: '5 disciplines • 80+ participants',
      color: '#1E3A3F',
    },
    {
      icon: Heart,
      title: 'HIV/AIDS Awareness',
      description: 'We promote public awareness of STDs and HIV/AIDS to communities and youth through engaging activities.',
      stats: '6 outreach methods • 1000+ reached',
      color: '#A65D45',
    }
  ]

  const awarenessMethods = [
    { icon: Trophy, name: 'Sports', description: 'Tournaments with awareness messages' },
    { icon: Film, name: 'Film Shows', description: 'Screenings in communities' },
    { icon: Users, name: 'Drama', description: 'Skits and performances' },
    { icon: Music, name: 'Music & Dance', description: 'Concerts with education' },
    { icon: Radio, name: 'Radio Programs', description: 'Broadcasts to wider audience' },
    { icon: Users, name: 'Community Talks', description: 'Direct engagement sessions' }
  ]

  const sportsActivities = [
    'Football (Soccer)', 'Netball', 'Basketball', 'Volleyball', 
    'Athletics', 'Traditional Games'
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Hero - diagonal split, bold typography */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1E3A3F] to-[#2A4A50]">
        {/* Decorative diagonal pattern instead of image */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-6 gap-4 p-8 rotate-12 scale-150">
              {[...Array(48)].map((_, i) => (
                <div key={i} className="aspect-square">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Diagonal cut effect using gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A3F] via-[#1E3A3F]/90 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-2xl text-white">
            <Zap className="w-12 h-12 text-[#A65D45] mb-6" />
            <h1 className="text-7xl md:text-8xl font-serif font-bold mb-4 leading-[0.9]">Youth</h1>
            <p className="text-2xl md:text-3xl text-[#E5D7C1] mb-6 font-light">Energy. Talent. Future.</p>
            <div className="w-32 h-1 bg-[#A65D45] mb-8"></div>
            <p className="text-xl max-w-xl leading-relaxed text-white/80">
              Empowering young people through sports, creative arts, and health awareness.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-1/3 h-32 bg-gradient-to-t from-[#A65D45]/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-40 h-40 border-4 border-white/10 rounded-full"></div>
      </section>

      {/* Stats bar - quick facts */}
      <div className="border-y border-[#E5D7C1] bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-3 gap-4 py-8">
            <div className="text-center">
              <div className="text-3xl font-serif text-[#A65D45]">12+</div>
              <div className="text-sm text-[#1E3A3F]/50 uppercase tracking-wider">Sports Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-[#A65D45]">200+</div>
              <div className="text-sm text-[#1E3A3F]/50 uppercase tracking-wider">Active Youth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-[#A65D45]">5</div>
              <div className="text-sm text-[#1E3A3F]/50 uppercase tracking-wider">Talent Disciplines</div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction - bold statement */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <p className="text-3xl md:text-4xl font-serif text-[#1E3A3F] leading-relaxed text-center">
            We believe that incorporating young people demands a <span className="text-[#A65D45] font-bold">holistic approach</span> – 
            developing them socially, physically, and creatively.
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="pb-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="space-y-24">
            {initiatives.map((initiative, idx) => {
              const Icon = initiative.icon
              
              return (
                <div key={idx} className="relative group">
                  {/* Background number */}
                  <div className="absolute -top-10 -right-10 text-[10rem] md:text-[12rem] font-serif font-bold text-[#E5D7C1] opacity-30 select-none pointer-events-none">
                    {idx + 1}
                  </div>
                  
                  <div className="grid md:grid-cols-12 gap-8 items-start relative z-10">
                    {/* Icon column */}
                    <div className="md:col-span-2">
                      <div className="sticky top-32">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                          <Icon className="w-10 h-10" style={{ color: initiative.color }} />
                        </div>
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="md:col-span-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm text-[#1E3A3F]/30 font-mono">0{idx + 1}</span>
                        <span className="text-sm px-3 py-1 bg-[#F5F0E8] text-[#1E3A3F]/60 rounded-full">
                          {initiative.stats}
                        </span>
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">{initiative.title}</h2>
                      <p className="text-[#1E3A3F]/60 text-lg md:text-xl mb-8 leading-relaxed max-w-3xl">
                        {initiative.description}
                      </p>
                      
                      {/* Sports specific details for first initiative */}
                      {idx === 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                          {sportsActivities.map((sport, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <Activity className="w-4 h-4 text-[#A65D45]" />
                              <span className="text-sm text-[#1E3A3F]/50">{sport}</span>
                            </div>
                          ))}
                        </div>
                      )}
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
      </section>

      {/* HIV/AIDS Awareness - feature grid with descriptions */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 bg-[#F5F0E8] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#A65D45]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">HIV/AIDS Awareness</h2>
            <p className="text-xl text-[#1E3A3F]/50">
              Reaching youth through multiple channels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awarenessMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <div key={idx} className="group bg-[#F5F0E8] p-6 hover:bg-[#1E3A3F] transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white flex items-center justify-center group-hover:bg-[#A65D45] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#1E3A3F] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-[#1E3A3F] mb-1 group-hover:text-[#E5D7C1] transition-colors">
                        {method.name}
                      </h3>
                      <p className="text-[#1E3A3F]/50 text-sm group-hover:text-[#E5D7C1]/70 transition-colors">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote - full width with colored background */}
      <section className="relative py-40 bg-[#1E3A3F] overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-3 gap-8 p-8">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="aspect-square">
                <Star className="w-12 h-12 text-white" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
          <Sparkles className="w-12 h-12 text-[#A65D45] mx-auto mb-8" />
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#E5D7C1] max-w-4xl mx-auto leading-relaxed">
            "Incorporating young people demands a holistic approach. We concentrate on social and physical development of the youth."
          </p>
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-12 h-0.5 bg-[#A65D45]"></div>
            <p className="text-[#E5D7C1]/60 text-lg">– Love Leads Organization</p>
            <div className="w-12 h-0.5 bg-[#A65D45]"></div>
          </div>
        </div>
        
        {/* Decorative corners */}
        <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-[#A65D45]/20"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-[#A65D45]/20"></div>
      </section>

      {/* Impact Stats - new section */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">Making an Impact</h2>
            <p className="text-xl text-[#1E3A3F]/50">Through sports, arts, and education</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white">
              <div className="text-4xl font-serif text-[#A65D45] mb-2">12</div>
              <div className="text-sm text-[#1E3A3F]/40 uppercase tracking-wider">Sports Teams</div>
            </div>
            <div className="text-center p-6 bg-white">
              <div className="text-4xl font-serif text-[#A65D45] mb-2">5</div>
              <div className="text-sm text-[#1E3A3F]/40 uppercase tracking-wider">Talent Fields</div>
            </div>
            <div className="text-center p-6 bg-white">
              <div className="text-4xl font-serif text-[#A65D45] mb-2">6</div>
              <div className="text-sm text-[#1E3A3F]/40 uppercase tracking-wider">Outreach Methods</div>
            </div>
            <div className="text-center p-6 bg-white">
              <div className="text-4xl font-serif text-[#A65D45] mb-2">1000+</div>
              <div className="text-sm text-[#1E3A3F]/40 uppercase tracking-wider">Youth Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - bold, simple */}
      <section className="py-32 bg-[#F5F0E8]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Trophy className="w-12 h-12 text-[#A65D45] mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-serif text-[#1E3A3F] mb-6 leading-tight">Support Our Youth</h2>
            <p className="text-xl text-[#1E3A3F]/50 mb-10 max-w-2xl mx-auto">
              Help us provide equipment, training, and opportunities for young people in Malawi.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#A65D45] text-white px-12 py-5 font-semibold hover:bg-[#8E4F3A] transition-colors text-lg inline-flex items-center group"
              >
                Get Involved <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/programs" 
                className="text-[#1E3A3F] px-12 py-5 font-semibold hover:bg-[#1E3A3F] hover:text-white transition-colors text-lg border border-[#1E3A3F]"
              >
                All Programs
              </Link>
            </div>
            
            {/* Decorative dots */}
            <div className="flex justify-center gap-2 mt-16">
              <span className="w-2 h-2 bg-[#A65D45]"></span>
              <span className="w-2 h-2 bg-[#1E3A3F]"></span>
              <span className="w-2 h-2 bg-[#E5D7C1]"></span>
              <span className="w-2 h-2 bg-[#1E3A3F]"></span>
              <span className="w-2 h-2 bg-[#A65D45]"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}