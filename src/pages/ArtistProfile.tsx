import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, Save } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

import { db, storage } from "../../firebaseconfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuth } from "../context/Authcontext";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }),
  location: z.string().min(2, { message: "Location must be at least 2 characters." }),
  specialization: z.string().min(2, { message: "Specialization must be at least 2 characters." }),
  experience: z.string().min(1, { message: "Experience is required." }),
  rate: z.string().min(1, { message: "Rate is required." }),
});

const ArtistProfileEdit = () => {
  const { currentUser } = useAuth();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      specialization: "",
      experience: "",
      rate: "",
    },
  });

  // 🔥 Fetch artist data from Firestore
  useEffect(() => {
    if (currentUser) {
      const fetchArtistData = async () => {
        try {
          const artistRef = doc(db, "artists", currentUser.uid);
          const artistSnap = await getDoc(artistRef);

          if (artistSnap.exists()) {
            const artistData = artistSnap.data();
            form.reset({
              name: artistData.name || "",
              bio: artistData.bio || "",
              location: artistData.location || "",
              specialization: artistData.specialization || "",
              experience: artistData.experience || "",
              rate: artistData.rate || "",
            });

            if (artistData.profileImage) {
              setImagePreview(artistData.profileImage);
            }
          }
        } catch (error) {
          console.error("Error fetching artist data:", error);
        }
      };

      fetchArtistData();
    }
  }, [currentUser, form]);

  // 🔥 Handle Image Upload & Preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview image before upload
    }
  };

  // 🔥 Upload Image to Firebase Storage
  const uploadImage = async () => {
    if (!image) {
      toast({ title: "Error!", description: "Please select an image to upload." });
      return "";
    }

    setLoading(true);
    try {
      const imageRef = ref(storage, `artists/${currentUser.uid}/profile.jpg`);
      const uploadTask = await uploadBytesResumable(imageRef, image);
      const url = await getDownloadURL(uploadTask.ref);
      return url;
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({ title: "Error!", description: "Image upload failed. Please try again." });
      return "";
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Handle Form Submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!currentUser) return;

    setLoading(true);
    try {
      let profileImageUrl = imagePreview; // Use existing image URL
      if (image) {
        profileImageUrl = await uploadImage();
      }

      const artistRef = doc(db, "artists", currentUser.uid);
      await updateDoc(artistRef, {
        ...values,
        profileImage: profileImageUrl,
      });

      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({ title: "Error!", description: "Profile update failed. Try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Profile Image Upload */}
            <div className="mb-8 text-center">
              <div className="relative inline-block">
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                  {imagePreview ? (
                    <AvatarImage src={imagePreview} />
                  ) : (
                    <AvatarFallback>SA</AvatarFallback>
                  )}
                </Avatar>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="profileImageUpload"
                  onChange={handleImageChange}
                />
                <label htmlFor="profileImageUpload">
                  <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-gradient-glamour hover:opacity-90">
                    <Camera className="h-4 w-4" />
                  </Button>
                </label>
              </div>
            </div>

            {/* Profile Form */}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input {...field} className="border-glamour-gold/20" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="bio" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl><Textarea {...field} className="border-glamour-gold/20" /></FormControl>
                    <FormDescription>Tell clients about yourself and your expertise</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" className="w-full bg-gradient-glamour hover:opacity-90" disabled={loading}>
                  {loading ? "Saving..." : <><Save className="w-4 h-4 mr-2" /> Save Changes</>}
                </Button>
              </form>
            </Form>
          </div>

          {/* Services */}
          <Card className="mb-8">
            <CardHeader>
              <h2 className="font-serif text-2xl text-glamour-dark">Services</h2>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  { name: "Bridal Makeup", price: "$300", duration: "2 hours" },
                  { name: "Editorial Makeup", price: "$200", duration: "1.5 hours" },
                  { name: "Special Event", price: "$150", duration: "1 hour" },
                ].map((service) => (
                  <div
                    key={service.name}
                    className="flex justify-between items-center p-4 rounded-lg border border-glamour-gold/20 hover:border-glamour-gold/40 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-glamour-dark">{service.name}</h3>
                      <p className="text-sm text-glamour-dark/60">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-xl text-glamour-dark">
                        {service.price}
                      </div>
                      <Button variant="outline" size="sm">Book Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistProfileEdit;