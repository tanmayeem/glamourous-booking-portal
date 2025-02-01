import Navigation from "@/components/Navigation";
import { Calendar, DollarSign, Users, TrendingUp, Clock, Star, User } from "lucide-react";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";

const ArtistDashboard = () => {
  const [activeSection, setActiveSection] = useState<'dashboard' | 'profile'>('dashboard');

  const renderDashboardContent = () => (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-4xl text-glamour-dark mb-2">
            Welcome, Emma Thompson
          </h1>
          <p className="text-glamour-dark/60">
            Manage your bookings and track your business performance
          </p>
        </div>
        <Button className="bg-gradient-glamour hover:opacity-90">
          Update Availability
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-glamour-gold/20 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-xl text-glamour-dark flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-glamour-pink" />
              Today's Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-glamour-dark">$450</p>
            <p className="text-sm text-glamour-dark/60 mt-1">3 bookings</p>
          </CardContent>
        </Card>

        <Card className="border-glamour-gold/20 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-xl text-glamour-dark flex items-center gap-2">
              <Users className="w-5 h-5 text-glamour-pink" />
              Total Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-glamour-dark">128</p>
            <p className="text-sm text-glamour-dark/60 mt-1">+12 this month</p>
          </CardContent>
        </Card>

        <Card className="border-glamour-gold/20 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-xl text-glamour-dark flex items-center gap-2">
              <Star className="w-5 h-5 text-glamour-pink" />
              Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-glamour-dark">4.9</p>
            <p className="text-sm text-glamour-dark/60 mt-1">98 reviews</p>
          </CardContent>
        </Card>

        <Card className="border-glamour-gold/20 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-xl text-glamour-dark flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-glamour-pink" />
              Completion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-glamour-dark">98%</p>
            <p className="text-sm text-glamour-dark/60 mt-1">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-glamour-gold/20 shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-glamour-dark flex items-center gap-2">
              <Calendar className="w-6 h-6 text-glamour-pink" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                title: "Bridal Makeup",
                time: "10:00 AM - 11:30 AM",
                client: "Sarah Johnson",
                status: "Confirmed",
              },
              {
                title: "Evening Makeup",
                time: "2:00 PM - 3:00 PM",
                client: "Emily Davis",
                status: "Confirmed",
              },
              {
                title: "Editorial Shoot",
                time: "4:00 PM - 6:00 PM",
                client: "Fashion Magazine",
                status: "Pending",
              },
            ].map((appointment, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-glamour-gold/20 hover:border-glamour-gold/40 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-glamour-dark">{appointment.title}</h3>
                    <p className="text-sm text-glamour-dark/60">{appointment.time}</p>
                    <p className="text-sm text-glamour-dark/80 mt-1">
                      Client: {appointment.client}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-glamour-gold/20 shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-glamour-dark flex items-center gap-2">
              <Clock className="w-6 h-6 text-glamour-pink" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                action: "New Booking",
                details: "Sarah Johnson booked a Bridal Makeup session",
                time: "2 hours ago",
              },
              {
                action: "New Review",
                details: "Emily Davis left a 5-star review",
                time: "4 hours ago",
              },
              {
                action: "Payment Received",
                details: "Payment received for Evening Makeup session",
                time: "Yesterday",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg border border-glamour-gold/20 hover:border-glamour-gold/40 transition-colors"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-glamour-pink" />
                <div className="flex-1">
                  <h3 className="font-medium text-glamour-dark">{activity.action}</h3>
                  <p className="text-sm text-glamour-dark/60">{activity.details}</p>
                  <p className="text-xs text-glamour-dark/40 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderProfileContent = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-lg">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" />
          <AvatarFallback>ET</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-serif text-3xl text-glamour-dark">Emma Thompson</h2>
          <p className="text-glamour-dark/60">Professional Makeup Artist</p>
          <div className="flex items-center gap-2 mt-2">
            <Star className="w-5 h-5 text-glamour-gold fill-current" />
            <span className="text-glamour-dark">4.9 (98 reviews)</span>
          </div>
        </div>
        <Button className="ml-auto bg-gradient-glamour hover:opacity-90">
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-glamour-gold/20 shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-glamour-dark">
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-glamour-dark/60">Email</label>
              <p className="text-glamour-dark">emma.thompson@example.com</p>
            </div>
            <div>
              <label className="text-sm text-glamour-dark/60">Phone</label>
              <p className="text-glamour-dark">+1 (555) 123-4567</p>
            </div>
            <div>
              <label className="text-sm text-glamour-dark/60">Location</label>
              <p className="text-glamour-dark">New York, NY</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-glamour-gold/20 shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-glamour-dark">
              Professional Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-glamour-dark/60">Specialization</label>
              <p className="text-glamour-dark">Bridal Makeup, Editorial, Special Effects</p>
            </div>
            <div>
              <label className="text-sm text-glamour-dark/60">Experience</label>
              <p className="text-glamour-dark">5+ years</p>
            </div>
            <div>
              <label className="text-sm text-glamour-dark/60">Languages</label>
              <p className="text-glamour-dark">English, Spanish</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <SidebarProvider defaultOpen>
        <div className="flex">
          <Sidebar>
            <SidebarHeader>
              <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveSection('dashboard')}
                    isActive={activeSection === 'dashboard'}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveSection('profile')}
                    isActive={activeSection === 'profile'}
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
            <div className="max-w-6xl mx-auto">
              {activeSection === 'dashboard' ? renderDashboardContent() : renderProfileContent()}
            </div>
          </main>
        </div>
      </SidebarProvider>

      <Footer />
    </div>
  );
};

export default ArtistDashboard;
