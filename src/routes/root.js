import { Outlet } from "react-router-dom";
import LogoIMG from "../img/logobrain.png";
export default function Root() {
  return (
    <>
      <header>
        <div className="title">
          BRAIN<span className="title-go">GO</span>
        </div>
        <img className="logo" src={LogoIMG} alt="logo" />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
