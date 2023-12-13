import { Button } from "@mui/material";
import { useContext } from "react";
import { Textfit } from "react-textfit";
import { AppContext } from "../contexts/AppContext";

const WrongAnswerPanel = (props) => {
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
    setIsThisQuizStart,
    id,
  } = props;
  const { toggleFullscreen } = useContext(AppContext);

  return (
    <div className="game__game">
      <div className="game__game-buttons">
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={() => {
            const timeForCurrentTime = isQuickTest ? 20 : time;
            if (id === "highorlow") {
              setCurrentScore(-1);
            } else setCurrentScore(0);
            setIsWrong(false);
            newQuestion();
            setCurrentTime(timeForCurrentTime);
          }}
          style={{
            fontFamily: "Changa, serif",
          }}
        >
          restart
        </Button>
        <Button
          variant="contained"
          color="info"
          size="large"
          onClick={() => {
            setIsThisQuizStart(false);
            if (setIsQuickTest) {
              setIsQuickTest(false);
            }
            toggleFullscreen("leave");
          }}
          style={{
            fontFamily: "Changa, serif",
          }}
        >
          back
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
