import { createContext, useState } from "react";

export const SubtractionContext = createContext();

export const SubtractionProvider = ({ children }) => {
  const [time, setTime] = useState(2);
  const [currentTime, setCurrentTime] = useState();
  const [level, setLevel] = useState(2);
  const [currentScore, setCurrentScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const numbers = {
    trainee: [1, 2, 3, 4, 5],
    easy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    medium: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ],
    hard: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    ],
    extreme: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
      94, 95, 96, 97, 98, 99, 100,
    ],
  };
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
    numbers,
    bestScore,
    setBestScore,
  };

  return (
    <SubtractionContext.Provider value={providerValue}>
      {children}
    </SubtractionContext.Provider>
  );
};

export default SubtractionProvider;
