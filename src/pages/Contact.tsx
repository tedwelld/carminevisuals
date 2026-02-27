import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import AnimatedIcon from "@/components/AnimatedIcon";

const Contact = () => {
  const whatsappNumber = "263777555017";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get in touch to discuss conservation storytelling projects, training opportunities, or partnerships.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="mailto:tedwell@outlook.com"
                className="glass-card p-6 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center mb-4">
                  <AnimatedIcon icon={Mail} className="w-6 h-6 text-primary" animation="pulse" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">nyasulusurvivor@gmail.com</p>
                <p className="text-muted-foreground">tedwell@outlook.com</p>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center mb-4">
                  <AnimatedIcon icon={MessageCircle} className="w-6 h-6 text-primary" animation="wave" />
                </div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <p className="text-muted-foreground">+263 777 555 017</p>
              </a>

              <a href="tel:+263789276807" className="glass-card p-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center mb-4">
                  <AnimatedIcon icon={Phone} className="w-6 h-6 text-primary" animation="wave" />
                </div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+263 789 276 807</p>
                <p className="text-muted-foreground">+263 777 555 017</p>
              </a>

              <a
                href="https://maps.google.com/?q=3281+Hlalanikuhle+Extension+Hwange+Dete"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center mb-4">
                  <AnimatedIcon icon={MapPin} className="w-6 h-6 text-primary" animation="float" />
                </div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">3281 Hlalanikuhle Extension</p>
                <p className="text-muted-foreground">Hwange, Dete</p>
                <p className="text-muted-foreground">Matabeleland North, Zimbabwe</p>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
