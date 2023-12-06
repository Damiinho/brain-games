import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

const Timer = (props) => {
  const { playEndSound } = useContext(AppContext);
  const {
    time,
    setCurrentTime,
    currentTime,
    setIsWrong,
    isQuickTest,
    currentScore,
    bestResult,
    bestScore,
    setBestScore,
    // id,
  } = props;

  useEffect(() => {
    if (currentTime > 0) {
      const timer = setTimeout(
        () => setCurrentTime((currentTime - 0.01).toFixed(2)),
        10
      );
      return () => clearTimeout(timer);
    } else {
      if (isQuickTest) {
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
    bestResult,
    currentScore,
    bestScore,
    isQuickTest,
    playEndSound,
    setBestScore,
  ]);

  const timeForBar = isQuickTest ? 20 : time;

  return (
    <>
      {currentScore < 0 ? (
        <div>
          <div style={{ height: 25, width: "100%", right: 0, top: 0 }}></div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Timer;
