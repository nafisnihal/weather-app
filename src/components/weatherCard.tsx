import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchWeatherData } from "@/lib/weatherApi";
import { useTemperatureStore } from "@/store/useTemperatureStore";
import { Droplets, Wind } from "lucide-react";
import { useEffect, useState } from "react";

interface WeatherData {
  location: { name: string };
  current: {
    temp_c: number;
    temp_f: number;
    condition: { text: string; icon: string };
    humidity: number;
    wind_kph: number;
  };
}

export default function WeatherCard({ city }: { city: string }) {
  const { unit } = useTemperatureStore();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const data = await fetchWeatherData(city);
        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  if (loading) {
    return <WeatherCardSkeleton />;
  }

  if (!weather) {
    return (
      <Card className="w-[280px] overflow-hidden">
        <CardHeader className="pb-2">
          <h2 className="text-lg font-medium">Failed to load {city}</h2>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="w-[300px] overflow-hidden">
      <CardHeader className="pb-2">
        <h2 className="text-lg font-medium">{weather.location.name}</h2>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-3xl font-bold">
              {unit === "Fahrenheit"
                ? weather.current.temp_f
                : weather.current.temp_c}
              °
            </span>
            <span className="ml-2 text-muted-foreground">
              {weather.current.condition.text}
            </span>
          </div>
          <img
            src={weather.current.condition.icon || "/placeholder.svg"}
            alt={weather.current.condition.text}
            className="h-12 w-12"
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-cyan-300" />
            <span className="text-sm">
              {weather.current.humidity}% Humidity
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Wind className="h-4 w-4 text-blue-300" />
            <span className="text-sm">{weather.current.wind_kph} km/h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function WeatherCardSkeleton() {
  return (
    <Card className="w-[300px] overflow-hidden">
      <CardHeader className="pb-2">
        <Skeleton className="h-6 w-24" />
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-4 w-20 ml-2" />
          </div>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
