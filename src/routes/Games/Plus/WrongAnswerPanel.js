import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AdditionContext } from "../../../contexts/AdditionContext";

const WrongAnswerPanel = () => {
  const {
    level,
    time,
    setCurrentTime,
    currentScore,
    setCurrentScore,
    setIsWrong,
    bestScore,
  } = useContext(AdditionContext);
  const { setIsPlusStart, windowWidth } = useContext(AppContext);
  const bestResult = bestScore.find(
    (element) => element.level === level && element.time === time
  );
  return (
    <div className="plus__game">
      {" "}
      <div className="plus__game-buttons">
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setCurrentScore(0);
            setIsWrong(false);
            setCurrentTime(time);
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
          onClick={() => setIsPlusStart(false)}
          style={{
            fontFamily: "Changa, serif",
          }}
        >
          {windowWidth > 320 ? "back" : "back"}
        </Button>
      </div>
      <div className="plus__game-challenge">Wrong answer</div>{" "}
      <div className="plus__game-score">
        Last score: {currentScore}
        <br />
        Best score: {bestResult.best}
      </div>
    </div>
  );
};

export default WrongAnswerPanel;
