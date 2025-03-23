import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cities } from "@/lib/cities";
import { cn } from "@/lib/utils";
import { useCityStore } from "@/store/cityStore";
import { Check, Search } from "lucide-react";
import { useState } from "react";

function CitySelector() {
  const [open, setOpen] = useState(false);
  const { selectedCities, addCity, removeCity, clearCities } = useCityStore();

  const handleSelect = (value: string) => {
    selectedCities.includes(value) ? removeCity(value) : addCity(value);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full sm:w-[300px] justify-between"
          >
            Select cities...{" "}
            {selectedCities.length > 0 && `(${selectedCities.length} Selected)`}
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full sm:w-[300px] p-0">
          <Command>
            <div className="flex items-center border-b px-3">
              <CommandInput
                placeholder="Search cities..."
                className="h-9 flex-1"
              />
              {selectedCities.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.preventDefault();
                    clearCities();
                    setOpen(false);
                  }}
                  className="h-8 px-2 text-xs"
                >
                  Clear all
                </Button>
              )}
            </div>
            <CommandList>
              <CommandEmpty>No city found.</CommandEmpty>
              <ScrollArea className="h-[200px]">
                <CommandGroup>
                  {cities.map((city) => (
                    <CommandItem
                      key={city.value}
                      value={city.value}
                      onSelect={() => handleSelect(city.value)}
                    >
                      <div className="flex items-center gap-2 w-full">
                        <Check
                          className={cn(
                            "h-4 w-4",
                            selectedCities.includes(city.value)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        <span>{city.label}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </ScrollArea>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export { CitySelector as default };
