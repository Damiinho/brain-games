import { useCallback, useContext, useState } from "react";
import { BirdWatchingContext } from "../../../contexts/BirdWatchingContext";
import Timer from "../../../components/Timer";
import { AppContext } from "../../../contexts/AppContext";

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
  } = useContext(BirdWatchingContext);

  const { playSuccessSound, playFailSound } = useContext(AppContext);

  const [isCurrentShow, setIsCurrentShow] = useState(false);

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
      setIsCurrentShow(false);
      if (currentQuestion.result === color) {
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
      playSuccessSound,
      playFailSound,
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
        } current ${isCurrentShow || currentScore === 0 ? "show" : ""}`}
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
