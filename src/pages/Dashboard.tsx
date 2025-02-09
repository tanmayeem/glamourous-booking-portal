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
<<<<<<< HEAD
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
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
>>>>>>> 7ca52fbe97e9890c18fe97c6c319942a7da0edea

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

<<<<<<< HEAD
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
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-glamour-gold/20 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-glamour-dark flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-glamour-pink" />
                  Upcoming Bookings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Bridal Makeup Session",
                    date: "June 15, 2024 - 10:00 AM",
                    artist: "Emma Thompson",
                  },
                  {
                    title: "Editorial Photoshoot",
                    date: "June 20, 2024 - 2:00 PM",
                    artist: "Sophie Chen",
                  },
                ].map((booking, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-glamour-gold/20 hover:border-glamour-gold/40 transition-colors"
                  >
                    <h3 className="font-medium text-glamour-dark">{booking.title}</h3>
                    <p className="text-sm text-glamour-dark/60">{booking.date}</p>
                    <p className="text-sm text-glamour-dark/80 mt-1">with {booking.artist}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-glamour-gold/20 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-glamour-dark flex items-center gap-2">
                  <Heart className="w-6 h-6 text-glamour-pink" />
                  Saved Artists
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Sarah Johnson",
                    specialty: "Bridal & Editorial",
                    rating: "4.9",
                  },
                  {
                    name: "Maria Garcia",
                    specialty: "Fashion & Beauty",
                    rating: "4.8",
                  },
                ].map((artist, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg border border-glamour-gold/20 hover:border-glamour-gold/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-glamour animate-shimmer" />
                    <div className="flex-1">
                      <h3 className="font-medium text-glamour-dark">{artist.name}</h3>
                      <p className="text-sm text-glamour-dark/60">{artist.specialty}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-glamour-gold/20 hover:border-glamour-gold/40"
                    >
                      Book
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="border-glamour-gold/20 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-glamour-dark flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-glamour-pink" />
                Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Bridal Makeup Session",
                  date: "June 1, 2024",
                  amount: "$150.00",
                },
                {
                  title: "Masterclass: Advanced Bridal",
                  date: "May 28, 2024",
                  amount: "$75.00",
                },
                {
                  title: "Evening Makeup Session",
                  date: "May 25, 2024",
                  amount: "$120.00",
                },
              ].map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border border-glamour-gold/20 hover:border-glamour-gold/40 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-10 h-10 text-glamour-pink" />
                    <div>
                      <h3 className="font-medium text-glamour-dark">{transaction.title}</h3>
                      <p className="text-sm text-glamour-dark/60">{transaction.date}</p>
                    </div>
                  </div>
                  <span className="font-medium text-glamour-dark">{transaction.amount}</span>
                </div>
              ))}
            </CardContent>
          </Card>
>>>>>>> 7ca52fbe97e9890c18fe97c6c319942a7da0edea
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistDashboard;