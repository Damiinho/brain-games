import { Link, Outlet } from "react-router-dom";
import LogoIMG from "../img/logobrain.png";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
export default function Root() {
  const { setIsPlusStart } = useContext(AppContext);
  return (
    <>
      <header>
        <Link to={`/`} onClick={() => setIsPlusStart(false)}>
          <div className="title">
            BRAIN<span className="title-go">GO</span>
          </div>
        </Link>
        <Link to={`/`}>
          <img className="logo" src={LogoIMG} alt="logo" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
