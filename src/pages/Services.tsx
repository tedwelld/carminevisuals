import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Camera, Video, Mic, PenTool } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Professional wildlife, conservation, and documentary photography capturing Africa's natural heritage with authenticity and artistic vision.",
    features: [
      "Wildlife & Nature Photography",
      "Conservation Documentary Photography",
      "Event & Community Coverage",
      "Portrait & Editorial Photography",
      "Stock Photography for Conservation",
    ],
  },
  {
    icon: Video,
    title: "Video Production",
    description: "High-quality video production services for conservation storytelling, documentaries, and promotional content.",
    features: [
      "Wildlife Documentaries",
      "Conservation Short Films",
      "Promotional Videos for Lodges & Tourism",
      "Educational & Training Videos",
      "Social Media Content Creation",
    ],
  },
  {
    icon: Mic,
    title: "Podcasts",
    description: "Engaging audio storytelling that brings conservation voices to life, sharing stories from the field and connecting communities.",
    features: [
      "Wildlife Conservation Podcasts",
      "Community Voices & Interviews",
      "Educational Audio Series",
      "Behind-the-Scenes Field Stories",
      "Multilingual Content Production",
    ],
  },
  {
    icon: PenTool,
    title: "Creative Direction",
    description: "Strategic creative guidance for conservation campaigns, branding, and visual storytelling initiatives.",
    features: [
      "Brand Identity for Conservation",
      "Campaign Creative Strategy",
      "Visual Storytelling Consultation",
      "Content Strategy & Planning",
      "Exhibition & Event Design",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
              Our Services
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Professional media services supporting conservation storytelling across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-secondary rounded-lg border border-border"
              >
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-2xl font-serif font-semibold mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
