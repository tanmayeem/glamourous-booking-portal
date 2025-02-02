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
import { useToast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, Save } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  specialization: z.string().min(2, {
    message: "Specialization must be at least 2 characters.",
  }),
  experience: z.string().min(1, {
    message: "Experience is required.",
  }),
  rate: z.string().min(1, {
    message: "Rate is required.",
  }),
});

const ArtistProfileEdit = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Sarah Anderson",
      bio: "Professional makeup artist with 5+ years of experience",
      location: "New York, NY",
      specialization: "Bridal, Editorial",
      experience: "5",
      rate: "150",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
    console.log(values);
  }

  return (
    <div className="min-h-screen bg-glamour-light">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8 text-center">
              <div className="relative inline-block">
                <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <Button 
                  size="icon" 
                  className="absolute bottom-0 right-0 rounded-full bg-gradient-glamour hover:opacity-90"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-glamour-gold/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="border-glamour-gold/20" />
                      </FormControl>
                      <FormDescription>
                        Tell clients about yourself and your expertise
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-glamour-gold/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="specialization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specialization</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-glamour-gold/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Experience</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" className="border-glamour-gold/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hourly Rate ($)</FormLabel>
                        <FormControl>
                          <Input {...field} type="number" className="border-glamour-gold/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-glamour hover:opacity-90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistProfileEdit;