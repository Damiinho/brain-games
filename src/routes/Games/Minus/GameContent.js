import { SubtractionContext } from "../../../contexts/SubtractionContext";

import WrongAnswerPanel from "../../../components/WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
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
  } = useContext(SubtractionContext);

  const { setIsMinusStart } = useContext(AppContext);

  return isWrong ? (
    <WrongAnswerPanel
      time={time}
      setCurrentTime={setCurrentTime}
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      setIsWrong={setIsWrong}
      bestResult={bestResult}
      newQuestion={newQuestion}
      setIsThisQuizStart={setIsMinusStart}
    />
  ) : (
    <QuizPanel />
  );
};

export default GameContent;
