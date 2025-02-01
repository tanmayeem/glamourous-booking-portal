import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, MessageSquare, Star, Users } from "lucide-react";

const ArtistProfile = () => {
  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="h-48 bg-gradient-glamour relative">
              <div className="absolute -bottom-16 left-8">
                <Avatar className="h-32 w-32 border-4 border-white">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="pt-20 p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="font-serif text-3xl text-glamour-dark mb-2">Sarah Anderson</h1>
                  <p className="text-glamour-dark/60 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> New York, NY
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Message
                  </Button>
                  <Button className="bg-gradient-glamour text-white">Book Now</Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="font-serif text-2xl text-glamour-dark">4.9</div>
                  <div className="flex justify-center text-glamour-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div className="text-sm text-glamour-dark/60 mt-1">Rating</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl text-glamour-dark">250+</div>
                  <div className="text-sm text-glamour-dark/60">Clients</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl text-glamour-dark">5 yrs</div>
                  <div className="text-sm text-glamour-dark/60">Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-glamour animate-shimmer" />
              </div>
            ))}
          </div>

          {/* Services */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="font-serif text-2xl text-glamour-dark">Services</h2>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  { name: "Bridal Makeup", price: "$300", duration: "2 hours" },
                  { name: "Editorial Makeup", price: "$200", duration: "1.5 hours" },
                  { name: "Special Event", price: "$150", duration: "1 hour" },
                ].map((service) => (
                  <div
                    key={service.name}
                    className="flex justify-between items-center p-4 rounded-lg border border-glamour-gold/20 hover:border-glamour-gold/40 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-glamour-dark">{service.name}</h3>
                      <p className="text-sm text-glamour-dark/60">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-xl text-glamour-dark">
                        {service.price}
                      </div>
                      <Button variant="outline" size="sm">Book Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistProfile;