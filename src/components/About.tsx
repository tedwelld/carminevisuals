const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6">
              Crafting Visual
              <br />
              <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Carmine Visuals is a boutique cinematography and photography studio dedicated to creating stunning visual content that tells compelling stories.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over a decade of experience working with global brands, independent filmmakers, and creative agencies, we bring technical mastery and artistic vision to every project.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-serif font-semibold text-foreground">150+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-semibold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Years</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-semibold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80"
              alt="Cinematographer at work"
              className="w-full aspect-[4/5] object-cover rounded"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-primary rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
