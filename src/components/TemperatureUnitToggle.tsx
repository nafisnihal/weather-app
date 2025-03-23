import { Switch } from "@/components/ui/switch";
import { useTemperatureStore } from "@/store/useTemperatureStore";
import { Label } from "./ui/label";

export default function TemperatureUnitToggle() {
  const { unit, toggleUnit } = useTemperatureStore();

  return (
    <div className="flex items-center space-x-2 rounded-md p-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50">
      <Label htmlFor="airplane-mode">°C</Label>
      <Switch
        checked={unit === "Fahrenheit"}
        onCheckedChange={toggleUnit}
        className="cursor-pointer "
      />
      <Label htmlFor="airplane-mode">°F</Label>
    </div>
  );
}
