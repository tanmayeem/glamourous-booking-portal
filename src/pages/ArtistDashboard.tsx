import Navigation from "@/components/Navigation";
import { 
  Award, 
  DollarSign, 
  Users, 
  Calendar, 
  Star, 
  User,
  MessageSquare,
  BookOpen
} from "lucide-react";
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
          <h1 className="font-serif text-4xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
            Welcome back, Emma
          </h1>
          <p className="text-gray-600">
            Your beauty expertise makes a difference
          </p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white">
          <Calendar className="mr-2 h-4 w-4" />
          Update Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-xl text-gray-800 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-purple-600" />
              Today's Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-gray-900">$450</p>
            <p className="text-sm text-gray-600 mt-1">3 bookings completed</p>
          </CardContent>
        </Card>

        <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-xl text-gray-800 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-600" />
              Active Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-gray-900">128</p>
            <p className="text-sm text-gray-600 mt-1">+12 this month</p>
          </CardContent>
        </Card>

        <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-xl text-gray-800 flex items-center gap-2">
              <Star className="w-5 h-5 text-purple-600" />
              Rating
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-gray-900">4.9</p>
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-current text-yellow-400" />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="pb-4">
            <CardTitle className="font-serif text-xl text-gray-800 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              Completion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold text-gray-900">98%</p>
            <p className="text-sm text-gray-600 mt-1">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-gray-800 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-purple-600" />
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
                type: "Makeup",
              },
              {
                title: "Evening Makeup",
                time: "2:00 PM - 3:00 PM",
                client: "Emily Davis",
                status: "Confirmed",
                type: "Makeup",
              },
              {
                title: "Masterclass: Advanced Techniques",
                time: "4:00 PM - 6:00 PM",
                client: "15 attendees",
                status: "Upcoming",
                type: "Masterclass",
              },
            ].map((appointment, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-purple-100 hover:border-purple-200 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{appointment.title}</h3>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                    <p className="text-sm text-gray-700 mt-1 flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {appointment.client}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-gray-800 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-purple-600" />
                Recent Messages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "Sarah Johnson",
                  message: "Looking forward to our session!",
                  time: "2 hours ago",
                },
                {
                  name: "Emily Davis",
                  message: "Thank you for the amazing work!",
                  time: "4 hours ago",
                },
              ].map((message, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border border-purple-100 hover:border-purple-200 transition-colors"
                >
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/40?img=${index}`} />
                    <AvatarFallback>{message.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{message.name}</h3>
                    <p className="text-sm text-gray-600">{message.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-gray-800 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-600" />
                Your Masterclasses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Advanced Makeup Techniques",
                  attendees: 15,
                  date: "Today, 4:00 PM",
                },
                {
                  title: "Bridal Makeup Masterclass",
                  attendees: 20,
                  date: "Tomorrow, 2:00 PM",
                },
              ].map((masterclass, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-purple-100 hover:border-purple-200 transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{masterclass.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {masterclass.attendees} attendees
                  </p>
                  <p className="text-sm text-gray-500">{masterclass.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
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
          <h2 className="font-serif text-3xl text-gray-900">Emma Thompson</h2>
          <p className="text-gray-600">Professional Makeup Artist</p>
          <div className="flex items-center gap-2 mt-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-gray-700">4.9 (98 reviews)</span>
          </div>
        </div>
        <Button className="ml-auto bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white">
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-purple-100 shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-gray-800">
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <p className="text-gray-900">emma.thompson@example.com</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <p className="text-gray-900">+1 (555) 123-4567</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Location</label>
              <p className="text-gray-900">New York, NY</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-100 shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-xl text-gray-800">
              Professional Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Specialization</label>
              <p className="text-gray-900">Bridal Makeup, Editorial, Special Effects</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Experience</label>
              <p className="text-gray-900">5+ years</p>
            </div>
            <div>
              <label className="text-sm text-gray-600">Languages</label>
              <p className="text-gray-900">English, Spanish</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
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
                    <Award className="w-4 h-4" />
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
            <div className="max-w-7xl mx-auto">
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