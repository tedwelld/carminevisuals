import { Instagram, Youtube, Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-serif font-semibold tracking-tight">
            carmine<span className="text-primary">visuals</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-secondary-foreground/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-secondary-foreground/60 hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="text-secondary-foreground/60 hover:text-primary transition-colors"
              aria-label="Vimeo"
            >
              <Video size={20} />
            </a>
          </div>

          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Carmine Visuals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
