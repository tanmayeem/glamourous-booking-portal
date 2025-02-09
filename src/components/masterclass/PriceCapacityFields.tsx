
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users } from "lucide-react";

interface PriceCapacityFieldsProps {
  price: string;
  capacity: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceCapacityFields = ({ price, capacity, onChange }: PriceCapacityFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="price">Price ($)</Label>
        <Input
          id="price"
          name="price"
          type="number"
          placeholder="e.g., 199"
          value={price}
          onChange={onChange}
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
          value={capacity}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

export default PriceCapacityFields;
