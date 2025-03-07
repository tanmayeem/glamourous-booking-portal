
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Star, Calendar, Clock, Camera, Users, Heart } from "lucide-react";

interface ArtistData {
  name: string;
  bio: string;
  location: string;
  specialization: string;
  experience: string;
  rate: string;
  profileImage?: string;
  portfolio?: string[];
}

const ArtistViewProfile = () => {
  const { artistId } = useParams();
  const navigate = useNavigate();
  const [artistData, setArtistData] = useState<ArtistData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtistData = async () => {
      if (!artistId) return;
      
      try {
        const artistRef = doc(db, "artists", artistId);
        const artistSnap = await getDoc(artistRef);
        
        if (artistSnap.exists()) {
          setArtistData(artistSnap.data() as ArtistData);
        } else {
          console.error("No artist found with this ID");
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistData();
  }, [artistId]);

  const handleBookNow = () => {
    navigate(`/booking/${artistId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-glamour-light flex items-center justify-center">
        <div className="animate-pulse text-glamour-dark text-lg">Loading artist profile...</div>
      </div>
    );
  }

  if (!artistData) {
    return (
      <div className="min-h-screen bg-glamour-light flex items-center justify-center">
        <div className="text-glamour-dark text-lg">Artist not found</div>
      </div>
    );
  }

  // Mock reviews data - in a real app, this would come from the database
  const reviews = [
    {
      id: 1,
      name: "Emily Johnson",
      date: "March 15, 2024",
      rating: 5,
      comment: "Absolutely amazing work! Made me feel beautiful for my wedding day."
    },
    {
      id: 2,
      name: "Sarah Williams",
      date: "February 28, 2024",
      rating: 4,
      comment: "Great technique and very professional. Would definitely book again."
    },
    {
      id: 3,
      name: "Lisa Chen",
      date: "January 12, 2024",
      rating: 5,
      comment: "Incredible talent! My makeup looked flawless for the entire evening."
    }
  ];

  // Mock portfolio images - in a real app, these would come from the database
  const portfolioImages = artistData.portfolio || [
    "https://images.unsplash.com/photo-1560577260-78457c7dc4a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1576239088113-85cdef3b2c58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1566312922674-2e341ea3817f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  ];

  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Artist Header */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="h-48 bg-gradient-to-r from-glamour-pink to-glamour-gold relative" />
            
            <div className="flex flex-col md:flex-row p-6 pt-8">
              <div className="md:w-1/3 flex justify-center md:justify-start">
                <Avatar className="h-32 w-32 border-4 border-white -mt-16 md:-mt-24">
                  <AvatarImage src={artistData.profileImage || "/placeholder.svg"} />
                  <AvatarFallback>{artistData.name?.charAt(0) || "A"}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="md:w-2/3 mt-4 md:mt-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h1 className="font-serif text-3xl text-glamour-dark">{artistData.name}</h1>
                    <p className="text-glamour-dark/60 flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" /> {artistData.location}
                    </p>
                    <div className="flex items-center gap-1 text-glamour-gold mt-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>4.9 (120 reviews)</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <Button variant="outline" className="border-glamour-gold/50 text-glamour-dark">
                      <Heart className="w-4 h-4 mr-2" /> Favorite
                    </Button>
                    <Button 
                      className="bg-gradient-glamour text-white"
                      onClick={handleBookNow}
                    >
                      <Calendar className="w-4 h-4 mr-2" /> Book Now
                    </Button>
                  </div>
                </div>
                
                <p className="text-glamour-dark/80">{artistData.bio}</p>
              </div>
            </div>
          </div>
          
          {/* Professional Info & Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="col-span-1">
              <CardHeader>
                <h2 className="font-serif text-xl text-glamour-dark">Specialization</h2>
              </CardHeader>
              <CardContent>
                <p className="text-glamour-dark/80">{artistData.specialization}</p>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <h2 className="font-serif text-xl text-glamour-dark">Experience</h2>
              </CardHeader>
              <CardContent>
                <p className="text-glamour-dark/80">{artistData.experience} years</p>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <h2 className="font-serif text-xl text-glamour-dark">Hourly Rate</h2>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-serif text-glamour-dark">${artistData.rate}/hr</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Artist Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-glamour-gold" />
                  <div className="text-2xl font-serif text-glamour-dark">4.9</div>
                  <p className="text-sm text-glamour-dark/60">Average Rating</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-glamour-pink" />
                  <div className="text-2xl font-serif text-glamour-dark">150+</div>
                  <p className="text-sm text-glamour-dark/60">Clients Served</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-glamour-purple" />
                  <div className="text-2xl font-serif text-glamour-dark">Quick</div>
                  <p className="text-sm text-glamour-dark/60">Response Time</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Portfolio */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl text-glamour-dark mb-6 flex items-center">
              <Camera className="w-5 h-5 mr-2 text-glamour-gold" /> Portfolio
            </h2>
            
            <Carousel className="w-full">
              <CarouselContent>
                {portfolioImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                          <img 
                            src={image} 
                            alt={`Portfolio image ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          
          {/* Reviews */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl text-glamour-dark mb-6 flex items-center">
              <Star className="w-5 h-5 mr-2 text-glamour-gold" /> Reviews
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-glamour-dark">{review.name}</h3>
                          <p className="text-sm text-glamour-dark/60">{review.date}</p>
                        </div>
                        <div className="flex text-glamour-gold mb-2">
                          {Array(5).fill(0).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? "fill-current" : ""}`} 
                            />
                          ))}
                        </div>
                        <p className="text-glamour-dark/80">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-glamour-gold/50 text-glamour-dark">
                See All Reviews
              </Button>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-glamour-pink to-glamour-gold p-8 rounded-xl text-white text-center mb-12">
            <h2 className="font-serif text-2xl mb-4">Ready to Book {artistData.name}?</h2>
            <p className="mb-6 max-w-xl mx-auto">
              Secure your appointment with {artistData.name} today and transform your look with professional makeup services.
            </p>
            <Button 
              className="bg-white text-glamour-dark hover:bg-white/90"
              size="lg"
              onClick={handleBookNow}
            >
              <Calendar className="w-4 h-4 mr-2" /> Book an Appointment
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistViewProfile;
