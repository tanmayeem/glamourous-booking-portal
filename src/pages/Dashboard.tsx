import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Award,
  DollarSign,
  Users,
  Calendar,
  Star,
  User,
  PlusCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/Authcontext";
import { db } from "../../firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

const ArtistDashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [artistData, setArtistData] = useState(null);
  const [availability, setAvailability] = useState(true);

  // 🔥 Fetch Artist Data
  useEffect(() => {
    if (currentUser) {
      const fetchArtistData = async () => {
        try {
          const artistRef = doc(db, "artists", currentUser.uid);
          const artistSnap = await getDoc(artistRef);

          if (artistSnap.exists()) {
            const artistInfo = artistSnap.data();
            setArtistData(artistInfo);
            setAvailability(artistInfo.isAvailable ?? true); 
          }
        } catch (error) {
          console.error("Error fetching artist data:", error);
        }
      };

      fetchArtistData();
    }
  }, [currentUser]);

  const handleToggleAvailability = async () => {
    if (!currentUser) return;

    try {
      const artistRef = doc(db, "artists", currentUser.uid);
      await updateDoc(artistRef, { isAvailable: !availability });
      setAvailability(!availability);

      toast({
        title: "Availability Updated",
        description: `You are now ${!availability ? "Available" : "Unavailable"}.`,
      });
    } catch (error) {
      console.error("Error updating availability:", error);
    }
  };

  if (!artistData) {
    return <div className="h-screen flex items-center justify-center text-lg">Loading Dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <Button onClick={() => navigate("/create-masterclass")} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
              <PlusCircle className="mr-2 h-5 w-5" />
              Create Masterclass
            </Button>
            <Button onClick={() => navigate("/artist-profile/:artistId")} className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg">
              <User className="mr-2 h-5 w-5" />
              View Profile
            </Button>
            <Button onClick={handleToggleAvailability} className={`w-full ${availability ? "bg-green-600" : "bg-red-600"} text-white shadow-lg`}>
              {availability ? <CheckCircle className="mr-2 h-5 w-5" /> : <XCircle className="mr-2 h-5 w-5" />}
              {availability ? "Available" : "Unavailable"}
            </Button>
          </div>

          {/* Welcome Section */}
          <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-purple-100 shadow-xl mb-8">
            <h1 className="font-serif text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Welcome back, {artistData.name}
            </h1>
            <p className="text-gray-600 font-light">Your artistry makes a difference</p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "Today's Revenue", value: "$450", subtext: "3 bookings completed", color: "bg-purple-500" },
              { icon: Users, title: "Active Clients", value: "128", subtext: "+12 this month", color: "bg-pink-500" },
              { icon: Star, title: "Rating", value: "4.9", subtext: "98 reviews", color: "bg-purple-400" },
              { icon: Award, title: "Completion Rate", value: "98%", subtext: "Last 30 days", color: "bg-pink-400" },
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl text-white ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-700">{stat.title}</h3>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Profile Section */}
          <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-purple-100 shadow-xl mt-8">
            <h2 className="font-serif text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              {artistData.name}'s Profile
            </h2>
            <p className="text-gray-600 mt-2">{artistData.specialization || "Makeup Artist"}</p>
            <p className="text-gray-600 mt-2">📍 {artistData.location || "Not provided"}</p>
            <p className="text-gray-600 mt-2">📞 {artistData.contact || "Not provided"}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistDashboard;