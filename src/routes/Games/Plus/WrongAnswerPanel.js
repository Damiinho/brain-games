import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AdditionContext } from "../../../contexts/AdditionContext";
import { Textfit } from "react-textfit";

const WrongAnswerPanel = () => {
  const {
    time,
    setCurrentTime,
    currentScore,
    setCurrentScore,
    setIsWrong,
    bestResult,
    newQuestion,
    isQuickTest,
    setIsQuickTest,
  } = useContext(AdditionContext);
  const { setIsPlusStart, windowWidth } = useContext(AppContext);

  return (
    <div className="game__game">
      {" "}
      <div className="game__game-buttons">
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={() => {
            const timeForCurrentTime = isQuickTest ? 20 : time;

            setCurrentScore(0);
            setIsWrong(false);
            newQuestion();
            setCurrentTime(timeForCurrentTime);
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
          onClick={() => {
            setIsPlusStart(false);
            setIsQuickTest(false);
          }}
          style={{
            fontFamily: "Changa, serif",
          }}
        >
          {windowWidth > 320 ? "back" : "back"}
        </Button>
      </div>
      <div className="game__game-challenge">
        <Textfit mode="single">
          {isQuickTest ? "The end" : "Wrong answer"}
        </Textfit>
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
