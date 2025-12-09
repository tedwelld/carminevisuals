import Header from "@/components/Header";
import CVAContent from "@/components/CVAContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CVAContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
