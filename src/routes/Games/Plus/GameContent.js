import { AppContext } from "../../../contexts/AppContext";
import WrongAnswerPanel from "./WrongAnswerPanel";
import QuizPanel from "./QuizPanel";
import { useContext } from "react";

const GameContent = () => {
  const { plusIsWrong } = useContext(AppContext);

  return plusIsWrong ? <WrongAnswerPanel /> : <QuizPanel />;
};

export default GameContent;
