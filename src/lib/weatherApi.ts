import axios from "axios";

const API_KEY = "19cd4b4c8e35490d80a205709252203";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
