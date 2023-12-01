import { useContext, useEffect } from "react";
import { BirdWatchingContext } from "../../../contexts/BirdWatchingContext";

const Timer = () => {
  const { time, setCurrentTime, currentTime, setIsWrong } =
    useContext(BirdWatchingContext);

  useEffect(() => {
    if (currentTime > 0) {
      const timer = setTimeout(
        () => setCurrentTime((currentTime - 0.01).toFixed(2)),
        10
      );
      return () => clearTimeout(timer);
    } else setIsWrong(true);
  }, [currentTime, setCurrentTime, setIsWrong]);

  return (
    <div className="game__game-time">
      <div
        className="game__game-time__contain"
        style={{
          position: "absolute",
          width: `${100 - (currentTime / time) * 100}%`,
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
