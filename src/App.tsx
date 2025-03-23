import Header from "./components/sections/header";
import WeatherDashboard from "./components/sections/weatherDashboard";

function App() {
  return (
    <div className="max-w-7xl w-full mx-auto p-4">
      <Header />
      <WeatherDashboard />
    </div>
  );
}

export default App;
