import { Instagram, Youtube, Video, MapPin, Phone, MessageCircle } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";

const Footer = () => {
  return (
    <footer className="py-12 text-foreground">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-3xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-serif font-semibold tracking-tight mb-4">
                Carmine Visuals <span className="text-primary">Africa</span>
              </div>
              <p className="text-muted-foreground text-sm italic">
                "Telling Africa's Wild Stories. Inspiring the Next Generation."
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <AnimatedIcon icon={Phone} animation="wave" className="w-4 h-4 text-primary" />
                  <span>+263 789 276 807 / +263 777 555 017</span>
                </div>
                <div className="flex items-start justify-center gap-2">
                  <AnimatedIcon icon={MapPin} animation="pulse" className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>3281 Hlalanikuhle Extension - Hwange-Dete<br />Matabeleland North-Zimbabwe</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.instagram.com/carminevisuals/#"
                  className="glass-chip text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <AnimatedIcon icon={Instagram} animation="float" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@carminevisuals"
                  className="glass-chip text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <AnimatedIcon icon={Youtube} animation="pulse" className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/263777555017"
                  className="glass-chip text-muted-foreground hover:text-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <AnimatedIcon icon={MessageCircle} animation="wave" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100083043715363"
                  className="glass-chip text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <AnimatedIcon icon={Video} animation="float" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/40 pt-6">
            <p className="text-sm text-muted-foreground text-center">
              (c) 2026 Carmine Visuals Africa. All rights reserved.
              <br />
              <b>Powered by Tedwell & Co.</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
