import Navigation from "@/components/Navigation";
import { Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Masterclasses = () => {
  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <h1 className="font-serif text-4xl text-glamour-dark text-center mb-12">
          Masterclasses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((masterclass) => (
            <div
              key={masterclass}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="h-48 bg-gradient-glamour relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl text-glamour-dark mb-2">
                  Advanced Bridal Makeup
                </h3>
                <p className="text-sm text-glamour-dark/60 mb-4">
                  Learn professional techniques for creating timeless bridal looks
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-glamour-pink" />
                    <span className="text-sm">June 15, 2024</span>
                  </div>
                  <Button className="bg-gradient-glamour text-white">
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Masterclasses;