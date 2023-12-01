import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import StartPanel from "./StartPanel";
import GameContent from "./GameContent";
import AdditionProvider from "../../../contexts/AdditionContext";

const PlusGame = () => {
  const { isPlusStart } = useContext(AppContext);

  return (
    <AdditionProvider>
      <div className="game">
        {!isPlusStart && <StartPanel />}
        {isPlusStart && <GameContent />}
      </div>
    </AdditionProvider>
  );
};

export default PlusGame;
