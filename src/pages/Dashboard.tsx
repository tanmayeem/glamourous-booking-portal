import Navigation from "@/components/Navigation";
import { Calendar, CreditCard, Heart } from "lucide-react";
import Footer from "@/components/Footer";

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
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="font-serif text-2xl text-glamour-dark mb-4">
                Upcoming Bookings
              </h2>
              <div className="space-y-4">
                {[1, 2].map((booking) => (
                  <div
                    key={booking}
                    className="flex items-center gap-4 p-4 rounded-lg border border-glamour-gold/20"
                  >
                    <Calendar className="w-10 h-10 text-glamour-pink" />
                    <div>
                      <h3 className="font-medium">Bridal Makeup Session</h3>
                      <p className="text-sm text-glamour-dark/60">
                        June 15, 2024 - 10:00 AM
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="font-serif text-2xl text-glamour-dark mb-4">
                Saved Artists
              </h2>
              <div className="space-y-4">
                {[1, 2].map((artist) => (
                  <div
                    key={artist}
                    className="flex items-center gap-4 p-4 rounded-lg border border-glamour-gold/20"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-glamour" />
                    <div>
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <p className="text-sm text-glamour-dark/60">
                        Bridal & Editorial
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="font-serif text-2xl text-glamour-dark mb-4">
              Recent Transactions
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((transaction) => (
                <div
                  key={transaction}
                  className="flex items-center justify-between p-4 rounded-lg border border-glamour-gold/20"
                >
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-10 h-10 text-glamour-pink" />
                    <div>
                      <h3 className="font-medium">Bridal Makeup Session</h3>
                      <p className="text-sm text-glamour-dark/60">
                        June 1, 2024
                      </p>
                    </div>
                  </div>
                  <span className="font-medium">$150.00</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;