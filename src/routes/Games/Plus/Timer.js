import { useContext, useEffect } from "react";
import { AdditionContext } from "../../../contexts/AdditionContext";
import { AppContext } from "../../../contexts/AppContext";

const Timer = () => {
  const {
    time,
    setCurrentTime,
    currentTime,
    setIsWrong,
    isQuiqTest,
    currentScore,
    bestResult,
    setBestScore,
    bestScore,
  } = useContext(AdditionContext);
  const { playEndSound } = useContext(AppContext);

  useEffect(() => {
    if (currentTime > 0) {
      const timer = setTimeout(
        () => setCurrentTime((currentTime - 0.01).toFixed(2)),
        10
      );
      return () => clearTimeout(timer);
    } else {
      if (isQuiqTest) {
        playEndSound();
        if (currentScore > bestResult.best) {
          const newBestScore = bestScore;
          newBestScore[newBestScore.length - 1] = {
            level: "quiqTest",
            best: currentScore,
          };
          setBestScore(newBestScore);
        }
      }
      setIsWrong(true);
    }
  }, [
    currentTime,
    setCurrentTime,
    setIsWrong,
    playEndSound,
    isQuiqTest,
    setBestScore,
    bestScore,
    currentScore,
    bestResult,
  ]);

  const timeForBar = isQuiqTest ? 20 : time;

  return (
    <div className="game__game-time">
      <div
        className="game__game-time__contain"
        style={{
          position: "absolute",
          width: `${100 - (currentTime / timeForBar) * 100}%`,
          height: 25,
          right: 0,
          top: 0,
          backgroundColor: "#111111",
        }}
      ></div>
    </div>
  );
};

export default Timer;
