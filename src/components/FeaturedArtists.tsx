import { Star, Heart } from "lucide-react";

const FeaturedArtists = () => {
  const artists = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Bridal & Editorial",
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: 2,
      name: "Emma Davis",
      specialty: "Celebrity & Fashion",
      rating: 4.8,
      reviews: 96,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      id: 3,
      name: "Maria Garcia",
      specialty: "Special Effects & Beauty",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl text-glamour-dark text-center mb-4">
          Featured Artists
        </h2>
        <p className="font-sans text-glamour-dark/60 text-center mb-12">
          Discover our hand-picked selection of elite makeup artists
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-glamour-pink hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl text-glamour-dark mb-2">
                  {artist.name}
                </h3>
                <p className="font-sans text-sm text-glamour-dark/60 mb-4">
                  {artist.specialty}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-glamour-gold text-glamour-gold" />
                    <span className="font-sans text-sm">
                      {artist.rating} ({artist.reviews} reviews)
                    </span>
                  </div>
                  <button className="font-sans text-sm text-glamour-pink hover:text-glamour-dark transition-colors">
                    View Profile →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;