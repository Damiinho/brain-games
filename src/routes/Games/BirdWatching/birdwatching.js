import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import BirdWatchingProvider from "../../../contexts/BirdWatchingContext";
import StartPanel from "./StartPanel";
import GameContent from "./GameContent";

const BirdWatchingGame = () => {
  const { isBirdWatchingStart } = useContext(AppContext);

  return (
    <BirdWatchingProvider>
      <div className="plus">
        {!isBirdWatchingStart && <StartPanel />}
        {isBirdWatchingStart && <GameContent />}
      </div>
    </BirdWatchingProvider>
  );
};

export default BirdWatchingGame;
