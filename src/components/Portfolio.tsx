const portfolioItems = [
  {
    id: 1,
    title: "Brand Campaign",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
  },
  {
    id: 2,
    title: "Music Video",
    category: "Film",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
  },
  {
    id: 3,
    title: "Product Launch",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
  {
    id: 4,
    title: "Documentary",
    category: "Film",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A curated collection of our most impactful visual projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded bg-muted cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-secondary-foreground">
                  <p className="text-sm uppercase tracking-widest mb-2 text-primary">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-serif font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
