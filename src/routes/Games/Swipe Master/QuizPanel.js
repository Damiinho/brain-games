import { useCallback, useContext, useEffect, useState } from "react";
import { SwipeMasterContext } from "../../../contexts/SwipeMasterContext";
import Timer from "./Timer";

import { useSwipeable } from "react-swipeable";
import {
  EastRounded,
  NorthRounded,
  SouthRounded,
  WestRounded,
} from "@mui/icons-material";

const QuizPanel = () => {
  const {
    level,
    time,
    currentTime,
    setCurrentTime,
    currentScore,
    setCurrentScore,
    isWrong,
    setIsWrong,
    bestResult,
    setBestScore,
    currentQuestion,
    newQuestion,
  } = useContext(SwipeMasterContext);
  const [direction, setDirection] = useState("down");

  const handleDirection = useCallback(
    (answer) => {
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
        if (
          (currentQuestion.current.positive &&
            currentQuestion.current.direction === answer) ||
          (!currentQuestion.current.positive &&
            answer ===
              (currentQuestion.current.direction === "up"
                ? "down"
                : currentQuestion.current.direction === "down"
                ? "up"
                : currentQuestion.current.direction === "left"
                ? "right"
                : currentQuestion.current.direction === "right"
                ? "left"
                : false))
        ) {
          setCurrentScore(currentScore + 1);
        } else {
          setIsWrong(true);
        }
        setDirection(answer);
        newQuestion();
        setCurrentTime(time);
      }
    },
    [
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
    ]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        handleDirection("right");
      }
      if (e.key === "ArrowLeft") {
        handleDirection("left");
      }
      if (e.key === "ArrowUp") {
        handleDirection("up");
      }
      if (e.key === "ArrowDown") {
        handleDirection("down");
      }
    },
    [handleDirection]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, currentScore, newQuestion, setCurrentScore]);

  const handlers = useSwipeable({
    onSwipedUp: () => handleDirection("up"),
    onSwipedDown: () => handleDirection("down"),
    onSwipedLeft: () => handleDirection("left"),
    onSwipedRight: () => handleDirection("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="game__game" {...handlers}>
      <div className="game__game-score">
        Current score: {currentScore < 0 ? "0" : currentScore}
      </div>
      <Timer />
      <div className={`game__game-challenge swipemaster`}>
        <div
          className={`current ${
            currentQuestion.current.positive ? "blue" : "red"
          } ${currentTime > time - 0.01 ? "" : "show"}`}
        >
          {currentQuestion.current.direction === "left" ? (
            <WestRounded style={{ fontSize: 150 }} />
          ) : currentQuestion.current.direction === "right" ? (
            <EastRounded style={{ fontSize: 150 }} />
          ) : currentQuestion.current.direction === "up" ? (
            <NorthRounded style={{ fontSize: 150 }} />
          ) : currentQuestion.current.direction === "down" ? (
            <SouthRounded style={{ fontSize: 150 }} />
          ) : (
            ""
          )}
        </div>
        {!(currentScore === 0) && (
          <div
            className={`old ${currentQuestion.old.positive ? "blue" : "red"} ${
              currentTime > time - 0.01 ? "" : `${direction}`
            }`}
          >
            {currentQuestion.old.direction === "left" ? (
              <WestRounded style={{ fontSize: 150 }} />
            ) : currentQuestion.old.direction === "right" ? (
              <EastRounded style={{ fontSize: 150 }} />
            ) : currentQuestion.old.direction === "up" ? (
              <NorthRounded style={{ fontSize: 150 }} />
            ) : currentQuestion.old.direction === "down" ? (
              <SouthRounded style={{ fontSize: 150 }} />
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPanel;
