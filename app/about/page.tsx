import Link from 'next/link'
import { ArrowRight, Eye, Target, Heart, MapPin, BookOpen, Quote, Users, Sparkles, Star, Cross } from 'lucide-react'

export default function AboutPage() {
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

  const goals = [
    'To provide educational support/sponsorship for destitute children',
    'Organizing business seminars to single parents and exposing them to business opportunities',
    'Involving children in early child development programs and under‑five school feeding',
    'Provide support to widows and promoting women\'s and children\'s rights through community education',
    'Promote public awareness of STDs and HIV/AIDS to communities and youth through sports, film shows, drama, music, dance, and radio programs',
    'Solving the problem of school dropouts by working out back‑to‑school campaigns at all education levels',
    'Promote and support income generating activities (IGAs) in the fight against poverty',
    'Providing support to people affected by disasters (psychological, material, spiritual)',
    'Provide counseling and medical care in communities and referring those that need medical attention',
    'Promoting sports and talent among the youths',
    'To provide capacity building to the staff',
    'To empower children and youth with education to reduce illiteracy rate in the community',
    'To encourage the participation of Women in politics, socio‑economic and decision making'
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Hero - book cover style without image */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-end bg-gradient-to-br from-[#1E3A3F] to-[#2A4A50] overflow-hidden">
        {/* Decorative pattern - book pages effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-1 h-full">
            {[...Array(120)].map((_, i) => (
              <div key={i} className="bg-white h-full" style={{ opacity: 0.1 + (i * 0.001) }}></div>
            ))}
          </div>
        </div>
        
        {/* Decorative crosses pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 text-6xl sm:text-8xl text-white">✝</div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 text-6xl sm:text-8xl text-white">✝</div>
          <div className="absolute top-1/2 left-1/4 text-2xl sm:text-4xl text-white transform -rotate-12">✝</div>
          <div className="absolute bottom-1/4 right-1/4 text-4xl sm:text-6xl text-white transform rotate-12">✝</div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-3xl text-white">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#A65D45]" />
              <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#E5D7C1]">Our Story</span>
            </div>
            <h1 className=" text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-3 sm:mb-4 leading-[0.9] ">
              About Us
            </h1>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-[#A65D45] mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-[#E5D7C1] max-w-2xl leading-relaxed">
              The journey of Love Leads Organization – from a dream to a movement
            </p>
          </div>
        </div>
        
        {/* Book binding effect */}
        <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 md:w-4 bg-gradient-to-r from-[#A65D45]/30 to-transparent"></div>
      </div>

      {/* Chapter 1: Background - like opening a book */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          <div className="md:col-span-1">
            <div className="md:sticky md:top-32">
              <span className="text-[#A65D45] font-mono text-xs sm:text-sm">CHAPTER 01</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A3F] mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                The Beginning
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-[#A65D45]"></div>
              
              {/* Decorative element */}
              <div className="mt-6 sm:mt-8 space-y-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-[#E5D7C1]"></div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-[#A65D45] ml-4"></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-[#1E3A3F]/70 leading-relaxed">
            <p className="text-xl sm:text-2xl font-serif text-[#1E3A3F] mb-4 sm:mb-6 md:mb-8 relative pl-4 sm:pl-6 border-l-4 border-[#A65D45]">
              "Love Leads Organization is a non-governmental and non-profit faith-based entity..."
            </p>
            <p>
              Established by individuals who understood that the prevalence of street kids underscores a critical need that calls for urgent intervention to provide essential resources, support, and opportunities for education and rehabilitation, ensuring these vulnerable youths have a chance for a brighter future. These individuals also share the vision demanding the urgent need for intervention in disaster response and environmental conservation, as well as the pressing requirements for educational support for children.
            </p>
            <p>
              Love leads passionately acknowledges the necessity for intervention in addressing early marriages, the growing rate of single-parent families, and the challenges faced by single parents in the community. These observations ignited a shared passion among individuals to form a cohesive team with the objective of mobilizing support for those significantly affected.
            </p>
            <div className="bg-[#FAF7F2] p-6 sm:p-8 mt-6 sm:mt-8 relative">
              <Quote className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 text-[#A65D45] opacity-20" />
              <p className="italic text-[#1E3A3F] relative z-10 pl-4 sm:pl-6 text-sm sm:text-base">
                "The collaborative efforts of Love Leads Organization aim to extend the message of love and care to these groups, exemplifying the love that God has for humanity."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 2: Philosophy - two-page spread style */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          <div className="relative">
            <div className="md:sticky md:top-32">
              <span className="text-[#A65D45] font-mono text-xs sm:text-sm">CHAPTER 02</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A3F] mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                Our Philosophy
              </h2>
              <div className="w-12 sm:w-16 h-0.5 bg-[#A65D45]"></div>
            </div>
          </div>
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <div className="border-l-2 border-[#A65D45] pl-4 sm:pl-6 md:pl-8 relative group hover:border-[#1E3A3F] transition-colors">
              <div className="absolute -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white rounded-full border-2 border-[#A65D45] group-hover:border-[#1E3A3F] transition-colors"></div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1E3A3F] mb-3 sm:mb-4">"Life Changing"</h3>
              <p className="text-base sm:text-lg text-[#1E3A3F]/70 leading-relaxed">
                The main interest of the organization is to join people and create a platform on which they can reach out to children and the youth; to see that some hopeless souls find life hopeful, to lay a good developing foundation in our children by providing early child education through back to school campaign, to make the young people see and understand that they still have the whole future in their hands.
              </p>
            </div>
            <div className="border-l-2 border-[#A65D45] pl-4 sm:pl-6 md:pl-8 relative group hover:border-[#1E3A3F] transition-colors">
              <div className="absolute -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white rounded-full border-2 border-[#A65D45] group-hover:border-[#1E3A3F] transition-colors"></div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1E3A3F] mb-3 sm:mb-4">"The Action Way"</h3>
              <p className="text-base sm:text-lg text-[#1E3A3F]/70 leading-relaxed">
                All these have a Christian approach as learnt from our Lord and Master Jesus Christ, which is the way of professing our faith and letting "love" (the greatest commandment of all) take a lead.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission - book spread without images */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-[#1E3A3F] text-white p-8 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-[#A65D45] opacity-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-4 border-[#A65D45] opacity-10"></div>
            
            <Eye className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-[#A65D45] mb-4 sm:mb-5 md:mb-6" />
            <span className="text-[#E5D7C1] font-mono text-xs sm:text-sm">01</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#E5D7C1] mt-1 sm:mt-2 mb-4 sm:mb-5 md:mb-6">Our Vision</h2>
            <p className="text-base sm:text-lg text-[#E5D7C1]/80 leading-relaxed">
              "To create new hope and a better future by becoming Malawi's premier organization that envisions a society where young people and women have equal access to resources and are actively involved in advocacy and policy influence for the betterment of their families and communities."
            </p>
          </div>
          <div className="bg-[#FAF7F2] p-8 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-[#1E3A3F] opacity-5 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-4 border-[#1E3A3F] opacity-5"></div>
            
            <Target className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-[#A65D45] mb-4 sm:mb-5 md:mb-6" />
            <span className="text-[#1E3A3F] font-mono text-xs sm:text-sm">02</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1E3A3F] mt-1 sm:mt-2 mb-4 sm:mb-5 md:mb-6">Our Mission</h2>
            <div className="space-y-3 sm:space-y-4 text-[#1E3A3F]/70 text-base sm:text-lg">
              <p>Love Leads is engaged in evangelistic activities, educational programs by enhancing early child development through back to school campaign, creating education opportunities and providing material support to the young people by use of individualized support.</p>
              <p className="italic border-l-2 border-[#A65D45] pl-3 sm:pl-4">
                "We choose to believe that the main purpose of life is to make someone have a life."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Catchment Area - like a map illustration without image */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="relative bg-[#FAF7F2] p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden">
          {/* Map-like grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="border-r border-[#1E3A3F] h-full"></div>
              ))}
            </div>
            <div className="grid grid-rows-8 w-full h-full absolute top-0">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="border-b border-[#1E3A3F] w-full"></div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#E5D7C1] rounded-full -mr-20 sm:-mr-24 md:-mr-32 -mt-20 sm:-mt-24 md:-mt-32"></div>
          <div className="absolute bottom-0 left-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-[#A65D45] opacity-10 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <MapPin className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-[#A65D45]" />
              <span className="text-[#A65D45] font-mono text-xs sm:text-sm">WHERE WE WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-4 sm:mb-5 md:mb-6 leading-tight">
              Our Catchment Area
            </h2>
            <p className="text-lg sm:text-xl text-[#1E3A3F]/60 max-w-3xl leading-relaxed">
              The organization affects five chieftaincies in the Southern part of Malawi-Central Africa: 
              <span className="block mt-3 sm:mt-4 text-[#1E3A3F] bg-white p-3 sm:p-4 border-l-4 border-[#A65D45] text-base sm:text-lg">
                Nsanje Group Village Head Man Chapinga, VHM Napasha, Failo, Mulambala, Mathiya, Mphiphira.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Core Values - as a values statement */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="text-[#A65D45] font-mono text-xs sm:text-sm">OUR FOUNDATION</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1E3A3F] mt-3 sm:mt-4 mb-4 sm:mb-6">Core Values</h2>
          <p className="text-base sm:text-lg text-[#1E3A3F]/50">The principles that guide everything we do</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {coreValues.map((value, idx) => (
            <div key={idx} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white hover:shadow-lg transition-shadow group">
              <span className="text-xl sm:text-2xl font-serif text-[#A65D45] w-6 sm:w-8 group-hover:text-[#1E3A3F] transition-colors">{idx + 1}</span>
              <span className="text-base sm:text-lg text-[#1E3A3F]">{value}</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#A65D45] opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Goals/Commitments - as a manifesto */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="relative bg-[#1E3A3F] text-white p-8 sm:p-10 md:p-16 lg:p-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#A65D45] opacity-5 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-white opacity-5 rounded-full"></div>
          
          <Quote className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-[#A65D45] opacity-20" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-[#A65D45] font-mono text-xs sm:text-sm">OUR MANIFESTO</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#E5D7C1] mt-3 sm:mt-4 mb-8 sm:mb-10 md:mb-12">Our Commitments</h2>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {goals.map((goal, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 border-b border-[#E5D7C1]/10 pb-3 sm:pb-4 group hover:border-[#A65D45] transition-colors">
                  <span className="text-[#A65D45] font-serif text-lg sm:text-xl w-8 sm:w-10 group-hover:text-white transition-colors">{idx + 1}.</span>
                  <p className="text-[#E5D7C1]/80 text-sm sm:text-base md:text-lg group-hover:text-white transition-colors">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Quote - epilogue style */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="text-center relative">
          <div className="absolute left-0 top-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-l-4 border-t-4 border-[#E5D7C1]"></div>
          <div className="absolute right-0 bottom-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-r-4 border-b-4 border-[#E5D7C1]"></div>
          
          <div className="px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16">
            <Users className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-[#A65D45] mx-auto mb-6 sm:mb-8" />
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-[#1E3A3F] mb-6 sm:mb-8 leading-relaxed">
              "Our team is propelled by the belief that the most useful asset of a person is not just knowledge but a heart full of love with ears open to listen and hand willing to help."
            </p>
            <Link 
              href="/team" 
              className="inline-flex items-center text-[#A65D45] font-medium border-b-2 border-[#A65D45]/30 pb-1 hover:border-[#A65D45] transition-all group text-sm sm:text-base"
            >
              Meet the people behind the mission <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action - book closing */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl pb-16 sm:pb-20 md:pb-24 lg:pb-32">
        <div className="text-center border-t border-[#E5D7C1] pt-12 sm:pt-16 md:pt-20">
          <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-[#FAF7F2] rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
            <BookOpen className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-[#A65D45]" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1E3A3F] mb-4 sm:mb-6 leading-tight">
            Continue the Story
          </h2>
          <p className="text-lg sm:text-xl text-[#1E3A3F]/40 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Be part of the next chapter in our journey.
          </p>
          <Link 
            href="/programs" 
            className="inline-flex items-center bg-[#A65D45] text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 font-semibold hover:bg-[#8E4F3A] transition-colors text-base sm:text-lg group"
          >
            Explore Our Programs <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* Page number effect */}
          <div className="flex justify-center gap-1 mt-10 sm:mt-12 md:mt-16 text-xs sm:text-sm text-[#1E3A3F]/20 font-mono">
            <span>—</span>
            <span>THE END</span>
            <span>—</span>
          </div>
        </div>
      </div>
    </div>
  )
}