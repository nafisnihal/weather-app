import { create } from "zustand";

type TemperatureUnit = "Celsius" | "Fahrenheit";

interface TemperatureStore {
  unit: TemperatureUnit;
  toggleUnit: () => void;
}

export const useTemperatureStore = create<TemperatureStore>((set) => ({
  unit: "Celsius",
  toggleUnit: () =>
    set((state) => ({
      unit: state.unit === "Celsius" ? "Fahrenheit" : "Celsius",
    })),
}));
