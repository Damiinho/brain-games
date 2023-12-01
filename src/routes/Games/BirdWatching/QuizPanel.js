import { useCallback, useContext } from "react";
import { BirdWatchingContext } from "../../../contexts/BirdWatchingContext";
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
  } = useContext(BirdWatchingContext);

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
    <div className="plus__game">
      <div className="plus__game-score">Current score: {currentScore}</div>
      <Timer />
      <div
        className={`plus__game-challenge birdwatching ${
          level === 1 ? "trainee" : ""
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
