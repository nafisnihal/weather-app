"use client";

import { Check, Search } from "lucide-react";
import { useCallback, useState } from "react";

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
import { cn } from "@/lib/utils";

const cities = [
  { value: "new-york", label: "New York" },
  { value: "london", label: "London" },
  { value: "tokyo", label: "Tokyo" },
  { value: "paris", label: "Paris" },
  { value: "singapore", label: "Singapore" },
  { value: "sydney", label: "Sydney" },
  { value: "dubai", label: "Dubai" },
  { value: "berlin", label: "Berlin" },
  { value: "rome", label: "Rome" },
  { value: "barcelona", label: "Barcelona" },
  { value: "amsterdam", label: "Amsterdam" },
  { value: "hong-kong", label: "Hong Kong" },
  { value: "istanbul", label: "Istanbul" },
  { value: "seoul", label: "Seoul" },
  { value: "mumbai", label: "Mumbai" },
  { value: "rio-de-janeiro", label: "Rio de Janeiro" },
  { value: "toronto", label: "Toronto" },
  { value: "moscow", label: "Moscow" },
];

export default function CitySelectors() {
  const [open, setOpen] = useState(false);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  console.log("🚀 ~ CitySelectors ~ selectedCities:", selectedCities);

  const handleSelect = useCallback((value: string) => {
    setSelectedCities((current) => {
      // If already selected, remove it
      if (current.includes(value)) {
        return current.filter((item) => item !== value);
      }
      // Otherwise add it
      return [...current, value];
    });
  }, []);

  const clearAll = useCallback(() => {
    setSelectedCities([]);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between"
          >
            {selectedCities.length > 0 ? (
              <div className="flex items-center gap-1 overflow-hidden">
                <span className="text-sm">
                  {selectedCities.length}{" "}
                  {selectedCities.length === 1 ? "city" : "cities"} selected
                </span>
              </div>
            ) : (
              "Select cities..."
            )}
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
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
                    clearAll();
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
                      onSelect={handleSelect}
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
