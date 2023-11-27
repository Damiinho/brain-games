import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import StartPanel from "./StartPanel";
import GameContent from "./GameContent";
import SubtractionProvider from "../../../contexts/SubtractionContext";

const MinusGame = () => {
  const { isMinusStart } = useContext(AppContext);

  return (
    <SubtractionProvider>
      <div className="plus">
        {!isMinusStart && <StartPanel />}
        {isMinusStart && <GameContent />}
      </div>
    </SubtractionProvider>
  );
};

export default MinusGame;
