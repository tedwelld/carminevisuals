import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zimbabwe's Elephant Population Shows Promising Recovery",
      date: "December 8, 2024",
      excerpt: "Recent surveys indicate a significant increase in elephant numbers across Hwange National Park, marking a conservation success story.",
      category: "Conservation Success",
    },
    {
      id: 2,
      title: "Human-Wildlife Conflict: Finding Solutions Together",
      date: "December 5, 2024",
      excerpt: "Communities in Matabeleland North are pioneering new approaches to living alongside wildlife, reducing conflicts and protecting livelihoods.",
      category: "Community",
    },
    {
      id: 3,
      title: "Youth Photography Workshop Launches in Dete",
      date: "December 1, 2024",
      excerpt: "Carmine Visuals Africa introduces new training programme for aspiring young photographers interested in wildlife documentation.",
      category: "Education",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">
              Conservation News
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Stay updated with the latest stories, insights, and developments in wildlife conservation across Zimbabwe and Africa.
            </p>
          </div>

          {/* Featured Story */}
          <section className="mb-16">
            <div className="bg-secondary rounded-lg border border-border overflow-hidden">
              <div className="p-8 md:p-12">
                <span className="text-primary text-sm font-medium uppercase tracking-wide">Featured Story</span>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mt-3 mb-4">
                  The Lions of Hwange: A Tale of Resilience
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Zimbabwe's Hwange National Park, spanning over 14,600 square kilometres, is home to one of Africa's most remarkable lion populations. 
                  Despite challenges from habitat loss and human-wildlife conflict, these magnificent cats have shown incredible resilience.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Recent conservation efforts, including community education programmes and anti-poaching initiatives, have contributed to stabilising 
                  lion numbers in the region. Local communities are increasingly becoming partners in protection, recognising the economic value that 
                  wildlife tourism brings to their villages.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "When we tell our own stories about these lions, we create a deeper connection between our people and the wildlife we live alongside," 
                  says a local conservation educator. "These are not just animals in a park — they are part of our heritage."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As Carmine Visuals Africa continues to document these stories, we remain committed to ensuring that the voices of local communities 
                  and the majesty of Zimbabwe's wildlife reach audiences worldwide. Every photograph, every video, every story we share is a step 
                  toward a future where humans and wildlife thrive together.
                </p>
              </div>
            </div>
          </section>

          {/* Latest News */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <article 
                  key={article.id} 
                  className="bg-secondary rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
                >
                  <span className="text-primary text-xs font-medium uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-3">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center">
            <div className="bg-primary/10 rounded-lg p-8 md:p-12 border border-primary/20">
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4">
                Have a Story to Share?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                We believe in community-led storytelling. If you have a conservation story from your area, we'd love to hear from you.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
