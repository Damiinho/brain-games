import { SubtractionContext } from "../../../contexts/SubtractionContext";
import WrongAnswerPanel from "./WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";

const GameContent = () => {
  const { isWrong } = useContext(SubtractionContext);

  return isWrong ? <WrongAnswerPanel /> : <QuizPanel />;
};

export default GameContent;
