import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedIcon from "@/components/AnimatedIcon";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zimbabwe's Elephant Population Shows Promising Recovery",
      date: "December 8, 2024",
      excerpt: "Recent surveys indicate an increase in elephant numbers across Hwange National Park, marking a conservation success story.",
      category: "Conservation Success",
    },
    {
      id: 2,
      title: "Human-Wildlife Conflict: Finding Solutions Together",
      date: "December 5, 2024",
      excerpt: "Communities in Matabeleland North are piloting new approaches to reduce conflict and protect livelihoods.",
      category: "Community",
    },
    {
      id: 3,
      title: "Youth Photography Workshop Launches in Dete",
      date: "December 1, 2024",
      excerpt: "Carmine Visuals Africa introduces a new training program for young photographers interested in wildlife documentation.",
      category: "Education",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Conservation News</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Stay updated with the latest stories, insights, and developments in wildlife conservation across Zimbabwe and Africa.
            </p>
          </div>

          <section className="mb-16">
            <div className="glass-card overflow-hidden">
              <div className="p-8 md:p-12">
                <span className="text-primary text-sm font-medium uppercase tracking-wide">Featured Story</span>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mt-3 mb-4">
                  The Lions of Hwange: A Tale of Resilience
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Zimbabwe's Hwange National Park, spanning over 14,600 square kilometers, is home to one of Africa's remarkable lion populations.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Conservation efforts, including community education programs and anti-poaching initiatives, are helping stabilize lion numbers in the region.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Local communities increasingly partner in protection and recognize the economic value of responsible wildlife tourism.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Carmine Visuals Africa remains committed to documenting these stories so local voices and wildlife heritage reach global audiences.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Link key={article.id} to="/contact" className="glass-card p-6 block">
                  <span className="text-primary text-xs font-medium uppercase tracking-wide">{article.category}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-3">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                    <AnimatedIcon icon={Calendar} className="w-4 h-4 text-primary" animation="pulse" />
                    {article.date}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 text-center">
            <div className="glass-card p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4">Have a Story to Share?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                We believe in community-led storytelling. If you have a conservation story from your area, we would love to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 glass-chip text-foreground font-medium hover:text-primary transition-colors"
              >
                Get in Touch
                <AnimatedIcon icon={ArrowRight} className="w-4 h-4 text-primary" animation="wave" />
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
