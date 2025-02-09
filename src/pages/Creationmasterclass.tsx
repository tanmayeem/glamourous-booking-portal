
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "../components/Footer";
import ImageUploadField from "@/components/masterclass/ImageUploadField";
import DateTimeFields from "@/components/masterclass/DateTimeFields";
import PriceCapacityFields from "@/components/masterclass/PriceCapacityFields";

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

  const handleImageChange = (file: File) => {
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleCoverPhotoChange = (file: File) => {
    setCoverPhoto(file);
    setCoverPhotoPreview(URL.createObjectURL(file));
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
                <ImageUploadField
                  label="Cover Photo"
                  onChange={handleCoverPhotoChange}
                  previewUrl={coverPhotoPreview}
                />

                <ImageUploadField
                  label="Upload Image"
                  onChange={handleImageChange}
                  previewUrl={imagePreview}
                />
              </div>

              <DateTimeFields
                date={date}
                setDate={setDate}
                duration={formData.duration}
                onDurationChange={handleChange}
              />

              <PriceCapacityFields
                price={formData.price}
                capacity={formData.capacity}
                onChange={handleChange}
              />

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
