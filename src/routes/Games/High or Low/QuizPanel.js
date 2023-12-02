import { useCallback, useContext, useEffect } from "react";
import { HighOrLowContext } from "../../../contexts/HighOrLowContext";
import Timer from "./Timer";
import { Textfit } from "react-textfit";
import { Button } from "@mui/material";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
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
    setCurrentTime,
    currentScore,
    setCurrentScore,
    isWrong,
    setIsWrong,
    bestScore,
    setBestScore,
    currentQuestion,
    newQuestion,
  } = useContext(HighOrLowContext);

  // setTimeout(() => {
  //   if (currentScore === -1) {
  //     newQuestion();
  //     setCurrentScore(currentScore + 1);
  //   }
  // }, 500);
  const bestResult = bestScore.find(
    (element) => element.level === level && element.time === time
  );

  const handleLow = useCallback(() => {
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
      newQuestion();
      setCurrentTime(time);
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

  const handleHigh = useCallback(() => {
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
      newQuestion();
      setCurrentTime(time);
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
      if (e.key === "ArrowRight") {
        handleHigh();
      }
      if (e.key === "ArrowLeft") {
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

  return (
    <div className="game__game">
      <div className="game__game-score">Current score: {currentScore}</div>
      <Timer />
      <div className="game__game-challenge">
        <Textfit mode="single">{currentQuestion.number}</Textfit>
      </div>
      <div className="game__game-buttons">
        <Button variant="contained" color="error" onClick={handleLow}>
          <div style={buttonStyle}>
            <div className="button-text">low</div>
            <ArrowCircleDownRoundedIcon fontSize="large" />
          </div>
        </Button>
        <Button variant="contained" color="success" onClick={handleHigh}>
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
