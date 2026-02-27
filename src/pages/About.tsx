import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Leaf, Users, Camera, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const highlights = [
    {
      icon: Leaf,
      title: "Conservation Rooted",
      text: "Every project supports wildlife protection, habitat restoration, and ethical conservation storytelling.",
    },
    {
      icon: Users,
      title: "Community Driven",
      text: "Local voices are centered through participatory storytelling, training, and field engagement.",
    },
    {
      icon: Camera,
      title: "Creative Excellence",
      text: "Photography, film, and digital media are crafted for impact, education, and long-term awareness.",
    },
    {
      icon: Globe,
      title: "Regional Reach",
      text: "Stories from Zimbabwe connect to broader African and international audiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <section className="mb-14">
            <div className="glass-card p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">About Carmine Visuals Africa</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Carmine Visuals Africa exists to tell authentic conservation stories through African voices while equipping youth and communities with practical media skills.
              </p>
            </div>
          </section>

          <section className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="glass-card p-6">
                  <AnimatedIcon icon={item.icon} className="w-10 h-10 text-primary mx-auto mb-4" animation="float" />
                  <h2 className="text-2xl font-serif font-semibold mb-2">{item.title}</h2>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Work With Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Partner with us on campaigns, community documentaries, training programs, and conservation communication initiatives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/programs" className="glass-chip inline-flex items-center gap-2 hover:text-primary transition-colors">
                  View Programs
                  <AnimatedIcon icon={ArrowRight} className="w-4 h-4 text-primary" animation="wave" />
                </Link>
                <Link to="/contact" className="glass-chip inline-flex items-center gap-2 hover:text-primary transition-colors">
                  Start a Collaboration
                  <AnimatedIcon icon={ArrowRight} className="w-4 h-4 text-primary" animation="wave" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
