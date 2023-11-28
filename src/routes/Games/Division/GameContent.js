import WrongAnswerPanel from "./WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { DivisionContext } from "../../../contexts/DivisionContext";

const GameContent = () => {
  const { isWrong } = useContext(DivisionContext);

  return isWrong ? <WrongAnswerPanel /> : <QuizPanel />;
};

export default GameContent;
