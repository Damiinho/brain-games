import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AdditionContext } from "../../../contexts/AdditionContext";
import { Textfit } from "react-textfit";

const WrongAnswerPanel = () => {
  const {
    level,
    time,
    setCurrentTime,
    currentScore,
    setCurrentScore,
    setIsWrong,
    bestScore,
    newQuestion,
  } = useContext(AdditionContext);
  const { setIsPlusStart, windowWidth } = useContext(AppContext);
  const bestResult = bestScore.find(
    (element) => element.level === level && element.time === time
  );
  return (
    <div className="game__game">
      {" "}
      <div className="game__game-buttons">
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={() => {
            setCurrentScore(0);
            setIsWrong(false);
            setCurrentTime(time);
            newQuestion();
          }}
          style={{
            fontFamily: "Changa, serif",
          }}
        >
          {windowWidth > 320 ? "restart" : "restart"}
        </Button>
        <Button
          variant="contained"
          color="info"
          size="large"
          onClick={() => setIsPlusStart(false)}
          style={{
            fontFamily: "Changa, serif",
          }}
        >
          {windowWidth > 320 ? "back" : "back"}
        </Button>
      </div>
      <div className="game__game-challenge">
        <Textfit mode="single">Wrong answer</Textfit>
      </div>
      <div className="game__game-score">
        Last score: {currentScore}
        <br />
        Best score: {bestResult.best}
      </div>
    </div>
  );
};

export default WrongAnswerPanel;
