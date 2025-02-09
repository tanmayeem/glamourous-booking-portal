
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Clock, Users, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "../components/Footer";
import imageCompression from "browser-image-compression";

import { db, storage } from "../../firebaseconfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CreateMasterclass = () => {
  const [date, setDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [coverPhotoPreview, setCoverPhotoPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
    capacity: "",
    requirements: "",
    location: "",
    imageUrl: "",
    coverPhotoUrl: "",
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        setImage(compressedFile);
        setImagePreview(URL.createObjectURL(compressedFile));
      } catch (error) {
        console.error("Error compressing image:", error);
        toast({
          title: "Error!",
          description: "Failed to compress the image. Please try again.",
        });
      }
    }
  };

  const handleCoverPhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920, // Larger width for cover photos
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        setCoverPhoto(compressedFile);
        setCoverPhotoPreview(URL.createObjectURL(compressedFile));
      } catch (error) {
        console.error("Error compressing cover photo:", error);
        toast({
          title: "Error!",
          description: "Failed to compress the cover photo. Please try again.",
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      toast({ title: "Error!", description: "Please select a date for the masterclass." });
      return;
    }

    setLoading(true);

    try {
      let imageUrl = "";
      let coverPhotoUrl = "";

      if (image) {
        const imageRef = ref(storage, `masterclasses/${image.name}`);
        const uploadTask = await uploadBytesResumable(imageRef, image);
        imageUrl = await getDownloadURL(uploadTask.ref);
      }

      if (coverPhoto) {
        const coverPhotoRef = ref(storage, `masterclasses/covers/${coverPhoto.name}`);
        const uploadTask = await uploadBytesResumable(coverPhotoRef, coverPhoto);
        coverPhotoUrl = await getDownloadURL(uploadTask.ref);
      }

      await addDoc(collection(db, "masterclasses"), {
        ...formData,
        price: Number(formData.price),
        duration: Number(formData.duration),
        capacity: Number(formData.capacity),
        imageUrl,
        coverPhotoUrl,
        date: Timestamp.fromDate(date),
        createdAt: Timestamp.now(),
      });

      toast({
        title: "Success!",
        description: "Your masterclass has been created successfully.",
      });

      navigate("/masterclasses");
    } catch (error) {
      console.error("Error creating masterclass:", error);
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="font-serif text-3xl text-glamour-dark mb-2 text-center">
              Create a Masterclass
            </h1>
            <p className="text-glamour-dark/60 text-center mb-8">
              Share your expertise with the community
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Masterclass Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Advanced Bridal Makeup Techniques"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe what participants will learn..."
                  value={formData.description}
                  onChange={handleChange}
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Cover Photo</Label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleCoverPhotoChange}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-glamour-pink file:text-white hover:file:bg-glamour-pink/80"
                      />
                    </div>
                    {coverPhotoPreview && (
                      <div className="relative w-32 h-20 rounded-lg overflow-hidden">
                        <img 
                          src={coverPhotoPreview} 
                          alt="Cover Preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Upload Image</Label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-glamour-pink file:text-white hover:file:bg-glamour-pink/80"
                      />
                    </div>
                    {imagePreview && (
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-20 h-20 rounded-lg object-cover shadow-md"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Duration (hours)
                    </div>
                  </Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    placeholder="e.g., 2"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    placeholder="e.g., 199"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Capacity
                    </div>
                  </Label>
                  <Input
                    id="capacity"
                    name="capacity"
                    type="number"
                    placeholder="e.g., 20"
                    value={formData.capacity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Enter the venue address"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-glamour hover:opacity-90" disabled={loading}>
                {loading ? "Creating..." : "Create Masterclass"}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateMasterclass;
