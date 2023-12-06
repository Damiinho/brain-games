import { createContext, useState } from "react";

export const HighOrLowContext = createContext();

export const HighOrLowProvider = ({ children }) => {
  const [time, setTime] = useState(2);
  const [currentTime, setCurrentTime] = useState();
  const [level, setLevel] = useState(2);
  const [currentScore, setCurrentScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({
    oldNumber: 0,
    number: 0,
  });

  const [bestScore, setBestScore] = useState([
    { level: 1, time: 1, best: 0 },
    { level: 2, time: 1, best: 0 },
    { level: 3, time: 1, best: 0 },
    { level: 4, time: 1, best: 0 },
    { level: 5, time: 1, best: 0 },
    { level: 6, time: 1, best: 0 },
    { level: 1, time: 2, best: 0 },
    { level: 2, time: 2, best: 0 },
    { level: 3, time: 2, best: 0 },
    { level: 4, time: 2, best: 0 },
    { level: 5, time: 2, best: 0 },
    { level: 6, time: 2, best: 0 },
    { level: 1, time: 3, best: 0 },
    { level: 2, time: 3, best: 0 },
    { level: 3, time: 3, best: 0 },
    { level: 4, time: 3, best: 0 },
    { level: 5, time: 3, best: 0 },
    { level: 6, time: 3, best: 0 },
    { level: 1, time: 4, best: 0 },
    { level: 2, time: 4, best: 0 },
    { level: 3, time: 4, best: 0 },
    { level: 4, time: 4, best: 0 },
    { level: 5, time: 4, best: 0 },
    { level: 6, time: 4, best: 0 },
    { level: 1, time: 5, best: 0 },
    { level: 2, time: 5, best: 0 },
    { level: 3, time: 5, best: 0 },
    { level: 4, time: 5, best: 0 },
    { level: 5, time: 5, best: 0 },
    { level: 6, time: 5, best: 0 },
  ]);

  const newQuestion = () => {
    const oldNumber = currentQuestion.number;
    let newNumber;

    if (
      level === 1 ||
      (level === 6 && isWrong === true) ||
      (level === 6 && currentScore < 4)
    ) {
      do {
        newNumber = Math.floor(Math.random() * 20);
      } while (Math.abs(newNumber - oldNumber) <= 5);

      setCurrentQuestion({
        oldNumber,
        number: newNumber,
      });
    } else if (level === 2 || (level === 6 && currentScore < 13)) {
      do {
        newNumber = Math.floor(Math.random() * 20);
      } while (newNumber === oldNumber);

      setCurrentQuestion({
        oldNumber,
        number: newNumber,
      });
    } else if (level === 3 || (level === 6 && currentScore < 25)) {
      do {
        newNumber = Math.floor(Math.random() * 50);
      } while (newNumber === oldNumber);

      setCurrentQuestion({
        oldNumber,
        number: newNumber,
      });
    } else if (level === 4 || (level === 6 && currentScore < 50)) {
      const competringNumber =
        currentScore < 0 ? oldNumber : Math.floor(Math.random() * 50);

      do {
        newNumber = Math.floor(Math.random() * 50);
      } while (
        newNumber === competringNumber ||
        !(Math.abs(newNumber - competringNumber) <= 5)
      );

      let newRandomNumber = 0;
      do {
        newRandomNumber = Math.floor(Math.random() * 50);
      } while (newRandomNumber === competringNumber);
      const randomize = Math.floor(Math.random() * 2);

      setCurrentQuestion({
        oldNumber,
        number: randomize === 0 ? newNumber : newRandomNumber,
      });
    } else if (level === 5 || level === 6) {
      const competringNumber =
        currentScore < 0 ? oldNumber : Math.floor(Math.random() * 100);

      do {
        newNumber = Math.floor(Math.random() * 100);
      } while (
        newNumber === competringNumber ||
        !(Math.abs(newNumber - competringNumber) <= 5)
      );

      let newRandomNumber = 0;
      do {
        newRandomNumber = Math.floor(Math.random() * 100);
      } while (newRandomNumber === competringNumber);
      const randomize = Math.floor(Math.random() * 2);

      setCurrentQuestion({
        oldNumber,
        number: randomize === 0 ? newNumber : newRandomNumber,
      });
    }

    setCurrentTime(time);
  };
  const bestResult = bestScore.find(
    (element) => element.level === level && element.time === time
  );

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
    bestResult,
  };

  return (
    <HighOrLowContext.Provider value={providerValue}>
      {children}
    </HighOrLowContext.Provider>
  );
};

export default HighOrLowProvider;
