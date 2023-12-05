import WrongAnswerPanel from "./WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { SwipeMasterContext } from "../../../contexts/SwipeMasterContext";

const GameContent = () => {
  const { isWrong } = useContext(SwipeMasterContext);

  return isWrong ? <WrongAnswerPanel /> : <QuizPanel />;
};

export default GameContent;
