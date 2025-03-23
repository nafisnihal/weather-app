import { useCityStore } from "@/store/cityStore";
import WeatherCard from "../weatherCard";

export default function WeatherDashboard() {
  const { selectedCities } = useCityStore(); // Get selected cities from Zustand

  return (
    <>
      {selectedCities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-fit mx-auto mt-4">
          {selectedCities.map((city) => (
            <WeatherCard key={city} city={city} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4 text-center">
          No cities selected. Please choose some cities.
        </p>
      )}
    </>
  );
}
