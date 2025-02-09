
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProfessionalInfoProps {
  specialization: string;
  experience: string;
}

const ProfessionalInfo = ({ specialization, experience }: ProfessionalInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <h2 className="font-serif text-xl text-glamour-dark">Specialization</h2>
        </CardHeader>
        <CardContent>
          <p className="text-glamour-dark/80">{specialization || "Not specified"}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="font-serif text-xl text-glamour-dark">Experience</h2>
        </CardHeader>
        <CardContent>
          <p className="text-glamour-dark/80">{experience || "0"} years</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessionalInfo;
