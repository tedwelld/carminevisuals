import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedIcon from "@/components/AnimatedIcon";
import { Camera, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Camera,
    title: "Photography",
    description: "Professional wildlife, conservation, and documentary photography capturing Africa's natural heritage with authenticity and artistic vision.",
    features: [
      "Wildlife and Nature Photography",
      "Conservation Documentary Photography",
      "Event and Community Coverage",
      "Portrait and Editorial Photography",
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
      "Promotional Videos for Lodges and Tourism",
      "Educational and Training Videos",
      "Social Media Content Creation",
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
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Professional media services supporting conservation storytelling across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.title} to="/contact" className="glass-card p-8 block">
                <AnimatedIcon icon={service.icon} className="w-12 h-12 text-primary mx-auto mb-6" animation="float" />
                <h2 className="text-2xl font-serif font-semibold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-foreground/80">
                      - {feature}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Request this service
                  <AnimatedIcon icon={ArrowRight} className="w-4 h-4" animation="wave" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
