import { useContext, useEffect } from "react";
import { AppContext } from "../../../contexts/AppContext";

const Timer = () => {
  const { plusTime, setCurrentPlusTime, currentPlusTime, setPlusIsWrong } =
    useContext(AppContext);

  useEffect(() => {
    if (currentPlusTime > 0) {
      const timer = setTimeout(
        () => setCurrentPlusTime((currentPlusTime - 0.01).toFixed(2)),
        10
      );
      return () => clearTimeout(timer);
    } else setPlusIsWrong(true);
  }, [currentPlusTime, setCurrentPlusTime, setPlusIsWrong]);

  return (
    <div className="plus__game-time">
      <div
        className="plus__game-time__contain"
        style={{
          position: "absolute",
          width: `${100 - (currentPlusTime / plusTime) * 100}%`,
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
