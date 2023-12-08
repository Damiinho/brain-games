import { useCallback, useContext } from "react";
import Timer from "../../../components/Timer";
import { FollowTheLeaderContext } from "../../../contexts/FollowTheLeaderContext";

const QuizPanel = () => {
  const {
    level,
    time,
    setCurrentTime,
    currentScore,
    setCurrentScore,
    setIsWrong,
    bestResult,
    setBestScore,
    currentQuestion,
    newQuestion,
    currentTime,
  } = useContext(FollowTheLeaderContext);

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
      <Timer
        time={time}
        setCurrentTime={setCurrentTime}
        currentTime={currentTime}
        setIsWrong={setIsWrong}
      />
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
