import Link from 'next/link'
import Image from 'next/image'
import { Heart, GraduationCap, ArrowRight, BookOpen, Coffee, Users, Sparkles } from 'lucide-react'

export default function ChildrenPage() {
  const ecdObjectives = [
    {
      number: 1,
      title: 'Holistic Development',
      description: 'Ensure the physical, cognitive, emotional, and social development of children through age-appropriate interventions and activities.'
    },
    {
      number: 2,
      title: 'Early Learning Opportunities',
      description: 'Provide access to quality early childhood education, focusing on foundational skills such as language acquisition, numeracy, and socio-emotional competencies.'
    },
    {
      number: 3,
      title: 'Health and Nutrition',
      description: 'Promote the health and nutritional well-being of young children to support their overall growth and cognitive functions.'
    },
    {
      number: 4,
      title: 'Parental and Community Engagement',
      description: 'Facilitate active involvement of parents, caregivers, and communities in the early development process, fostering a supportive environment for children.'
    },
    {
      number: 5,
      title: 'Inclusive Practices',
      description: 'Implement inclusive policies and practices to address the diverse needs of all children, including those with special needs or from marginalized backgrounds.'
    },
    {
      number: 6,
      title: 'Research and Advocacy',
      description: 'Conduct and support research on early child development, and advocate for policies that prioritize the importance of the early years in a child\'s life.'
    },
    {
      number: 7,
      title: 'Capacity Building',
      description: 'Provide training and resources to educators, caregivers, and community members to enhance their capacity in supporting and nurturing early child development.'
    },
    {
      number: 8,
      title: 'Monitoring and Evaluation',
      description: 'Establish robust monitoring and evaluation mechanisms to assess the impact of our programs, ensuring continuous improvement and effectiveness.'
    }
  ]

  return (
    <div className="bg-[#F5F0E8]">
      {/* Hero - soft, centered, storybook-like */}
<div className="relative min-h-[60vh] md:min-h-[70vh] grid md:grid-cols-2">
  {/* Left side - Color block with text */}
  <div className="bg-[#1E3A3F] flex items-center order-2 md:order-1">
    <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-0">
      <div className="max-w-xl text-white">
        <span className="text-[#A65D45] text-sm tracking-[0.3em] uppercase mb-4 block">
          Our Work with Children
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-4 leading-[0.9]">
          Children
        </h1>
        <div className="w-20 h-1 bg-[#A65D45] mb-6"></div>
        <p className="text-lg sm:text-xl text-white/80">
          Giving every child a strong foundation for life through education, nutrition, and care
        </p>
      </div>
    </div>
  </div>
  
  {/* Right side - Image */}
  <div className="relative h-[40vh] md:h-auto order-1 md:order-2">
    <Image
      src="/images/1772885865551.jpg"
      alt="Children in classroom"
      fill
      className="object-cover"
      priority
      sizes="50vw"
    />
  </div>
</div>

      {/* Welcome message - warm and inviting */}
      <div className="container mx-auto px-6 md:px-12 max-w-3xl py-32 text-center">
        <Heart className="w-12 h-12 text-[#A65D45] mx-auto mb-6" />
        <p className="text-2xl md:text-3xl font-serif text-[#1E3A3F] leading-relaxed">
          Every child deserves a chance to <span className="text-[#A65D45]">dream, learn, and grow</span>. 
          We're here to make that possible.
        </p>
      </div>

      {/* Three Pillars */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Early Child Development */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#E5D7C1] rounded-full -z-10"></div>
            <div className="bg-white p-8">
              <Heart className="w-10 h-10 text-[#A65D45] mb-6" />
              <h2 className="text-2xl font-serif text-[#1E3A3F] mb-3">Early Child Development</h2>
              <p className="text-[#1E3A3F]/60 mb-4 leading-relaxed">
                Love Leads is established to become a hand in providing early child development through preschool education while enhancing under‑five nutritional status.
              </p>
              <p className="text-[#1E3A3F]/40 text-sm">
                We provide quality early childhood education focusing on foundational skills for children in Malawi.
              </p>
            </div>
          </div>

          {/* School Feeding Program */}
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#E5D7C1] rounded-full -z-10"></div>
            <div className="bg-white p-8">
              <Coffee className="w-10 h-10 text-[#A65D45] mb-6" />
              <h2 className="text-2xl font-serif text-[#1E3A3F] mb-3">School Feeding Program</h2>
              <p className="text-[#1E3A3F]/60 mb-4 leading-relaxed">
                The organization intends to provide <span className="font-medium text-[#1E3A3F]">phala</span> (porridge made from maize and soya flour) after class sessions for under‑five children.
              </p>
              <p className="text-[#1E3A3F]/40 text-sm">
                This addresses malnutrition and keeps children attending school with hope for a productive future.
              </p>
            </div>
          </div>

          {/* Back to School */}
          <div className="relative">
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#E5D7C1] rounded-full -z-10"></div>
            <div className="bg-white p-8">
              <GraduationCap className="w-10 h-10 text-[#A65D45] mb-6" />
              <h2 className="text-2xl font-serif text-[#1E3A3F] mb-3">Back to School</h2>
              <p className="text-[#1E3A3F]/60 mb-4 leading-relaxed">
                The fiercest problem to an African Child is poverty. We bring back to class children who dropped out due to early marriages, unplanned pregnancies, child labor, and street life.
              </p>
              <p className="text-[#1E3A3F]/40 text-sm">
                Children receive scholarships, material and psychological support at primary, secondary, and tertiary levels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section - Integrated Early Child Development */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-125">
            <Image
              src="/images/interchild.jpg"
              alt="Children playing and learning"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#A65D45]/10 -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-6 leading-tight">
              Integrated Early <br />Child Development
            </h2>
            <p className="text-lg text-[#1E3A3F]/60 mb-8 leading-relaxed">
              Our organization is dedicated to fostering optimal early child development through comprehensive programs that prioritize well-being, education, and holistic growth.
            </p>
            <div className="space-y-4">
              {ecdObjectives.slice(0, 4).map((obj) => (
                <div key={obj.number} className="flex items-start gap-3">
                  <span className="text-[#A65D45] font-serif text-lg">{obj.number}.</span>
                  <p className="text-[#1E3A3F]/70">{obj.title}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 text-[#A65D45] font-medium inline-flex items-center group">
              View all 8 objectives <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Accordion-style objectives (hidden by default, would need JS) - but for now just show all in a soft grid */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="bg-[#FAF7F2] p-12 md:p-16">
          <h3 className="text-2xl font-serif text-[#1E3A3F] mb-8 text-center">Our 8 Commitments to Early Childhood</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {ecdObjectives.map((obj) => (
              <div key={obj.number} className="flex gap-4">
                <span className="text-3xl font-serif text-[#E5D7C1]">{obj.number}</span>
                <div>
                  <h4 className="font-serif text-[#1E3A3F] mb-1">{obj.title}</h4>
                  <p className="text-sm text-[#1E3A3F]/50">{obj.description.substring(0, 80)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Feeding - soft highlight */}
      <section className="container mx-auto px-6 md:px-12 max-w-6xl pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-6">School Feeding Program</h2>
            <p className="text-lg text-[#1E3A3F]/60 mb-6 leading-relaxed">
              Love Leads organization joins forces with any interested parties that care for the future of an African child. These include Churches, organizations, companies, individuals to provide phala (porridge) at some specified times to the under‑five children so that they can stand the wrath of hunger and still go to school with hope and grow into productive citizens someday.
            </p>
            <p className="text-lg text-[#1E3A3F] font-light">
              As part of motivating the children enrolled in early child development project, they are provided with phala to avoid school dropouts.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-serif text-[#A65D45]">500+</div>
                <div className="text-xs text-[#1E3A3F]/40 uppercase">Children Fed Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-[#A65D45]">5</div>
                <div className="text-xs text-[#1E3A3F]/40 uppercase">Communities</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 order-1 md:order-2">
            <Image
              src="/images/childfeed1.jpg"
              alt="Children eating"
              fill
              className="object-cover"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E5D7C1] rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Back to School - quote-focused */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl pb-32">
        <div className="text-center">
          <GraduationCap className="w-12 h-12 text-[#A65D45] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E3A3F] mb-6">Back to School Program</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#1E3A3F]/60 mb-6 leading-relaxed">
              The program aims at taking back to class these children who dropped out of school due to early marriages, unplanned pregnancies, child labor and street life. It is for this reason that Love Leads is there to bring a chance for such a child to have an access to education as the only hope for true transformation.
            </p>
            <p className="text-lg text-[#1E3A3F]/60 mb-8 leading-relaxed">
              Children shall have access to scholarships, material and psychological support to curb school dropout rate. The program will target three levels of education: primary, secondary and tertiary education.
            </p>
            <div className="bg-[#FAF7F2] p-8 rounded-full inline-block mx-auto">
              <p className="text-xl italic text-[#1E3A3F]">
                "Education is the only hope for true transformation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - soft and warm */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl pb-32">
        <div className="bg-linear-to-br from-[#1E3A3F] to-[#2C4A50] text-white p-16 md:p-20 text-center">
          <Sparkles className="w-12 h-12 text-[#A65D45] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif text-[#E5D7C1] mb-6 leading-tight">Support a Child Today</h2>
          <p className="text-xl text-[#E5D7C1]/80 mb-10 max-w-2xl mx-auto">
            Your donation can provide a meal, school supplies, or a scholarship for a child in need.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#A65D45] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#8E4F3A] transition-colors inline-flex items-center group"
            >
              Get Involved <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/programs" 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1E3A3F] transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}