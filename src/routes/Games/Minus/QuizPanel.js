import { useCallback, useContext, useEffect, useState } from "react";
import { SubtractionContext } from "../../../contexts/SubtractionContext";
import Timer from "../../../components/Timer";
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
    bestResult,
    setBestScore,
    currentQuestion,
    newQuestion,
    currentTime,
  } = useContext(SubtractionContext);

  const { playSuccessSound, playFailSound } = useContext(AppContext);

  const [isCurrentShow, setIsCurrentShow] = useState(false);
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

      setIsCurrentShow(false);
      if (!(currentQuestion.result === currentQuestion.visibleResult)) {
        setCurrentScore(currentScore + 1);
        setTimeout(() => {
          setIsCurrentShow(true);
        }, 10);
        playSuccessSound();
      } else {
        setIsWrong(true);
        playFailSound();
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
    playSuccessSound,
    playFailSound,
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
      setIsCurrentShow(false);
      if (currentQuestion.result === currentQuestion.visibleResult) {
        setCurrentScore(currentScore + 1);
        setTimeout(() => {
          setIsCurrentShow(true);
        }, 10);
        playSuccessSound();
      } else {
        setIsWrong(true);
        playFailSound();
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
    playSuccessSound,
    playFailSound,
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
      <Timer
        time={time}
        setCurrentTime={setCurrentTime}
        currentTime={currentTime}
        setIsWrong={setIsWrong}
      />

      <div className="game__game-challenge subtraction">
        <div
          className={`current ${
            isCurrentShow || currentScore === 0 ? "show" : ""
          }`}
        >
          <Textfit mode="single">
            {currentQuestion.firstNumber > currentQuestion.secondNumber
              ? `${currentQuestion.firstNumber} - ${currentQuestion.secondNumber}`
              : `${currentQuestion.secondNumber} - ${currentQuestion.firstNumber}`}{" "}
            = {currentQuestion.visibleResult}
          </Textfit>
        </div>
        {currentScore > 0 && (
          <div className={`old ${isCurrentShow ? "hide" : ""}`}>
            <Textfit mode="single">
              {currentQuestion.oldQuestion.firstNumber >
              currentQuestion.oldQuestion.secondNumber
                ? `${currentQuestion.oldQuestion.firstNumber} - ${currentQuestion.oldQuestion.secondNumber}`
                : `${currentQuestion.oldQuestion.secondNumber} - ${currentQuestion.oldQuestion.firstNumber}`}{" "}
              = {currentQuestion.oldQuestion.visibleResult}
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
