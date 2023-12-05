import { useCallback, useContext, useEffect } from "react";
import { AdditionContext } from "../../../contexts/AdditionContext";
import Timer from "./Timer";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Textfit } from "react-textfit";
import { AppContext } from "../../../contexts/AppContext";
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
    isQuiqTest,
  } = useContext(AdditionContext);
  const { playSuccessSound, playFailSound } = useContext(AppContext);

  const bestResult = bestScore.find(
    (element) => element.level === level && element.time === time
  );
  const handleIncorrect = useCallback(() => {
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
      if (!(currentQuestion.result === currentQuestion.visibleResult)) {
        setCurrentScore(currentScore + 1);
        playSuccessSound();
      } else {
        playFailSound();
        if (!isQuiqTest) {
          setIsWrong(true);
        }
      }
      newQuestion();
      if (!isQuiqTest) {
        setCurrentTime(time);
      }
    }
  }, [
    bestResult,
    playSuccessSound,
    playFailSound,
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
    isQuiqTest,
  ]);

  const handleCorrect = useCallback(() => {
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
      if (currentQuestion.result === currentQuestion.visibleResult) {
        setCurrentScore(currentScore + 1);
        playSuccessSound();
      } else {
        playFailSound();
        if (!isQuiqTest) {
          setIsWrong(true);
        }
      }
      newQuestion();
      if (!isQuiqTest) {
        setCurrentTime(time);
      }
    }
  }, [
    bestResult,
    playSuccessSound,
    playFailSound,
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
    isQuiqTest,
  ]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        handleCorrect();
      }
      if (e.key === "ArrowLeft") {
        handleIncorrect();
      }
    },
    [handleCorrect, handleIncorrect]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="game__game">
      <div className="game__game-score">Current score: {currentScore}</div>
      <Timer />
      <div className="game__game-challenge">
        <Textfit mode="single">
          {currentQuestion.firstNumber} + {currentQuestion.secondNumber} ={" "}
          {currentQuestion.visibleResult}
        </Textfit>
      </div>
      <div className="game__game-buttons">
        <Button variant="contained" color="error" onClick={handleIncorrect}>
          <div style={buttonStyle}>
            <div className="button-text">incorrect</div>
            <CancelIcon fontSize="large" />
          </div>
        </Button>
        <Button variant="contained" color="success" onClick={handleCorrect}>
          <div style={buttonStyle}>
            <div className="button-text">correct</div>
            <CheckCircleIcon fontSize="large" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default QuizPanel;
