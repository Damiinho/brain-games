import WrongAnswerPanel from "./WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { AdditionContext } from "../../../contexts/AdditionContext";

const GameContent = () => {
  const { isWrong } = useContext(AdditionContext);

  return isWrong ? <WrongAnswerPanel /> : <QuizPanel />;
};

export default GameContent;
