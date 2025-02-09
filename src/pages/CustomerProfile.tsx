import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Heart, MapPin, Settings, Star } from "lucide-react";

const CustomerProfile = () => {
  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="h-48 bg-gradient-to-r from-glamour-pink to-glamour-gold relative">
              <div className="absolute -bottom-16 left-8">
                <Avatar className="h-32 w-32 border-4 border-white">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute top-4 right-4">
                <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
                  <Settings className="w-4 h-4" /> Edit Profile
                </Button>
              </div>
            </div>
            
            <div className="pt-20 p-8">
              <h1 className="font-serif text-3xl text-glamour-dark mb-2">Jane Doe</h1>
              <p className="text-glamour-dark/60 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Los Angeles, CA
              </p>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="font-serif text-2xl text-glamour-dark">Upcoming Appointments</h2>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  {
                    artist: "Sarah Anderson",
                    service: "Bridal Makeup Trial",
                    date: "March 15, 2024",
                    time: "2:00 PM",
                  },
                  {
                    artist: "Michael Chen",
                    service: "Special Event Makeup",
                    date: "March 20, 2024",
                    time: "10:00 AM",
                  },
                ].map((appointment) => (
                  <div
                    key={appointment.date}
                    className="flex justify-between items-center p-4 rounded-lg border border-glamour-gold/20"
                  >
                    <div>
                      <h3 className="font-medium text-glamour-dark">{appointment.artist}</h3>
                      <p className="text-sm text-glamour-dark/60">{appointment.service}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-glamour-dark/60">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {appointment.date}
                      </div>
                      <div className="text-sm text-glamour-dark/60">{appointment.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Favorite Artists */}
          <Card>
            <CardHeader>
              <h2 className="font-serif text-2xl text-glamour-dark">Favorite Artists</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((artist) => (
                  <div
                    key={artist}
                    className="flex items-center gap-4 p-4 rounded-lg border border-glamour-gold/20"
                  >
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium text-glamour-dark">Artist Name</h3>
                      <div className="flex items-center gap-1 text-glamour-gold">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">4.9</span>
                      </div>
                    </div>
                    <Button variant="outline" size="icon">
                      <Heart className="w-4 h-4 fill-current text-glamour-pink" />
                    </Button>
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

export default CustomerProfile;