import { createContext, useState } from "react";

export const BirdWatchingContext = createContext();

export const BirdWatchingProvider = ({ children }) => {
  const [time, setTime] = useState(2);
  const [currentTime, setCurrentTime] = useState();
  const [level, setLevel] = useState(2);
  const [currentScore, setCurrentScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const [bestScore, setBestScore] = useState([
    { level: 1, time: 1, best: 0 },
    { level: 2, time: 1, best: 0 },
    { level: 3, time: 1, best: 0 },
    { level: 4, time: 1, best: 0 },
    { level: 5, time: 1, best: 0 },
    { level: 1, time: 2, best: 0 },
    { level: 2, time: 2, best: 0 },
    { level: 3, time: 2, best: 0 },
    { level: 4, time: 2, best: 0 },
    { level: 5, time: 2, best: 0 },
    { level: 1, time: 3, best: 0 },
    { level: 2, time: 3, best: 0 },
    { level: 3, time: 3, best: 0 },
    { level: 4, time: 3, best: 0 },
    { level: 5, time: 3, best: 0 },
    { level: 1, time: 4, best: 0 },
    { level: 2, time: 4, best: 0 },
    { level: 3, time: 4, best: 0 },
    { level: 4, time: 4, best: 0 },
    { level: 5, time: 4, best: 0 },
    { level: 1, time: 5, best: 0 },
    { level: 2, time: 5, best: 0 },
    { level: 3, time: 5, best: 0 },
    { level: 4, time: 5, best: 0 },
    { level: 5, time: 5, best: 0 },
  ]);

  const newQuestion = () => {
    const blocks = [];
    let result = "";
    if (level === 1) {
      for (let i = 0; i < 9; i++) {
        const color = Math.floor(Math.random() * 2);

        blocks.push({ id: i, color: color === 0 ? "#d40091" : "#3782bb" });
        const countD40091 = blocks.filter(
          (block) => block.color === "#d40091"
        ).length;
        const count3782bb = blocks.filter(
          (block) => block.color === "#3782bb"
        ).length;

        result = countD40091 > count3782bb ? "#d40091" : "#3782bb";
      }
    }

    setCurrentQuestion({ blocks, result });
    setCurrentTime(time);
  };

  const providerValue = {
    time,
    setTime,
    currentTime,
    setCurrentTime,
    level,
    setLevel,
    currentScore,
    setCurrentScore,
    isWrong,
    setIsWrong,
    currentQuestion,
    setCurrentQuestion,
    bestScore,
    setBestScore,
    newQuestion,
  };

  return (
    <BirdWatchingContext.Provider value={providerValue}>
      {children}
    </BirdWatchingContext.Provider>
  );
};

export default BirdWatchingProvider;
