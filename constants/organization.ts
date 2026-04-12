// constants/organization.ts

export const orgName = "Love Leads Organization";
export const tagline = "The Action Way";
export const slogan = "It's all about life-changing";
export const establishedYear = 2020;

// ----- CORE STATEMENTS -----
export const lifeChangingStatement = `The main interest of the organization is "Life Changing". To join people and create a platform on which they can reach out to children and the youth; to see that some hopeless souls find life hopeful, to lay a good developing foundation in our children by providing to them early child education through back to school campaign, to make the young people see and understand that they still have the whole future in their hands so that they become hopeful and get supported to pursue their careers and have their lives transformed.`;

export const teamQuote = `Our team is propelled by the belief that the most useful asset of a person is not just knowledge but a heart full of love with ears open to listen and hand willing to help.`;

// ----- BACKGROUND -----
export const background = `Love Leads Organization was founded by individuals united by a shared vision to address pressing community challenges, including the need for disaster response, environmental conservation, and educational support for children. The organization is deeply committed to tackling issues such as early marriages, the rising number of single-parent households, and the difficulties faced by single parents, particularly women.

Driven by compassion and purpose, these individuals came together to form a dedicated team focused on mobilizing support for the most vulnerable. Love Leads Organization actively responds to disasters, implements early childhood development programs, provides nutritional support to malnourished children under the age of five, and helps young people return to school.

The organization empowers single mothers by equipping them with entrepreneurial skills to achieve financial independence, while instilling hope through the teachings of Christ. Through its collaborative efforts, Love Leads Organization extends love, care, and practical support to those in need, reflecting God's love for humanity.`;

export const vision = `To create new hope and future by becoming Malawi's premier organization that foresees creation of a society where young people and women have equal access to resources and are actively involved in advocacy and policy influence for the betterment of their families and communities.`;

export const mission = `Love Leads is engaged in evangelistic activities, educational programs by enhancing early child development through back to school campaign, creating education opportunities and providing material support to the young people by use of individualized support. We are driven to provide disaster response initiatives as we choose to believe that the main purpose of life is to make someone have a life. We believe that until one is able to reach out to a soul without a payback expectation, he/she has no reason to live. The organization is as well engaged in school feeding programs with the children who are under five years of age. The organization aims at bringing hope to single parents by making them social economic independent through the sharing and demonstrating the love of Christ.`;

export const coreValues = [
  "Incorporation of Christian values and culture",
  "Integrity",
  "Transparency",
  "Accountability",
  "Neutrality",
  "Participatory decision making",
  "Non discrimination",
  "Commitment and hardworking",
];

export const goals = [
  "Promote public awareness of STDs and HIV/AIDS to the communities and the youth; through sports, film shows, and drama, music and dance and radio programs.",
  "Solving the problem of school drop-outs by working out back to schools campaigns at all education levels and homes for the needy children.",
  "Promote and support income-generating activities (IGAs) in the fight against poverty.",
  "Providing support to people affected with disasters. This involves psychological, material and spiritual support.",
  "Provide counseling and medical care in the communities and referring those that need medical attention to the appropriate institutions.",
  "Promoting sports and talent among the youths",
  "To provide capacity building to the staff",
  "To empower children and youth with education in order to reduce illiteracy rate in the community.",
  "To encourage the participation of Women in politics, social-economic and decision making.",
  "To counsel and support victim of human rights violation.",
  "To provide educational support/ sponsorship for the destitute children.",
  "Organizing business seminars to the single parents and exposing them to business opportunities",
  "Involving the children into early child development programs and under five children school feeding program",
  "Provide support to the widows and promoting women's and children's rights especially through education community education.",
];

export const categories = [
  "children",
  "youth",
  "women",
  "disaster-response",
  "spiritual",
  "community",
] as const;

// ----- NARRATIVES & PHILOSOPHY (condensed) -----
export const beliefs = {
  christianPerspective: `All our work is rooted in a Christ-centered perspective, reflecting the "action way" of love as the true expression of Christian faith. We let love—the greatest commandment—lead everything we do.`,
  
  loveQuote: `We believe that little love demonstrated can do much more than many love words spoken. This is why Love Leads does not only believe in telling people about the love of Christ, but in showing them that love through kindness and sharing what we have. Kindness is the language the vulnerable understand best.`,
  
  disasterPhilosophy: `While natural disasters cannot be prevented, we can equip ourselves with knowledge to avert loss of life. Following a disaster, access to safe drinking water becomes a top priority—human survival depends more on water than food. We work collaboratively with governments, NGOs, and communities to prepare, respond, and build resilience through continuous innovation and resilient infrastructure.`,
  
  moralMessage: `Love Leads strives to reduce violence, spiritual and psychosocial needs among women by empowering them with knowledge and economic independence. We also support single and foster parents in keeping children away from early school dropouts, early marriages, and street life—challenges that have become all too common in Malawian villages.`,
};

// ----- PROGRAMS (with unique slugs) -----
export const programs = [
  // CHILDREN
  {
    category: "children",
    name: "Early Child Development",
    slug: "early-child-development",
    description:
      "Love Leads Organization understands that education is significant to the development of the nation. It is therefore for this reason that the organization is here to provide preschool education to the under-five children.",
    objectives: [
      "Holistic Development: Ensure the physical, cognitive, emotional, and social development of children through age-appropriate interventions and activities.",
      "Early Learning Opportunities: Provide access to quality early childhood education, focusing on foundational skills such as language acquisition, numeracy, and socio-emotional competencies.",
      "Health and Nutrition: Promote the health and nutritional well-being of young children to support their overall growth and cognitive functions.",
      "Parental and Community Engagement: Facilitate active involvement of parents, caregivers, and communities in the early development process, fostering a supportive environment for children.",
      "Inclusive Practices: Implement inclusive policies and practices to address the diverse needs of all children, including those with special needs or from marginalized backgrounds.",
      "Research and Advocacy: Conduct and support research on early child development, and advocate for policies that prioritize the importance of the early years in a child's life.",
      "Capacity Building: Provide training and resources to educators, caregivers, and community members to enhance their capacity in supporting and nurturing early child development.",
      "Monitoring and Evaluation: Establish robust monitoring and evaluation mechanisms to assess the impact of our programs, ensuring continuous improvement and effectiveness.",
    ],
  },
  {
    category: "children",
    name: "School Feeding Program",
    slug: "school-feeding",
    description:
      "Love Leads organization joins forces with any interested parties that care for the future of an African child. These include Churches, organizations, companies, individuals to provide phala (porridge) at some specified times to the under-five children so that they can stand the wrath of hunger and still go to school with hope and grow into productive citizens someday. As part of motivating the children enrolled in early child development project will be provided with Phala so as to avoid school drop outs.",
  },
  {
    category: "children",
    name: "Back to School Program",
    slug: "back-to-school",
    description:
      "The fiercest problem to an African Child is poverty. The program aims at taking back to class these children who dropped out of school due to early marriages, unplanned pregnancies, child labor and street life. It is for this reason that Love Leads is there to bring a chance for such a child to have an access to education as the only hope for true transformation. Children shall have access to scholarships, material and psychological support to curb school dropout rate. The program will target three levels of education; primary, secondary and tertiary education.",
  },

  // YOUTH
  {
    category: "youth",
    name: "Sports & Talent Development",
    slug: "sports-talent-development",
    description:
      "Love Leads believes that engaging young people demands a holistic approach. This is why the organization concentrates on the social and physical development of the youth. To achieve this, the organization will work towards developing teams for various sporting activities both indoor and outdoor, and nurturing talents.",
  },
  {
    category: "youth",
    name: "HIV/AIDS Awareness",
    slug: "hiv-aids-awareness",
    description:
      "We promote public awareness of STDs and HIV/AIDS to the communities and the youth through sports, film shows, drama, music, dance, and radio programs. Our goal is to educate and empower young people to make informed decisions about their health.",
  },

  // WOMEN
  {
    category: "women",
    name: "Women Empowerment",
    slug: "women-empowerment",
    description:
      "This program creates time and opportunities for single parents to attend self-development activities and provide material support to their children, in collaboration with stakeholders, to reduce immoralities like prostitution. Love Leads strives to minimize violence, spiritual, moral and psychosocial needs among women by empowering them with knowledge and greater economic independence through entrepreneurship training.",
  },

  // DISASTER RESPONSE
  {
    category: "disaster-response",
    name: "Disaster Response",
    slug: "disaster-response",
    description:
      "In coordinated efforts, Love Leads undertakes activities to address and mitigate the impact of natural or man-made disasters on communities and regions. It involves a multi-faceted approach that encompasses preparedness, immediate response, recovery, and long-term resilience building.",
    phases: [
      {
        title: "Preparedness",
        items: [
          "Planning: Developing comprehensive disaster response plans that outline roles, responsibilities, and strategies for various stakeholders.",
          "Training: Equipping emergency responders, volunteers, and communities with the necessary skills and knowledge to respond effectively.",
          "Infrastructure: Establishing resilient infrastructure and communication systems to facilitate a swift and coordinated response.",
        ],
      },
      {
        title: "Immediate Response",
        items: [
          "Search and Rescue: Deploying specialized teams to locate and rescue individuals trapped in disaster-stricken areas.",
          "Medical Assistance: Providing emergency medical care and setting up medical facilities to treat injuries and prevent the spread of diseases.",
          "Shelter and Basic Needs: Offering temporary shelter, food, and essential supplies to displaced individuals and families.",
        ],
      },
      {
        title: "Recovery",
        items: [
          "Rehabilitation: Rebuilding and restoring affected areas, including homes, infrastructure, and community services.",
          "Psycho-Social Support: Addressing the emotional and psychological needs of survivors through counseling and mental health services.",
          "Economic Recovery: Implementing strategies to revive local economies and livelihoods affected by the disaster.",
        ],
      },
      {
        title: "Long-Term Resilience Building",
        items: [
          "Community Engagement: Involving local communities in the planning and decision-making processes to enhance resilience.",
          "Risk Reduction: Implementing measures to reduce the vulnerability of communities to future disasters.",
          "Research and Innovation: Continuously improving disaster response through research, technology, and innovation.",
        ],
      },
    ],
  },

  // SPIRITUAL
  {
    category: "spiritual",
    name: "Evangelism",
    slug: "evangelism",
    description:
      "Love Leads believes that a human being is body and soul. We are holistic in addressing both physical and spiritual needs. We take the 'action way' of manifesting God's love—meeting physical needs while sharing the Word of God to nurture spiritual life. We believe that a little aid to a poor soul can lead them to Christ more powerfully than words alone.",
  },

  // COMMUNITY
  {
    category: "community",
    name: "Community Development",
    slug: "community-development",
    description:
      "We work with communities to promote income-generating activities (IGAs), provide counseling and medical care, and educate on human rights and social issues. Our goal is to build resilient communities where every person can thrive.",
    objectives: [
      "Promote and support income-generating activities (IGAs) in the fight against poverty.",
      "Provide counseling and medical care in the communities and refer those in need to appropriate institutions.",
      "Educate the community on human rights, women's and children's rights, and social issues.",
      "Support widows and promote gender equality through community education.",
    ],
  },
];

// ----- CATCHMENT AREAS -----
export const catchmentAreas = [
  {
    region: "Nsanje",
    chapterName: "Nsanje Chapter",
    chiefs: [
      "Group Village Head Man Chapinga",
      "VHM Napasha",
      "Failo",
      "Mulambala",
      "Mathiya",
      "Mphiphira",
    ],
    description: "Serving the Nsanje district with love and compassion. The organization affects five chieftaincies in this area.",
  },
  {
    region: "Phalombe",
    chapterName: "Phalombe Chapter",
    chiefs: ["TA, Group Sakhome"],
    description: "Traditional Authority, Group Sakhome, Phalombe.",
  },
];

// ----- TEAM -----
export const teamMembers = [
  {
    id: 1,
    name: "Timothy Fortune Pitani",
    role: "Founder",
    email: "pitanifortune@gmail.com",
    phone: "+265994291015",
    image: "/images/team/Timothy-Fortune-Pitani-Founder.jpg",
  },
    {
    id: 2,
    name: "Charity Kanyoza",
    role: "Co-founder",
    email: "Charitykanyoza@gmail.com",
    phone: "+265995320460",
    image: "/images/team/Charity-Kanyoza-Co-founder.jpg",
  },
  {
    id: 3,
    name: "Grace Chamanika",
    role: "Board Member",
    email: "chamanikagrace@gmail.com",
    phone: "+265881677265",
    image: "/images/team/Grace-chamanika-Board-member-c.jpg",
  },
  {
    id: 4,
    name: "Anthony Chiniko",
    role: "Board Member",
    email: "antony.chiniko@gmail.com",
    phone: "+265882393965",
    image: "/images/team/Anthony-Chiniko-Board-member.jpg",
  },
  {
    id: 5,
    name: "Doreen Pitani",
    role: "Board Member",
    email: "dpalichina@gmail.com",
    phone: "+265884547363",
    image: "/images/team/Doreen-Pitani-Board-member.jpg",
  },
  {
    id: 6,
    name: "Chisomo Nkoloma",
    role: "Board Member",
    email: "cnkalodzwa@yahoo.co.uk",
    phone: "+265888549814",
    image: "/images/team/Chisomo-Nkoloma-Board-member.jpg",
  },
];

// ----- CONTACT & DONATE -----
export const contact = {
  generalEmail: "lovleads20@gmail.com",
  phone: "+265 994 291 015 / +265 995 320 460",
  address: "Southern Malawi (Nsanje and Phalombe districts)",
};

export const donate = {
  bank: {
    accountName: "Love Leads Organization",
    bankName: "FDH Bank",
    accountNumber: "1170100040766",
    branch: "Mulanje",
  },
};

// ----- DESIGN TOKENS -----
export const colors = {
  primary: "#1E3A3F",
  accent: "#A65D45",
  background: "#F5F0E8",
  light: "#FAF7F2",
  border: "#E5D7C1",
};