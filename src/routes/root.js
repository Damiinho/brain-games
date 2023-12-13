import { Link, Outlet } from "react-router-dom";
import LogoIMG from "../img/logobrain.png";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
export default function Root() {
  const {
    setIsPlusStart,
    setIsMinusStart,
    setIsDivisionStart,
    setIsHighOrLowStart,
    setIsBirdWatchingStart,
    setIsSwipeMasterStart,
    setIsFollowTheLeaderStart,
    toggleFullscreen,
  } = useContext(AppContext);

  const resetFlag = () => {
    setIsPlusStart(false);
    setIsMinusStart(false);
    setIsDivisionStart(false);
    setIsHighOrLowStart(false);
    setIsBirdWatchingStart(false);
    setIsSwipeMasterStart(false);
    setIsFollowTheLeaderStart(false);
    toggleFullscreen("leave");
  };

  return (
    <>
      <header>
        <Link to={`/`} onClick={() => resetFlag()}>
          <div className="title">
            BRAIN<span className="title-go">GO</span>
          </div>
        </Link>
        <Link to={`/`} onClick={() => resetFlag()}>
          <img className="logo" src={LogoIMG} alt="logo" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
