import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [plusTime, setPlusTime] = useState(2);
  const [currentPlusTime, setCurrentPlusTime] = useState();
  const [plusLevel, setPlusLevel] = useState(2);
  const [plusCurrentScore, setPlusCurrentScore] = useState(0);
  const [plusIsWrong, setPlusIsWrong] = useState(false);
  const [currentPlusQuestion, setCurrentPlusQuestion] = useState({});
  const plusNumbers = {
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
  const [plusBestScore, setPlusBestScore] = useState([
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
  const [isPlusStart, setIsPlusStart] = useState(false);

  const providerValue = {
    windowWidth,
    plusTime,
    setPlusTime,
    plusNumbers,
    currentPlusTime,
    setCurrentPlusTime,
    plusLevel,
    setPlusLevel,
    isPlusStart,
    setIsPlusStart,
    plusCurrentScore,
    setPlusCurrentScore,
    plusIsWrong,
    setPlusIsWrong,
    plusBestScore,
    setPlusBestScore,
    currentPlusQuestion,
    setCurrentPlusQuestion,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
