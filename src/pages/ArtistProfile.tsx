import Navigation from "@/components/Navigation";
import { Star, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const ArtistProfile = () => {
  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="h-64 bg-gradient-glamour relative">
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <h1 className="font-serif text-4xl text-white mb-2">Sarah Johnson</h1>
                <p className="text-white/80">Bridal & Editorial Makeup Artist</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-glamour-gold text-glamour-gold" />
                  <span>4.9 (128 reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-5 h-5 text-glamour-pink" />
                  <span>New York, NY</span>
                </div>
              </div>

              <p className="text-glamour-dark/80 mb-6">
                With over 10 years of experience in bridal and editorial makeup,
                I specialize in creating timeless, elegant looks that enhance
                your natural beauty.
              </p>

              <Button className="bg-gradient-glamour text-white w-full">
                Book Now
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((photo) => (
              <div
                key={photo}
                className="aspect-square bg-gradient-glamour rounded-lg"
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistProfile;