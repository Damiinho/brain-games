import WrongAnswerPanel from "../../../components/WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { HighOrLowContext } from "../../../contexts/HighOrLowContext";
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
  } = useContext(HighOrLowContext);
  const { setIsHighOrLowStart } = useContext(AppContext);

  return isWrong ? (
    <WrongAnswerPanel
      time={time}
      setCurrentTime={setCurrentTime}
      currentScore={currentScore}
      setCurrentScore={setCurrentScore}
      setIsWrong={setIsWrong}
      bestResult={bestResult}
      newQuestion={newQuestion}
      setIsThisQuizStart={setIsHighOrLowStart}
      id={"highorlow"}
    />
  ) : (
    <QuizPanel />
  );
};

export default GameContent;
