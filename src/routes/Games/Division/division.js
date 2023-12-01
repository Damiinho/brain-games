import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import StartPanel from "./StartPanel";
import GameContent from "./GameContent";
import DivisionProvider from "../../../contexts/DivisionContext";

const DivisionGame = () => {
  const { isDivisionStart } = useContext(AppContext);

  return (
    <DivisionProvider>
      <div className="game">
        {!isDivisionStart && <StartPanel />}
        {isDivisionStart && <GameContent />}
      </div>
    </DivisionProvider>
  );
};

export default DivisionGame;
