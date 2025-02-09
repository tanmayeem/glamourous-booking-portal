
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import imageCompression from "browser-image-compression";
import { useToast } from "@/hooks/use-toast";

interface ImageUploadFieldProps {
  label: string;
  onChange: (file: File) => void;
  previewUrl: string | null;
  className?: string;
}

const ImageUploadField = ({ label, onChange, previewUrl, className }: ImageUploadFieldProps) => {
  const { toast } = useToast();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: label.toLowerCase().includes("cover") ? 1920 : 1024,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        onChange(compressedFile);
      } catch (error) {
        console.error(`Error compressing ${label.toLowerCase()}:`, error);
        toast({
          title: "Error!",
          description: `Failed to compress the ${label.toLowerCase()}. Please try again.`,
        });
      }
    }
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            className={`file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-glamour-pink file:text-white hover:file:bg-glamour-pink/80 ${className}`}
          />
        </div>
        {previewUrl && (
          <div className={`relative ${label.toLowerCase().includes("cover") ? "w-32 h-20" : "w-20 h-20"} rounded-lg overflow-hidden`}>
            <img 
              src={previewUrl} 
              alt={`${label} Preview`} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploadField;
