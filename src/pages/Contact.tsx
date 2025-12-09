import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "263789276807";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get in touch to discuss conservation storytelling projects, training opportunities, or partnerships.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a
                href="mailto:tedwell@outlook.com"
                className="flex items-start gap-4 p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">tedwell@outlook.com</p>
                </div>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">+263 789 276 807</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 bg-secondary rounded-lg border border-border">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+263 789 276 807</p>
                  <p className="text-muted-foreground">+263 777 555 017</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary rounded-lg border border-border">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">3281 Hlalanikhle Extension</p>
                  <p className="text-muted-foreground">Hwange, Dete</p>
                  <p className="text-muted-foreground">Matabeleland North, Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
