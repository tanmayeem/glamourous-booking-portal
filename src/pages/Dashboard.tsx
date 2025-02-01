import Navigation from "@/components/Navigation";
import { Calendar, CreditCard, Heart } from "lucide-react";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl text-glamour-dark mb-8">
            Welcome Back, Sarah
          </h1>

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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;