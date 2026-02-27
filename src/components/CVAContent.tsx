import { FaCamera, FaUsers, FaHeart, FaBriefcase, FaEye, FaBullseye, FaAward, FaArrowRight, FaNewspaper, FaEnvelope, FaInfoCircle, FaTree } from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedIcon from "./AnimatedIcon";

import community1 from "@/assets/gallery/community-1.jpg";
import elephant1 from "@/assets/gallery/elephant-1.jpg";
import elephant2 from "@/assets/gallery/elephant-2.jpg";
import community2 from "@/assets/gallery/community-2.jpg";
import elephant3 from "@/assets/gallery/elephant-3.jpg";
import wildDog from "@/assets/gallery/wild-dog.jpg";
import community3 from "@/assets/gallery/community-3.jpg";
import fishEagle from "@/assets/gallery/fish-eagle.jpg";

const CVAContent = () => {
  const coreValues = [
    {
      title: "Ownership of Our Stories",
      description: "We believe Africans should tell African conservation stories. Our work centers on authentic narrative ownership and representation.",
    },
    {
      title: "Conservation First",
      description: "Every story, project, and training prioritizes the protection and ethical portrayal of wildlife and ecosystems.",
    },
    {
      title: "Youth Empowerment and Future Leadership",
      description: "We invest in young people, inspiring them to become skilled storytellers and conservation leaders.",
    },
    {
      title: "Community Inclusion",
      description: "Communities are custodians of wildlife. Their voices, knowledge, and experiences guide our storytelling.",
    },
    {
      title: "Integrity and Professionalism",
      description: "We uphold high ethical standards in all collaborations, media work, and educational programs.",
    },
  ];

  const quickActions = [
    {
      icon: FaInfoCircle,
      title: "Who We Are",
      description: "Learn about our mission, values, and conservation media approach.",
      href: "/about",
      cta: "Explore About",
    },
    {
      icon: FaTree,
      title: "Programs",
      description: "Discover training tracks and community conservation initiatives.",
      href: "/programs",
      cta: "Open Programs",
    },
    {
      icon: FaCamera,
      title: "Explore Services",
      description: "See photography and video offerings for conservation storytelling.",
      href: "/services",
      cta: "View Services",
    },
    {
      icon: FaNewspaper,
      title: "Read Latest News",
      description: "Follow conservation updates, field stories, and local impact.",
      href: "/news",
      cta: "Open News",
    },
    {
      icon: FaEnvelope,
      title: "Start a Project",
      description: "Contact us for partnerships, youth programs, and media work.",
      href: "/contact",
      cta: "Contact CVA",
    },
  ];

  const pillars = [
    {
      icon: FaCamera,
      title: "Conservation Storytelling and Media Production",
      subtitle: "Documenting Africa's wild spaces with authenticity, creativity, and scientific respect.",
      activities: [
        "Wildlife photography and visual narratives",
        "Short films and documentaries",
        "Podcasts featuring conservation issues, culture, and community voices",
        "Blogs, newsletters, and digital storytelling",
        "Media partnerships with lodges and conservation organizations",
      ],
      purpose: "To inspire action, highlight conservation challenges and successes, and ensure African voices lead their own wildlife narrative.",
    },
    {
      icon: FaUsers,
      title: "Youth Training, Skills Transfer and the Future Storytellers Program",
      subtitle: "Transforming young people into storytellers, conservation ambassadors, and future environmental professionals.",
      activities: [
        "Media training in photography, filming, editing, and podcasting",
        "In-school conservation storytelling clubs",
        "Mentorship and field learning opportunities",
        "School-to-career guidance for conservation jobs",
        "Future establishment of a Conservation Media Academy",
      ],
      purpose: "To equip youth to pursue storytelling roles and conservation careers while carrying the mission forward.",
    },
    {
      icon: FaHeart,
      title: "Community and Conservation Engagement",
      subtitle: "Strengthening community ownership of wildlife conservation.",
      activities: [
        "Community-led storytelling projects",
        "Workshops with elders, women groups, and schools",
        "Human-wildlife coexistence stories",
        "Art, photography, and education events",
        "Conservation communication partnerships",
      ],
      purpose: "To make conservation relatable and community-owned while elevating voices often unheard in mainstream wildlife media.",
    },
    {
      icon: FaBriefcase,
      title: "Media Services and Strategic Partnerships",
      subtitle: "A sustainable business arm supporting long-term impact.",
      activities: [
        "Photography and videography services for lodges and tourism brands",
        "Documentary commissions for conservation organizations",
        "Social media storytelling for partners",
        "Conservation-themed exhibitions and festivals",
        "Branded visual content for donors and NGOs",
      ],
      purpose: "To ensure financial sustainability, strengthen partnerships, and maintain professional standards.",
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="glass-panel rounded-3xl p-8 md:p-14">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-4">
              Carmine Visuals <span className="text-primary">Africa</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">(CVA)</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              <span className="glass-chip">Conservation Storytelling</span>
              <span className="glass-chip">Media Education</span>
              <span className="glass-chip">Youth Empowerment</span>
              <span className="glass-chip">Wildlife Communication</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            {quickActions.map((action) => (
              <Link key={action.title} to={action.href} className="glass-card p-6 group">
                <AnimatedIcon
                  icon={action.icon}
                  animation="float"
                  className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                <p className="text-muted-foreground mb-4">{action.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  {action.cta}
                  <AnimatedIcon icon={FaArrowRight} animation="wave" className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Work in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Capturing the essence of conservation, community, and wildlife across Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg glass-panel">
              <img loading="lazy" decoding="async" src={elephant1} alt="African elephant portrait" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg glass-panel">
              <img loading="lazy" decoding="async" src={community1} alt="Community members celebrating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg glass-panel">
              <img loading="lazy" decoding="async" src={fishEagle} alt="African fish eagle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg glass-panel">
              <img loading="lazy" decoding="async" src={community2} alt="Community member watering crops" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg glass-panel">
              <img loading="lazy" decoding="async" src={elephant2} alt="Elephant mother and calf in water" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg glass-panel">
              <img loading="lazy" decoding="async" src={wildDog} alt="African wild dog" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg glass-panel">
              <img loading="lazy" decoding="async" src={community3} alt="Conservation worker" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg glass-panel">
              <img loading="lazy" decoding="async" src={elephant3} alt="Baby elephant in water" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <AnimatedIcon icon={FaEye} className="w-12 h-12 text-primary mb-6" animation="pulse" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Vision</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              To inspire a world where Africa's wildlife, people, and natural heritage are celebrated, understood, and protected through powerful storytelling owned, told, and led by Africans themselves.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12">
            <AnimatedIcon icon={FaBullseye} className="w-12 h-12 text-primary mb-6" animation="float" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Carmine Visuals Africa empowers communities and youth to tell their own conservation stories through photography, filmmaking, podcasts, and creative media.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We document Africa's wild spaces authentically, nurture the next generation of storytellers, and encourage young people to pursue conservation careers that support the protection of our shared natural heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <AnimatedIcon icon={FaAward} className="w-12 h-12 text-primary mx-auto mb-6" animation="pulse" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Core Values</h2>
          </div>
          <div className="max-w-4xl mx-auto grid gap-6">
            {coreValues.map((value, index) => (
              <div key={value.title} className="glass-card p-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold mx-auto mb-3">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Four Pillars</h2>
          </div>
          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="max-w-4xl mx-auto glass-card p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center mx-auto mb-4">
                    <AnimatedIcon icon={pillar.icon} className="w-6 h-6 text-primary" animation="float" />
                  </div>
                  <h3 className="text-sm text-primary font-medium mb-1">Pillar {index + 1}</h3>
                  <h4 className="text-xl md:text-2xl font-serif font-semibold">{pillar.title}</h4>
                </div>
                <p className="text-muted-foreground italic mb-6">{pillar.subtitle}</p>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Activities</h5>
                  <ul className="space-y-2">
                    {pillar.activities.map((activity) => (
                      <li key={activity} className="text-muted-foreground">
                        - {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-panel rounded-xl p-4">
                  <h5 className="font-semibold mb-2">Purpose</h5>
                  <p className="text-muted-foreground">{pillar.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4">
              Stay Updated with Conservation News
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Read the latest stories, insights, and developments in wildlife conservation across Zimbabwe and Africa.
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 glass-chip text-foreground font-medium hover:text-primary transition-colors"
            >
              Read Our News
              <AnimatedIcon icon={FaArrowRight} className="w-4 h-4 text-primary" animation="wave" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="glass-panel rounded-3xl p-10">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-foreground italic">
              "Telling Africa's Wild Stories. Inspiring the Next Generation."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CVAContent;
