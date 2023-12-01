import WrongAnswerPanel from "./WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";
import { BirdWatchingContext } from "../../../contexts/BirdWatchingContext";

const GameContent = () => {
  const { isWrong } = useContext(BirdWatchingContext);

  return isWrong ? <WrongAnswerPanel /> : <QuizPanel />;
};

export default GameContent;
