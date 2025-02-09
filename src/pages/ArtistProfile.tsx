
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Settings, Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/Authcontext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";

interface ArtistData {
  name: string;
  bio: string;
  location: string;
  specialization: string;
  experience: string;
  rate: string;
  profileImage?: string;
}

const ArtistProfile = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [artistData, setArtistData] = useState<ArtistData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtistData = async () => {
      if (!currentUser?.uid) return;
      
      try {
        const artistRef = doc(db, "artists", currentUser.uid);
        const artistSnap = await getDoc(artistRef);
        
        if (artistSnap.exists()) {
          setArtistData(artistSnap.data() as ArtistData);
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistData();
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
                  <AvatarImage src={artistData?.profileImage || "/placeholder.svg"} />
                  <AvatarFallback>{artistData?.name?.charAt(0) || "A"}</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute top-4 right-4">
                <Button 
                  variant="outline" 
                  className="bg-white/80 backdrop-blur-sm"
                  onClick={() => navigate("/artist-profile/edit")}
                >
                  <Settings className="w-4 h-4 mr-2" /> Edit Profile
                </Button>
              </div>
            </div>
            
            <div className="pt-20 p-8">
              <h1 className="font-serif text-3xl text-glamour-dark mb-2">
                {artistData?.name || "Artist Name"}
              </h1>
              <p className="text-glamour-dark/60 flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4" /> {artistData?.location || "Location"}
              </p>
              <p className="text-glamour-dark/80">
                {artistData?.bio || "No bio available"}
              </p>
            </div>
          </div>

          {/* Professional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <h2 className="font-serif text-xl text-glamour-dark">Specialization</h2>
              </CardHeader>
              <CardContent>
                <p className="text-glamour-dark/80">{artistData?.specialization || "Not specified"}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="font-serif text-xl text-glamour-dark">Experience</h2>
              </CardHeader>
              <CardContent>
                <p className="text-glamour-dark/80">{artistData?.experience || "0"} years</p>
              </CardContent>
            </Card>
          </div>

          {/* Services and Rates */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="font-serif text-2xl text-glamour-dark">Services & Rates</h2>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center p-4 rounded-lg border border-glamour-gold/20">
                <div>
                  <h3 className="font-medium text-glamour-dark">Hourly Rate</h3>
                  <p className="text-sm text-glamour-dark/60">Base price for services</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-serif text-glamour-dark">
                    ${artistData?.rate || "0"}/hr
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-glamour-purple" />
                  <div className="text-2xl font-serif text-glamour-dark">3</div>
                  <p className="text-sm text-glamour-dark/60">Years on Platform</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistProfile;
