import Navigation from "@/components/Navigation";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const SearchArtists = () => {
  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Find Your Perfect Makeup Artist"
              className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-glamour-gold/20 focus:border-glamour-gold focus:outline-none font-sans"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-glamour-dark/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((artist) => (
              <div key={artist} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-glamour" />
                <div className="p-6">
                  <h3 className="font-serif text-xl text-glamour-dark mb-2">
                    Artist Name
                  </h3>
                  <p className="text-sm text-glamour-dark/60 mb-4">
                    Bridal & Editorial Makeup
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">$150/session</span>
                    <Button
                      variant="outline"
                      className="border-glamour-gold text-glamour-dark hover:bg-glamour-gold/10"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchArtists;