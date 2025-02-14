
import Navigation from "@/components/Navigation";
import { Calendar, Clock, CreditCard, MapPin, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const currentDate = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(currentDate.getDate() + i);
    return date;
  });

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-glamour-gold/20">
                  <h1 className="font-serif text-3xl text-glamour-dark mb-2">
                    Book Your Session
                  </h1>
                  <p className="text-glamour-dark/60">
                    Select your preferred date and time
                  </p>
                </div>

                <div className="p-6 space-y-8">
                  {/* Date Selection */}
                  <div>
                    <label className="block font-serif text-lg mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-glamour-gold" />
                      Select Date
                    </label>
                    <div className="grid grid-cols-7 gap-2">
                      {dates.map((date, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(i)}
                          className={`
                            aspect-square rounded-lg border-2 hover:border-glamour-gold 
                            hover:bg-glamour-gold/10 transition-colors flex flex-col 
                            items-center justify-center
                            ${selectedDate === i 
                              ? "border-glamour-gold bg-glamour-gold/10" 
                              : "border-glamour-gold/20"
                            }
                          `}
                        >
                          <span className="text-sm text-glamour-dark/60">
                            {format(date, "EEE")}
                          </span>
                          <span className="text-lg font-serif text-glamour-dark">
                            {format(date, "d")}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block font-serif text-lg mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-glamour-gold" />
                      Select Time
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`
                            py-3 px-4 rounded-lg border-2 hover:border-glamour-gold 
                            hover:bg-glamour-gold/10 transition-colors text-center
                            ${selectedTime === time 
                              ? "border-glamour-gold bg-glamour-gold/10" 
                              : "border-glamour-gold/20"
                            }
                          `}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-glamour text-white"
                    disabled={!selectedDate || !selectedTime}
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Proceed to Payment
                  </Button>
                </div>
              </div>
            </div>

            {/* Artist Info Section */}
            <div className="lg:col-span-1">
              <Card className="bg-white p-6">
                <div className="flex items-start gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-serif text-xl text-glamour-dark">
                      Sarah Johnson
                    </h2>
                    <p className="text-glamour-dark/60 flex items-center gap-1 text-sm">
                      <MapPin className="w-4 h-4" /> New York, NY
                    </p>
                    <div className="flex items-center gap-1 text-glamour-gold mt-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">4.9 (120 reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t border-glamour-gold/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-glamour-dark/60" />
                      <span className="text-sm text-glamour-dark/60">Duration</span>
                    </div>
                    <span className="text-sm font-medium">1 hour</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-glamour-dark/60" />
                      <span className="text-sm text-glamour-dark/60">Service</span>
                    </div>
                    <span className="text-sm font-medium">Makeup Session</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-glamour-gold/20 pt-4">
                    <span className="font-serif text-lg text-glamour-dark">Total</span>
                    <span className="font-serif text-xl text-glamour-dark">$120</span>
                  </div>
                </div>
              </Card>

              {/* Cancellation Policy */}
              <Card className="bg-white p-6 mt-4">
                <h3 className="font-serif text-lg text-glamour-dark mb-2">
                  Cancellation Policy
                </h3>
                <p className="text-sm text-glamour-dark/60">
                  Free cancellation up to 24 hours before your appointment. 
                  Cancellations within 24 hours may be subject to a fee.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
