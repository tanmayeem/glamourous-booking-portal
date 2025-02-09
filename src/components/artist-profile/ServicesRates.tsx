
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServicesRatesProps {
  rate: string;
}

const ServicesRates = ({ rate }: ServicesRatesProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <h2 className="font-serif text-2xl text-glamour-dark">Services & Rates</h2>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center p-4 rounded-lg border border-glamour-gold/20">
          <div>
            <h3 className="font-medium text-glamour-dark">Hourly Rate</h3>
            <p className="text-sm text-glamour-dark/60">Base price for services</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-serif text-glamour-dark">
              ${rate || "0"}/hr
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesRates;
