import { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../../../contexts/AppContext";
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
    plusLevel,
    plusTime,
    setCurrentPlusTime,
    plusCurrentScore,
    setPlusCurrentScore,
    plusIsWrong,
    setPlusIsWrong,
    plusBestScore,
    setPlusBestScore,
    currentPlusQuestion,
    plusNumbers,
    setCurrentPlusQuestion,
  } = useContext(AppContext);
  const newQuestion = useCallback(() => {
    const possibleNumbers =
      plusLevel === 1
        ? plusNumbers.trainee
        : plusLevel === 2
        ? plusNumbers.easy
        : plusLevel === 3
        ? plusNumbers.medium
        : plusLevel === 4
        ? plusNumbers.hard
        : plusLevel === 5
        ? plusNumbers.extreme
        : null;
    const numberOfNumbers =
      plusLevel === 1
        ? 5
        : plusLevel === 2
        ? 10
        : plusLevel === 3
        ? 20
        : plusLevel === 4
        ? 50
        : plusLevel === 5
        ? 100
        : null;

    const first = possibleNumbers[Math.floor(Math.random() * numberOfNumbers)];
    const second = possibleNumbers[Math.floor(Math.random() * numberOfNumbers)];
    const result = first + second;
    const possible = [result - 1, result, result + 1];
    setCurrentPlusQuestion({
      firstNumber: first,
      secondNumber: second,
      result: result,
      possibleResults: possible,
      visibleResult: possible[Math.floor(Math.random() * 3)],
    });
    setCurrentPlusTime(plusTime);
  }, [
    plusTime,
    plusNumbers,
    setCurrentPlusTime,
    setCurrentPlusQuestion,
    plusLevel,
  ]);
  const bestResult = plusBestScore.find(
    (element) => element.level === plusLevel && element.time === plusTime
  );
  const handleIncorrect = useCallback(() => {
    if (!plusIsWrong) {
      if (plusCurrentScore > bestResult.best) {
        setPlusBestScore((prevScore) =>
          prevScore.map((el) =>
            el.level === plusLevel && el.time === plusTime
              ? { ...el, best: plusCurrentScore }
              : el
          )
        );
      }
      if (!(currentPlusQuestion.result === currentPlusQuestion.visibleResult)) {
        setPlusCurrentScore(plusCurrentScore + 1);
      } else {
        setPlusIsWrong(true);
      }
      newQuestion();
      setCurrentPlusTime(plusTime);
    }
  }, [
    bestResult,
    plusCurrentScore,
    plusIsWrong,
    plusLevel,
    plusTime,
    setPlusBestScore,
    setPlusCurrentScore,
    setPlusIsWrong,
    currentPlusQuestion,
    setCurrentPlusTime,
    newQuestion,
  ]);

  const handleCorrect = useCallback(() => {
    if (!plusIsWrong) {
      if (plusCurrentScore > bestResult.best) {
        setPlusBestScore((prevScore) =>
          prevScore.map((el) =>
            el.level === plusLevel && el.time === plusTime
              ? { ...el, best: plusCurrentScore }
              : el
          )
        );
      }
      if (currentPlusQuestion.result === currentPlusQuestion.visibleResult) {
        setPlusCurrentScore(plusCurrentScore + 1);
      } else {
        setPlusIsWrong(true);
      }
      newQuestion();
      setCurrentPlusTime(plusTime);
    }
  }, [
    bestResult,
    plusCurrentScore,
    plusIsWrong,
    plusLevel,
    plusTime,
    setPlusBestScore,
    setPlusCurrentScore,
    setPlusIsWrong,
    currentPlusQuestion,
    setCurrentPlusTime,
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
    <div className="plus__game">
      <div className="plus__game-score">Current score: {plusCurrentScore}</div>
      <Timer />
      <div className="plus__game-challenge">
        <Textfit mode="single">
          {currentPlusQuestion.firstNumber} + {currentPlusQuestion.secondNumber}{" "}
          = {currentPlusQuestion.visibleResult}
        </Textfit>
      </div>
      <div className="plus__game-buttons">
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
