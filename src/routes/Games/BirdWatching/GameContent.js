import WrongAnswerPanel from "../../../components/WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { BirdWatchingContext } from "../../../contexts/BirdWatchingContext";
import { AppContext } from "../../../contexts/AppContext";

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
  } = useContext(BirdWatchingContext);

  const { setIsBirdWatchingStart } = useContext(AppContext);

  return isWrong ? (
    <WrongAnswerPanel
      time={time}
      setCurrentTime={setCurrentTime}
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      setIsWrong={setIsWrong}
      bestResult={bestResult}
      newQuestion={newQuestion}
      setIsThisQuizStart={setIsBirdWatchingStart}
    />
  ) : (
    <QuizPanel />
  );
};

export default GameContent;
