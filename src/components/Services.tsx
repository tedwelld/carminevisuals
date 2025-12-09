import { Camera, Film, Video, Palette } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Cinematography",
    description: "High-end film and video production for commercials, narratives, and branded content.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Editorial, commercial, and portrait photography with a cinematic approach.",
  },
  {
    icon: Video,
    title: "Post-Production",
    description: "Professional color grading, editing, and visual effects to elevate your footage.",
  },
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Conceptual development and art direction to bring your vision to life.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-secondary-foreground/70 max-w-xl mx-auto">
            Comprehensive visual solutions tailored to your creative needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-secondary-foreground/5 rounded border border-secondary-foreground/10 hover:border-primary/50 transition-colors duration-300"
            >
              <service.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-serif font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
