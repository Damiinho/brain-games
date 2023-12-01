import WrongAnswerPanel from "./WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { HighOrLowContext } from "../../../contexts/HighOrLowContext";

const GameContent = () => {
  const { isWrong } = useContext(HighOrLowContext);

  return isWrong ? <WrongAnswerPanel /> : <QuizPanel />;
};

export default GameContent;
