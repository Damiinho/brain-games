import { createContext, useState } from "react";

export const FollowTheLeaderContext = createContext();

export const FollowTheLeaderProvider = ({ children }) => {
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
    let blocks = [];
    if (level === 1) {
      do {
        blocks.push({ toFollow: false, number: null });
      } while (!(blocks.length === 9));

      const randomIndexes = [];
      while (randomIndexes.length < 3) {
        const randomIndex = Math.floor(Math.random() * 9);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }

      // Ustaw toFollow na true i ponumeruj wybrane elementy od 0 do 2
      randomIndexes.forEach((index, i) => {
        blocks[index].toFollow = true;
        blocks[index].number = i;
      });
    }

    setCurrentQuestion({ blocks });
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
    <FollowTheLeaderContext.Provider value={providerValue}>
      {children}
    </FollowTheLeaderContext.Provider>
  );
};

export default FollowTheLeaderProvider;
