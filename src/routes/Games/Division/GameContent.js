import WrongAnswerPanel from "../../../components/WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { DivisionContext } from "../../../contexts/DivisionContext";
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
  } = useContext(DivisionContext);

  const { setIsDivisionStart } = useContext(AppContext);

  return isWrong ? (
    <WrongAnswerPanel
      time={time}
      setCurrentTime={setCurrentTime}
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      setIsWrong={setIsWrong}
      bestResult={bestResult}
      newQuestion={newQuestion}
      setIsThisQuizStart={setIsDivisionStart}
    />
  ) : (
    <QuizPanel />
  );
};

export default GameContent;
