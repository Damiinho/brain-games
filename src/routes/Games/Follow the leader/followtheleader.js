import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import StartPanel from "./StartPanel";
import GameContent from "./GameContent";
import FollowTheLeaderProvider from "../../../contexts/FollowTheLeaderContext";

const BirdWatchingGame = () => {
  const { isFollowTheLeaderStart } = useContext(AppContext);

  return (
    <FollowTheLeaderProvider>
      <div className="game">
        {!isFollowTheLeaderStart && <StartPanel />}
        {isFollowTheLeaderStart && <GameContent />}
      </div>
    </FollowTheLeaderProvider>
  );
};

export default BirdWatchingGame;
