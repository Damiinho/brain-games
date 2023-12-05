import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { SwipeMasterContext } from "../../../contexts/SwipeMasterContext";
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
  } = useContext(SwipeMasterContext);
  const { setIsSwipeMasterStart, windowWidth } = useContext(AppContext);
  const bestResult = bestScore.find(
    (element) => element.level === level && element.time === time
  );
  return (
    <div className="game__game">
      {" "}
      <div className="game__game-buttons">
        <Button
          variant="contained"
          color="secondary"
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
          color="primary"
          size="large"
          onClick={() => setIsSwipeMasterStart(false)}
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
