import { Camera, Users, Heart, Briefcase, Eye, Target, Award } from "lucide-react";

// Gallery images
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
      description: "We believe Africans should tell African conservation stories. Our work centres on authentic narrative ownership and representation.",
    },
    {
      title: "Conservation First",
      description: "Every story, project, and training prioritises the protection and ethical portrayal of wildlife and ecosystems.",
    },
    {
      title: "Youth Empowerment & Future Leadership",
      description: "We invest in young people — inspiring them to become skilled storytellers and conservation leaders.",
    },
    {
      title: "Community Inclusion",
      description: "Communities are custodians of wildlife. Their voices, knowledge, and experiences guide our storytelling.",
    },
    {
      title: "Integrity & Professionalism",
      description: "We uphold high ethical standards in all collaborations, media work, and educational programmes.",
    },
  ];

  const pillars = [
    {
      icon: Camera,
      title: "Conservation Storytelling & Media Production",
      subtitle: "Documenting Africa's wild spaces with authenticity, creativity, and scientific respect.",
      activities: [
        "Wildlife photography & visual narratives",
        "Short films & documentaries",
        "Podcasts featuring conservation issues, culture, and community voices",
        "Blogs, newsletters, and digital storytelling",
        "Media partnerships with lodges & conservation organisations",
      ],
      purpose: "To inspire action, highlight conservation challenges and successes, and ensure African voices lead their own wildlife narrative.",
    },
    {
      icon: Users,
      title: "Youth Training, Skills Transfer & the Future Storytellers Programme",
      subtitle: "Transforming young people into storytellers, conservation ambassadors, and future environmental professionals.",
      activities: [
        "Media training: photography, filming, editing, podcasting",
        "In-school conservation storytelling clubs",
        "Mentorship & field learning opportunities",
        "School-to-career guidance for conservation jobs",
        "Future establishment of a Conservation Media Academy",
      ],
      purpose: "To inspire and equip youth to pursue storytelling roles and conservation careers — ensuring the next generation carries the mission forward.",
    },
    {
      icon: Heart,
      title: "Community & Conservation Engagement",
      subtitle: "Strengthening community ownership of wildlife conservation.",
      activities: [
        "Community-led storytelling projects",
        "Workshops with elders, women's groups, schools",
        "Human–wildlife coexistence stories",
        "Art, photography, and education events",
        "Conservation communication partnerships",
      ],
      purpose: "To make conservation relatable, local, community-owned — and to elevate voices that are often unheard in mainstream wildlife media.",
    },
    {
      icon: Briefcase,
      title: "Media Services & Strategic Partnerships",
      subtitle: "A sustainable business arm supporting our long-term impact.",
      activities: [
        "Photography & videography services for lodges and tourism brands",
        "Documentary commissions for conservation organisations",
        "Social media storytelling for partners",
        "Conservation-themed exhibitions & festivals",
        "Branded visual content for donors and NGOs",
      ],
      purpose: "To ensure financial sustainability, strengthen relationships with tourism and conservation partners, and maintain professional standards.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-secondary-foreground mb-4">
            Carmine Visuals <span className="text-primary">Africa</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-6">(CVA)</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-secondary-foreground/70">
            <span className="px-3 py-1 bg-secondary-foreground/10 rounded-full">Conservation Storytelling</span>
            <span className="px-3 py-1 bg-secondary-foreground/10 rounded-full">Media Education</span>
            <span className="px-3 py-1 bg-secondary-foreground/10 rounded-full">Youth Empowerment</span>
            <span className="px-3 py-1 bg-secondary-foreground/10 rounded-full">Wildlife Communication</span>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Work in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Capturing the essence of conservation, community, and wildlife across Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={elephant1} alt="African elephant portrait" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={community1} alt="Community members celebrating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={fishEagle} alt="African fish eagle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={community2} alt="Community member watering crops" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={elephant2} alt="Elephant mother and calf in water" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={wildDog} alt="African wild dog" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={community3} alt="Conservation worker" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={elephant3} alt="Baby elephant in water" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Eye className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">Vision</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              To inspire a world where Africa's wildlife, people, and natural heritage are celebrated, understood, and protected through powerful storytelling — owned, told, and led by Africans themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Target className="w-12 h-12 text-primary" />
            </div>
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

      {/* Core Values Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Award className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">Core Values</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {coreValues.map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Four Pillars</h2>
          </div>
          <div className="space-y-16">
            {pillars.map((pillar, index) => (
              <div key={index} className="max-w-4xl mx-auto bg-card rounded-lg p-8 shadow-sm border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm text-primary font-medium mb-1">Pillar {index + 1}</h3>
                    <h4 className="text-xl md:text-2xl font-serif font-semibold">{pillar.title}</h4>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-6">{pillar.subtitle}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Activities</h5>
                  <ul className="space-y-2">
                    {pillar.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded p-4">
                  <h5 className="font-semibold mb-2">Purpose</h5>
                  <p className="text-muted-foreground">{pillar.purpose}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-secondary-foreground italic">
            "Telling Africa's Wild Stories. Inspiring the Next Generation."
          </p>
        </div>
      </section>
    </div>
  );
};

export default CVAContent;
