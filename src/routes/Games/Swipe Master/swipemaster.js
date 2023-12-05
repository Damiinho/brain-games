import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import SwipeMasterProvider from "../../../contexts/SwipeMasterContext";
import StartPanel from "./StartPanel";
import GameContent from "./GameContent";

const SwipeMasterGame = () => {
  const { isSwipeMasterStart } = useContext(AppContext);

  return (
    <SwipeMasterProvider>
      <div className="game">
        {!isSwipeMasterStart && <StartPanel />}
        {isSwipeMasterStart && <GameContent />}
      </div>
    </SwipeMasterProvider>
  );
};

export default SwipeMasterGame;
