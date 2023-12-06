import WrongAnswerPanel from "../../../components/WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { AdditionContext } from "../../../contexts/AdditionContext";
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
    isQuickTest,
    setIsQuickTest,
    isWrong,
  } = useContext(AdditionContext);

  const { setIsPlusStart } = useContext(AppContext);

  return isWrong ? (
    <WrongAnswerPanel
      time={time}
      setCurrentTime={setCurrentTime}
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      setIsWrong={setIsWrong}
      bestResult={bestResult}
      newQuestion={newQuestion}
      isQuickTest={isQuickTest}
      setIsQuickTest={setIsQuickTest}
      setIsThisQuizStart={setIsPlusStart}
    />
  ) : (
    <QuizPanel />
  );
};

export default GameContent;
