import { create } from "zustand";

interface CityState {
  selectedCities: string[];
  addCity: (city: string) => void;
  removeCity: (city: string) => void;
  clearCities: () => void;
}

export const useCityStore = create<CityState>((set) => ({
  selectedCities: JSON.parse(localStorage.getItem("selectedCities") || "[]"),

  addCity: (city) =>
    set((state) => {
      const updatedCities = [...state.selectedCities, city];
      localStorage.setItem("selectedCities", JSON.stringify(updatedCities));
      return { selectedCities: updatedCities };
    }),

  removeCity: (city) =>
    set((state) => {
      const updatedCities = state.selectedCities.filter((c) => c !== city);
      localStorage.setItem("selectedCities", JSON.stringify(updatedCities));
      return { selectedCities: updatedCities };
    }),

  clearCities: () => {
    localStorage.setItem("selectedCities", JSON.stringify([]));
    set({ selectedCities: [] });
  },
}));