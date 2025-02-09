
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/Authcontext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import ProfileHeader from "@/components/artist-profile/ProfileHeader";
import ProfessionalInfo from "@/components/artist-profile/ProfessionalInfo";
import ServicesRates from "@/components/artist-profile/ServicesRates";
import Statistics from "@/components/artist-profile/Statistics";

interface ArtistData {
  name: string;
  bio: string;
  location: string;
  specialization: string;
  experience: string;
  rate: string;
  profileImage?: string;
}

const ArtistProfile = () => {
  const { currentUser } = useAuth();
  const [artistData, setArtistData] = useState<ArtistData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtistData = async () => {
      if (!currentUser?.uid) return;
      
      try {
        const artistRef = doc(db, "artists", currentUser.uid);
        const artistSnap = await getDoc(artistRef);
        
        if (artistSnap.exists()) {
          setArtistData(artistSnap.data() as ArtistData);
        }
      } catch (error) {
        console.error("Error fetching artist data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistData();
  }, [currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader 
            name={artistData?.name || ""}
            location={artistData?.location || ""}
            bio={artistData?.bio || ""}
            profileImage={artistData?.profileImage}
          />
          
          <ProfessionalInfo 
            specialization={artistData?.specialization || ""}
            experience={artistData?.experience || ""}
          />
          
          <ServicesRates rate={artistData?.rate || ""} />
          
          <Statistics />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistProfile;
