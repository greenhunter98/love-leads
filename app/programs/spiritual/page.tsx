import Link from 'next/link'
import { Church, Heart, BookOpen, Users, ArrowRight, Sparkles, Cross, Sunrise } from 'lucide-react'

export default function SpiritualPage() {
  const spiritualValues = [
    {
      icon: Heart,
      title: 'Physical Needs',
      description: 'Food, shelter, healthcare, education, and material support for vulnerable communities.',
      color: '#A65D45'
    },
    {
      icon: BookOpen,
      title: 'Spiritual Needs',
      description: 'Sharing the Word of God, prayer, discipleship, and spiritual growth opportunities.',
      color: '#1E3A3F'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Building relationships, fostering belonging, and creating supportive networks.',
      color: '#A65D45'
    }
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Header - minimal, contemplative */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center">
            <span className="text-[#A65D45] text-sm tracking-[0.3em] uppercase mb-4 block font-light">Faith in Action</span>
            <h1 className="text-6xl md:text-8xl font-serif text-[#1E3A3F] mb-6 leading-[0.9]">
              Spiritual
            </h1>
            <div className="w-16 h-0.5 bg-[#A65D45] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#1E3A3F]/50 max-w-2xl mx-auto font-light">
              Addressing both physical and spiritual needs through "The Action Way"
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl mb-32">
        <div className="relative h-96 bg-[#FAF7F2] overflow-hidden">
          {/* Cross pattern background */}
          <div className="absolute inset-0 grid grid-cols-6 gap-4 p-8 opacity-20">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="flex justify-center">
                <Cross 
                  className="w-4 h-4" 
                  style={{ 
                    color: i % 3 === 0 ? '#A65D45' : '#1E3A3F',
                    transform: `rotate(${i * 15}deg)`
                  }} 
                />
              </div>
            ))}
          </div>
          
          {/* Center piece - radiating lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-2 border-[#A65D45]/20 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Cross className="w-12 h-12 text-[#A65D45]/40" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <span className="text-xs text-[#1E3A3F]/30 tracking-[0.3em] uppercase">•  Body & Soul  •</span>
        </div>
      </div>

      {/* Core Belief - quiet, centered */}
      <div className="container mx-auto px-6 md:px-12 max-w-3xl pb-32">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#E5D7C1] rounded-full flex items-center justify-center mx-auto mb-8">
            <Cross className="w-8 h-8 text-[#A65D45]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-6 leading-tight">
            Body & Soul
          </h2>
          <p className="text-xl text-[#1E3A3F]/50 mb-6 leading-relaxed">
            Love Leads Organization believes that a human being is <span className="text-[#A65D45] font-medium">body and soul</span>.
          </p>
          <p className="text-lg text-[#1E3A3F]/40 leading-relaxed max-w-2xl mx-auto">
            It is on this belief that the organization is holistic in addressing the physical and spiritual needs of a person.
          </p>
        </div>
      </div>

      {/* The Action Way */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-[#A65D45]"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-[#1E3A3F]/30">Our Way</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-6 leading-tight">
              The Action Way
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-[#1E3A3F]/60 leading-relaxed">
              The organization is taking the action way of manifesting the Love of God. This is why the organization has taken the Action Way to reaching out to the people and telling them about the love of God by not only meeting their physical needs but also their spiritual needs.
            </p>
            <p className="text-lg text-[#1E3A3F]/40 leading-relaxed">
              All these have a Christian approach of the "action way" as learnt from our Lord and Master Jesus Christ which is the way of professing our faith and letting "love" (the greatest commandment of all) take a lead.
            </p>
            
            {/* Decorative element */}
            <div className="flex gap-2 pt-4">
              <span className="w-2 h-2 bg-[#A65D45]"></span>
              <span className="w-2 h-2 bg-[#1E3A3F]"></span>
              <span className="w-2 h-2 bg-[#E5D7C1]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Evangelism Program */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">Evangelism Program</h2>
          <div className="w-16 h-0.5 bg-[#A65D45] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-lg text-[#1E3A3F]/60 leading-relaxed">
              Evangelism program will look at identifying and providing solutions to the physical needs of a person while sharing with them the word of God to grow their spiritual life.
            </p>
            <p className="text-lg text-[#1E3A3F]/50 leading-relaxed">
              The organization believes that the little aid provided to the poor soul can make some lives be saved to Christ than only the Gospel preached to a person verbally.
            </p>
            
            {/* Decorative stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="border-t-2 border-[#E5D7C1] pt-4">
                <div className="text-2xl font-serif text-[#1E3A3F]">200+</div>
                <div className="text-xs text-[#1E3A3F]/30 uppercase tracking-wider">Communities Reached</div>
              </div>
              <div className="border-t-2 border-[#E5D7C1] pt-4">
                <div className="text-2xl font-serif text-[#1E3A3F]">50+</div>
                <div className="text-xs text-[#1E3A3F]/30 uppercase tracking-wider">Outreach Programs</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Quote as a simple pull quote */}
            <div className="relative bg-white p-8">
              <span className="absolute -top-3 left-6 text-4xl text-[#E5D7C1] font-serif">"</span>
              <p className="text-xl italic text-[#1E3A3F] pl-6">
                The little aid provided to the poor soul can make some lives be saved to Christ than only the Gospel preached to a person verbally.
              </p>
              <span className="absolute -bottom-3 right-6 text-4xl text-[#E5D7C1] font-serif rotate-180">"</span>
            </div>
            
            {/* Cross symbol */}
            <div className="flex justify-center">
              <div className="w-12 h-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#A65D45] transform -translate-y-1/2"></div>
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-[#A65D45] transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holistic Approach  */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4">Holistic Ministry</h2>
          <p className="text-lg text-[#1E3A3F]/40">Serving the whole person</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {spiritualValues.map((value, idx) => {
            const Icon = value.icon
            return (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 border-2 border-[#E5D7C1] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-[#A65D45] transition-colors">
                  <Icon className="w-8 h-8" style={{ color: value.color }} />
                </div>
                <h3 className="text-2xl font-serif text-[#1E3A3F] mb-3">{value.title}</h3>
                <p className="text-[#1E3A3F]/40 text-sm max-w-xs mx-auto">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scripture Foundation  */}
      <div className="container mx-auto px-6 md:px-12 max-w-4xl pb-32">
        <div className="bg-[#FAF7F2] p-16 md:p-20 text-center relative">
          {/* Decorative crosses in corners */}
          <div className="absolute top-4 left-4">
            <Cross className="w-4 h-4 text-[#A65D45]/20" />
          </div>
          <div className="absolute top-4 right-4">
            <Cross className="w-4 h-4 text-[#A65D45]/20" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Cross className="w-4 h-4 text-[#A65D45]/20" />
          </div>
          <div className="absolute bottom-4 right-4">
            <Cross className="w-4 h-4 text-[#A65D45]/20" />
          </div>
          
          <div className="absolute top-6 left-6 text-8xl text-[#E5D7C1] font-serif">"</div>
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-serif italic text-[#1E3A3F] mb-8 leading-relaxed">
              The way of professing our faith and letting "love" (the greatest commandment of all) take a lead.
            </p>
            <div className="w-12 h-0.5 bg-[#A65D45] mx-auto mb-6"></div>
            <p className="text-sm text-[#1E3A3F]/30 uppercase tracking-wider">
              Learned from our Lord and Master Jesus Christ
            </p>
          </div>
          <div className="absolute bottom-6 right-6 text-8xl text-[#E5D7C1] font-serif rotate-180">"</div>
        </div>
      </div>

      {/* Meditation Space  */}
      <div className="container mx-auto px-6 md:px-12 max-w-4xl pb-32">
        <div className="relative py-16">
          <div className="absolute left-0 top-0 w-32 h-32 border-l-2 border-t-2 border-[#E5D7C1]"></div>
          <div className="absolute right-0 bottom-0 w-32 h-32 border-r-2 border-b-2 border-[#E5D7C1]"></div>
          
          <div className="text-center max-w-2xl mx-auto px-8">
            <Sunrise className="w-8 h-8 text-[#A65D45] mx-auto mb-6" />
            <h3 className="text-2xl font-serif text-[#1E3A3F] mb-4">A Moment of Reflection</h3>
            <p className="text-[#1E3A3F]/40 text-sm leading-relaxed">
              In everything we do, we are called to be the hands and feet of Christ, serving not with words alone, but with actions that demonstrate His love.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action  */}
      <div className="container mx-auto px-6 md:px-12 max-w-4xl pb-32">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-[#E5D7C1] rounded-full flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-6 h-6 text-[#A65D45]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-6 leading-tight">
            Join Us in <br />The Action Way
          </h2>
          <p className="text-xl text-[#1E3A3F]/40 mb-10 max-w-2xl mx-auto">
            Experience the joy of showing God's love through action – meeting both physical and spiritual needs.
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
              className="text-[#1E3A3F] px-10 py-4 font-semibold hover:bg-[#1E3A3F] hover:text-white transition-colors border border-[#1E3A3F]"
            >
              View All Programs
            </Link>
          </div>
          
          {/* Simple decorative element */}
          <div className="flex justify-center gap-3 mt-16">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D7C1]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D7C1]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A65D45]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D7C1]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D7C1]"></span>
          </div>
        </div>
      </div>
    </div>
  )
}