import Navigation from "@/components/Navigation";
import { Calendar, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Booking = () => {
  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-glamour-gold/20">
              <h1 className="font-serif text-3xl text-glamour-dark mb-2">
                Book Your Session
              </h1>
              <p className="text-glamour-dark/60">
                Complete your booking with Sarah Johnson
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block font-serif text-lg mb-2">Select Date</label>
                <div className="grid grid-cols-7 gap-2">
                  {[...Array(7)].map((_, i) => (
                    <button
                      key={i}
                      className="aspect-square rounded-lg border-2 border-glamour-gold/20 hover:border-glamour-gold hover:bg-glamour-gold/10 transition-colors"
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-serif text-lg mb-2">Select Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {["9:00 AM", "10:00 AM", "11:00 AM"].map((time) => (
                    <button
                      key={time}
                      className="py-2 px-4 rounded-lg border-2 border-glamour-gold/20 hover:border-glamour-gold hover:bg-glamour-gold/10 transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-glamour text-white">
                Proceed to Payment
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;