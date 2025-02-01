import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SearchArtists from "./pages/SearchArtists";
import ArtistProfile from "./pages/ArtistProfile";
import Booking from "./pages/Booking";
import Masterclasses from "./pages/Masterclasses";
import Dashboard from "./pages/Dashboard";
import CustomerSignup from "./pages/CustomerSignup";
import ArtistSignup from "./pages/ArtistSignup";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchArtists />} />
          <Route path="/artist/:id" element={<ArtistProfile />} />
          <Route path="/booking/:artistId" element={<Booking />} />
          <Route path="/masterclasses" element={<Masterclasses />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup/customer" element={<CustomerSignup />} />
          <Route path="/signup/artist" element={<ArtistSignup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;