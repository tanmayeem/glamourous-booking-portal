
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

interface DateTimeFieldsProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  duration: string;
  onDurationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateTimeFields = ({ date, setDate, duration, onDurationChange }: DateTimeFieldsProps) => {
  return (
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
          value={duration}
          onChange={onDurationChange}
          required
        />
      </div>
    </div>
  );
};

export default DateTimeFields;
