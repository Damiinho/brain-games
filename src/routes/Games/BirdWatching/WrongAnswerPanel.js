import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { BirdWatchingContext } from "../../../contexts/BirdWatchingContext";
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
  } = useContext(BirdWatchingContext);
  const { setIsBirdWatchingStart, windowWidth } = useContext(AppContext);
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
          onClick={() => setIsBirdWatchingStart(false)}
          style={{
            fontFamily: "Changa, serif",
          }}
        >
          {windowWidth > 320 ? "back" : "back"}
        </Button>
      </div>
      <div className="plus__game-challenge">
        <Textfit mode="single">Wrong answer</Textfit>
      </div>
      <div className="plus__game-score">
        Last score: {currentScore}
        <br />
        Best score: {bestResult.best}
      </div>
    </div>
  );
};

export default WrongAnswerPanel;
