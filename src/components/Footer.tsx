import { Instagram, Youtube, Video, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-serif font-semibold tracking-tight mb-4">
              Carmine Visuals <span className="text-primary">Africa</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm italic">
              "Telling Africa's Wild Stories. Inspiring the Next Generation."
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+263 789 276 807 / +263 777 555 017</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>3281 Hlalanikuhle Extension - Hwange-Dete<br />Matabeleland North-Zimbabwe</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/carminevisuals/#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@carminevisuals"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100083043715363"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Video size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6">
          <p className="text-sm text-secondary-foreground/60 text-center">
            © 2026 Carmine Visuals Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
