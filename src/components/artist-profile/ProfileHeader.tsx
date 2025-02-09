
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MapPin, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProfileHeaderProps {
  name: string;
  location: string;
  bio: string;
  profileImage?: string;
}

const ProfileHeader = ({ name, location, bio, profileImage }: ProfileHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="h-48 bg-gradient-to-r from-glamour-pink to-glamour-gold relative">
        <div className="absolute -bottom-16 left-8">
          <Avatar className="h-32 w-32 border-4 border-white">
            <AvatarImage src={profileImage || "/placeholder.svg"} />
            <AvatarFallback>{name?.charAt(0) || "A"}</AvatarFallback>
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
          {name || "Artist Name"}
        </h1>
        <p className="text-glamour-dark/60 flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4" /> {location || "Location"}
        </p>
        <p className="text-glamour-dark/80">
          {bio || "No bio available"}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
