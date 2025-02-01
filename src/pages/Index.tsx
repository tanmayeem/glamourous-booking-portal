import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedArtists from "@/components/FeaturedArtists";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      <Hero />
      <FeaturedArtists />
      <Footer />
    </div>
  );
};

export default Index;