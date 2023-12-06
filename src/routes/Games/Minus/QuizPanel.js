import { useCallback, useContext, useEffect } from "react";
import { SubtractionContext } from "../../../contexts/SubtractionContext";
import Timer from "./Timer";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Textfit } from "react-textfit";
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
  } = useContext(SubtractionContext);

  //   const possibleNumbers =
  //     level === 1
  //       ? numbers.trainee
  //       : level === 2
  //       ? numbers.easy
  //       : level === 3
  //       ? numbers.medium
  //       : level === 4
  //       ? numbers.hard
  //       : level === 5
  //       ? numbers.extreme
  //       : null;
  //   const numberOfNumbers =
  //     level === 1
  //       ? 5
  //       : level === 2
  //       ? 10
  //       : level === 3
  //       ? 20
  //       : level === 4
  //       ? 50
  //       : level === 5
  //       ? 100
  //       : null;

  //   const first = possibleNumbers[Math.floor(Math.random() * numberOfNumbers)];
  //   const second = possibleNumbers[Math.floor(Math.random() * numberOfNumbers)];
  //   const result = first > second ? first - second : second - first;
  //   const possible = [
  //     result,
  //     result,
  //     result,
  //     result,
  //     result - 2,
  //     result - 1,
  //     result + 2,
  //     result + 1,
  //   ];
  //   setCurrentQuestion({
  //     firstNumber: first,
  //     secondNumber: second,
  //     result: result,
  //     possibleResults: possible,
  //     visibleResult: possible[Math.floor(Math.random() * 8)],
  //   });
  //   setCurrentTime(time);
  // }, [time, numbers, setCurrentTime, setCurrentQuestion, level]);

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
          {currentQuestion.firstNumber > currentQuestion.secondNumber
            ? `${currentQuestion.firstNumber} - ${currentQuestion.secondNumber}`
            : `${currentQuestion.secondNumber} - ${currentQuestion.firstNumber}`}{" "}
          = {currentQuestion.visibleResult}
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
