import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedIcon from "@/components/AnimatedIcon";
import { GraduationCap, Mic, Camera, Trees, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Future Storytellers Track",
      description: "Hands-on media training for youth in photography, filming, editing, and digital publishing.",
      cta: "Apply for Training",
    },
    {
      icon: Mic,
      title: "Community Voice Sessions",
      description: "Oral-history and podcast storytelling sessions with local conservation champions.",
      cta: "Join a Session",
    },
    {
      icon: Camera,
      title: "Field Documentation Labs",
      description: "Guided wildlife and ecosystem shoots focused on ethics, accuracy, and narrative quality.",
      cta: "Book a Lab",
    },
    {
      icon: Trees,
      title: "Conservation Impact Campaigns",
      description: "Collaborative campaigns with NGOs, schools, and tourism stakeholders for measurable change.",
      cta: "Launch a Campaign",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <section className="mb-14">
            <div className="glass-card p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Programs</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our programs are designed to build conservation storytellers, strengthen community communication, and produce media that drives action.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <Link key={program.title} to="/contact" className="glass-card p-7 block">
                <AnimatedIcon icon={program.icon} className="w-10 h-10 text-primary mx-auto mb-4" animation="pulse" />
                <h2 className="text-2xl font-serif font-semibold mb-3">{program.title}</h2>
                <p className="text-muted-foreground mb-5">{program.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  {program.cta}
                  <AnimatedIcon icon={ArrowRight} className="w-4 h-4" animation="wave" />
                </span>
              </Link>
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
