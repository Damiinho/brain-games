import { useCallback, useContext, useEffect, useState } from "react";
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
    setBestScore,
    currentQuestion,
    newQuestion,
    isQuickTest,
    bestResult,
  } = useContext(AdditionContext);
  const { playSuccessSound, playFailSound } = useContext(AppContext);
  const [tempStop, setTempStop] = useState(false);
  const [isCurrentShow, setIsCurrentShow] = useState(false);
  const [isBadAnswer, setIsBadAnswer] = useState(false);

  const handleIncorrect = useCallback(() => {
    if (!isWrong && !tempStop) {
      if (currentScore > bestResult.best) {
        if (!isQuickTest) {
          setBestScore((prevScore) =>
            prevScore.map((el) =>
              el.level === level && el.time === time
                ? { ...el, best: currentScore }
                : el
            )
          );
        }
      }
      setIsCurrentShow(false);
      setIsBadAnswer(false);
      if (
        !(
          currentQuestion.current.result ===
          currentQuestion.current.visibleResult
        )
      ) {
        setCurrentScore(currentScore + 1);
        playSuccessSound();
        setTimeout(() => {
          setIsCurrentShow(true);
        }, 10);
      } else {
        playFailSound();
        setTempStop(true);
        setTimeout(() => {
          setTempStop(false);
        }, 1000);

        if (isQuickTest) {
          setTimeout(() => {
            setIsBadAnswer(true);
          }, 10);
          setTimeout(() => {
            setIsCurrentShow(true);
          }, 800);
        }
        if (!isQuickTest) {
          setIsWrong(true);
        }
      }
      newQuestion();
      if (!isQuickTest) {
        setCurrentTime(time);
      }
    }
  }, [
    bestResult,
    tempStop,
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
    isQuickTest,
  ]);

  const handleCorrect = useCallback(() => {
    if (!isWrong && !tempStop) {
      if (currentScore > bestResult.best) {
        if (!isQuickTest) {
          setBestScore((prevScore) =>
            prevScore.map((el) =>
              el.level === level && el.time === time
                ? { ...el, best: currentScore }
                : el
            )
          );
        }
      }
      setIsCurrentShow(false);
      setIsBadAnswer(false);
      if (
        currentQuestion.current.result === currentQuestion.current.visibleResult
      ) {
        setCurrentScore(currentScore + 1);
        playSuccessSound();
        setTimeout(() => {
          setIsCurrentShow(true);
        }, 10);
      } else {
        playFailSound();
        setTempStop(true);
        setTimeout(() => {
          setTempStop(false);
        }, 1000);

        if (isQuickTest) {
          setTimeout(() => {
            setIsBadAnswer(true);
          }, 10);
          setTimeout(() => {
            setIsCurrentShow(true);
          }, 800);
        }
        if (!isQuickTest) {
          setIsWrong(true);
        }
      }
      newQuestion();
      if (!isQuickTest) {
        setCurrentTime(time);
      }
    }
  }, [
    bestResult,
    tempStop,
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
    isQuickTest,
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
      <div className="game__game-challenge addition">
        <div
          className={`current ${
            isCurrentShow
              ? "show"
              : currentScore === 0 && !isBadAnswer
              ? "show"
              : ""
          }`}
        >
          <Textfit mode="single">
            {currentQuestion.current.firstNumber} +{" "}
            {currentQuestion.current.secondNumber} ={" "}
            {currentQuestion.current.visibleResult}
          </Textfit>
        </div>
        {(isBadAnswer || currentScore > 0) && (
          <div
            className={`old ${
              isBadAnswer ? "bad" : isCurrentShow ? "hide" : ""
            }`}
          >
            <Textfit mode="single">
              {currentQuestion.old.firstNumber} +{" "}
              {currentQuestion.old.secondNumber} ={" "}
              {currentQuestion.old.visibleResult}
            </Textfit>
          </div>
        )}
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
