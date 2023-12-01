import { useCallback, useContext } from "react";
import { HighOrLowContext } from "../../../contexts/HighOrLowContext";
import Timer from "./Timer";

const QuizPanel = () => {
  const {
    level,
    time,
    setCurrentTime,
    currentScore,
    setCurrentScore,
    setIsWrong,
    bestScore,
    setBestScore,
    currentQuestion,
    newQuestion,
  } = useContext(HighOrLowContext);

  const bestResult = bestScore.find(
    (element) => element.level === level && element.time === time
  );

  const handleCorrect = useCallback(
    (color) => {
      if (currentScore > bestResult.best) {
        setBestScore((prevScore) =>
          prevScore.map((el) =>
            el.level === level && el.time === time
              ? { ...el, best: currentScore }
              : el
          )
        );
      }
      if (currentQuestion.result === color) {
        setCurrentScore(currentScore + 1);
      } else {
        setIsWrong(true);
      }
      newQuestion();
      setCurrentTime(time);
    },
    [
      bestResult,
      currentScore,
      level,
      time,
      setBestScore,
      setCurrentScore,
      setIsWrong,
      currentQuestion,
      setCurrentTime,
      newQuestion,
    ]
  );

  return (
    <div className="game__game">
      <div className="game__game-score">Current score: {currentScore}</div>
      <Timer />
      <div
        className={`game__game-challenge birdwatching ${
          level === 1
            ? "trainee"
            : level === 2
            ? "easy"
            : level === 3
            ? "medium"
            : level === 4
            ? "hard"
            : level === 5
            ? "extreme"
            : currentScore < 6
            ? "trainee"
            : currentScore < 11
            ? "easy"
            : currentScore < 16
            ? "medium"
            : currentScore < 21
            ? "hard"
            : "extreme"
        }`}
      >
        {currentQuestion.blocks.map((block) => {
          return (
            <div
              onClick={() => handleCorrect(block.color)}
              key={block.id}
              style={{ backgroundColor: block.color }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizPanel;
