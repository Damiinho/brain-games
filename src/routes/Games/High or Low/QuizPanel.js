import { useCallback, useContext, useEffect, useState } from "react";
import { HighOrLowContext } from "../../../contexts/HighOrLowContext";
import Timer from "./Timer";
import { Textfit } from "react-textfit";
import { Button } from "@mui/material";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { useSwipeable } from "react-swipeable";

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  fontSize: 20,
  fontFamily: "Changa, serif",
};
const QuizPanel = () => {
  const {
    level,
    time,
    currentTime,
    setCurrentTime,
    currentScore,
    setCurrentScore,
    isWrong,
    setIsWrong,
    bestResult,
    setBestScore,
    currentQuestion,
    newQuestion,
  } = useContext(HighOrLowContext);
  const [upOrDown, setUpOrDown] = useState("down");

  const handleLow = useCallback(() => {
    if (!(currentScore < 0)) {
      if (!isWrong) {
        if (currentScore > bestResult.best) {
          setBestScore((prevScore) =>
            prevScore.map((el) =>
              el.level === level && el.time === time
                ? { ...el, best: currentScore }
                : el
            )
          );
        }
        if (currentQuestion.number < currentQuestion.oldNumber) {
          setCurrentScore(currentScore + 1);
        } else {
          setIsWrong(true);
        }
        setUpOrDown("down");
        newQuestion();
        setCurrentTime(time);
      }
    }
  }, [
    bestResult,
    currentScore,
    isWrong,
    level,
    time,
    setBestScore,
    setCurrentScore,
    setIsWrong,
    currentQuestion,
    setCurrentTime,
    newQuestion,
  ]);
  useEffect(() => {
    if (currentScore < 0) {
      setCurrentTime(0.7);
    }
  }, [currentScore, setCurrentTime]);
  useEffect(() => {
    if (currentScore < 0 && currentTime < 0.1) {
      setCurrentScore(0);
      newQuestion();
    }
  }, [newQuestion, currentScore, currentTime, setCurrentScore]);

  const handleHigh = useCallback(() => {
    if (!(currentScore < 0)) {
      if (!isWrong) {
        if (currentScore > bestResult.best) {
          setBestScore((prevScore) =>
            prevScore.map((el) =>
              el.level === level && el.time === time
                ? { ...el, best: currentScore }
                : el
            )
          );
        }
        if (currentQuestion.number > currentQuestion.oldNumber) {
          setCurrentScore(currentScore + 1);
        } else {
          setIsWrong(true);
        }
        setUpOrDown("up");
        newQuestion();
        setCurrentTime(time);
      }
    }
  }, [
    bestResult,
    currentScore,
    isWrong,
    level,
    time,
    setBestScore,
    setCurrentScore,
    setIsWrong,
    currentQuestion,
    setCurrentTime,
    newQuestion,
  ]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        handleHigh();
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        handleLow();
      }
    },
    [handleHigh, handleLow]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, currentScore, newQuestion, setCurrentScore]);

  const handlers = useSwipeable({
    onSwipedUp: () => handleHigh(),
    onSwipedDown: () => handleLow(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="game__game" {...handlers}>
      <div className="game__game-score">
        Current score: {currentScore < 0 ? "0" : currentScore}
      </div>
      <Timer />
      <div className={`game__game-challenge highorlow`}>
        <div
          className={`currentNumber ${
            currentTime > time - 0.01
              ? currentScore < 0
                ? "show"
                : ""
              : "show"
          }`}
        >
          <Textfit mode="single">{currentQuestion.number}</Textfit>
        </div>
        <div
          className={`oldNumber ${
            currentTime > time - 0.01
              ? currentScore < 0
                ? "down"
                : ""
              : upOrDown === "down"
              ? "down"
              : "up"
          }`}
        >
          <Textfit mode="single">{currentQuestion.oldNumber}</Textfit>
        </div>
      </div>

      <div className="game__game-buttons">
        <Button
          variant="contained"
          color="primary"
          onClick={handleLow}
          disabled={currentScore < 0 ? true : false}
        >
          <div style={buttonStyle}>
            <div className="button-text">low</div>
            <ArrowCircleDownRoundedIcon fontSize="large" />
          </div>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleHigh}
          disabled={currentScore < 0 ? true : false}
        >
          <div style={buttonStyle}>
            <div className="button-text">high</div>
            <ArrowCircleUpRoundedIcon fontSize="large" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default QuizPanel;
