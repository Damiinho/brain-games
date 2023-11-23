import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

const Header = () => {
  const { windowWidth } = useContext(AppContext);

  return <header>brain games, szerokość okna: {windowWidth}</header>;
};

export default Header;
