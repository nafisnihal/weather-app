import CitySelector from "../citySelector";
import { Instructions } from "../instructions";
import TemperatureUnitToggle from "../TemperatureUnitToggle";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center w-full p-2 rounded-md border ">
      <div className="flex w-full sm:w-fit justify-between items-center gap-2">
        <CitySelector />
        <Instructions />
      </div>
      <div className="flex w-full sm:w-fit justify-between items-center gap-4">
        <TemperatureUnitToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
