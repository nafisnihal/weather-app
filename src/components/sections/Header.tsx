import CitySelectors from "../CitySelectors";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full p-2 rounded-md border ">
      <CitySelectors />
      <ThemeToggle />
    </div>
  );
};

export default Header;
