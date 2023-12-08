import WrongAnswerPanel from "../../../components/WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { FollowTheLeaderContext } from "../../../contexts/FollowTheLeaderContext";

const GameContent = () => {
  const {
    time,
    setCurrentTime,
    currentScore,
    setCurrentScore,
    setIsWrong,
    bestResult,
    newQuestion,
    isWrong,
  } = useContext(FollowTheLeaderContext);

  const { setIsFollowTheLeaderStart } = useContext(AppContext);

  return isWrong ? (
    <WrongAnswerPanel
      time={time}
      setCurrentTime={setCurrentTime}
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      setIsWrong={setIsWrong}
      bestResult={bestResult}
      newQuestion={newQuestion}
      setIsThisQuizStart={setIsFollowTheLeaderStart}
    />
  ) : (
    <QuizPanel />
  );
};

export default GameContent;
