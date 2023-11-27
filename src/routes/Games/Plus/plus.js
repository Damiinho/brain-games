import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import StartPanel from "./StartPanel";
import GameContent from "./GameContent";

const PlusGame = () => {
  const { isPlusStart } = useContext(AppContext);

  return (
    <div className="plus">
      {!isPlusStart && <StartPanel />}
      {isPlusStart && <GameContent />}
    </div>
  );
};

export default PlusGame;
