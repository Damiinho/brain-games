import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import HighOrLowProvider from "../../../contexts/HighOrLowContext";
import StartPanel from "./StartPanel";
import GameContent from "./GameContent";

const HighOrLowGame = () => {
  const { isHighOrLowStart } = useContext(AppContext);

  return (
    <HighOrLowProvider>
      <div className="plus">
        {!isHighOrLowStart && <StartPanel />}
        {isHighOrLowStart && <GameContent />}
      </div>
    </HighOrLowProvider>
  );
};

export default HighOrLowGame;
