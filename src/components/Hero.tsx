import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold text-secondary-foreground mb-6 tracking-tight">
          Visual Storytelling
          <br />
          <span className="text-primary">That Captivates</span>
        </h1>
        <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
          Premium cinematography and photography for brands, films, and creative projects that demand excellence.
        </p>
        <a
          href="#work"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors duration-200"
        >
          View Our Work
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-secondary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
