
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Star, Users } from "lucide-react";

const Statistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-glamour-gold" />
            <div className="text-2xl font-serif text-glamour-dark">4.9</div>
            <p className="text-sm text-glamour-dark/60">Average Rating</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-glamour-pink" />
            <div className="text-2xl font-serif text-glamour-dark">150+</div>
            <p className="text-sm text-glamour-dark/60">Clients Served</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-glamour-purple" />
            <div className="text-2xl font-serif text-glamour-dark">3</div>
            <p className="text-sm text-glamour-dark/60">Years on Platform</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;
