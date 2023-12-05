import { createContext, useState } from "react";

export const AdditionContext = createContext();

export const AdditionProvider = ({ children }) => {
  const [time, setTime] = useState(2);
  const [currentTime, setCurrentTime] = useState();
  const [level, setLevel] = useState(2);
  const [currentScore, setCurrentScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [isQuiqTest, setIsQuiqTest] = useState(false);
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
    increasing:
      isWrong === true
        ? [1, 2, 3, 4, 5]
        : currentScore < 10
        ? [1, 2, 3, 4, 5]
        : currentScore < 17
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        : currentScore < 25
        ? [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ]
        : currentScore < 50
        ? [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
          ]
        : [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
            54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
            88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
          ],
  };
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
    { level: "quiqTest", best: 0 },
  ]);

  const newQuestion = () => {
    const possibleNumbers =
      level === 1
        ? numbers.trainee
        : level === 2
        ? numbers.easy
        : level === 3
        ? numbers.medium
        : level === 4
        ? numbers.hard
        : level === 5
        ? numbers.extreme
        : level === 6
        ? numbers.increasing
        : null;
    const numberOfNumbers =
      level === 1
        ? 5
        : level === 2
        ? 10
        : level === 3
        ? 20
        : level === 4
        ? 50
        : level === 5
        ? 100
        : level === 6
        ? isWrong === true || currentScore < 10
          ? 5
          : currentScore < 17
          ? 10
          : currentScore < 25
          ? 20
          : currentScore < 50
          ? 50
          : 100
        : null;

    const first = possibleNumbers[Math.floor(Math.random() * numberOfNumbers)];
    const second = possibleNumbers[Math.floor(Math.random() * numberOfNumbers)];
    const result = first + second;
    const possible =
      level === 6 || isQuiqTest
        ? isWrong === true
          ? [result, result, result - 1, result + 1]
          : (isQuiqTest && currentScore < 5) || currentScore < 10
          ? [result, result, result - 1, result + 1]
          : (isQuiqTest && currentScore < 10) || currentScore < 25
          ? [
              result,
              result,
              result,
              result,
              result - 2,
              result - 1,
              result + 2,
              result + 1,
            ]
          : (isQuiqTest && currentScore < 15) || currentScore < 50
          ? [
              result,
              result,
              result,
              result,
              result,
              result,
              result - 2,
              result - 1,
              result + 2,
              result + 1,
              result + 10,
              result - 10 > 0 ? result - 10 : result + 20,
            ]
          : [
              result,
              result,
              result,
              result,
              result,
              result,
              result,
              result,
              result - 2,
              result - 1,
              result + 2,
              result + 1,
              result + 5,
              result - 5 > 0 ? result - 5 : result + 15,
              result + 10,
              result - 10 > 0 ? result - 10 : result + 20,
            ]
        : level === 1
        ? [result, result, result - 1, result + 1]
        : level > 1 && level < 4
        ? [
            result,
            result,
            result,
            result,
            result - 2,
            result - 1,
            result + 2,
            result + 1,
          ]
        : level === 4
        ? [
            result,
            result,
            result,
            result,
            result,
            result,
            result - 2,
            result - 1,
            result + 2,
            result + 1,
            result + 10,
            result - 10 > 0 ? result - 10 : result + 20,
          ]
        : [
            result,
            result,
            result,
            result,
            result,
            result,
            result,
            result,
            result - 2,
            result - 1,
            result + 2,
            result + 1,
            result + 5,
            result - 5 > 0 ? result - 5 : result + 15,
            result + 10,
            result - 10 > 0 ? result - 10 : result + 20,
          ];
    const oldQuestion = currentQuestion.current;
    setCurrentQuestion({
      old: oldQuestion,
      current: {
        firstNumber: first,
        secondNumber: second,
        result: result,
        possibleResults: possible,
        visibleResult:
          possible[
            Math.floor(
              Math.random() *
                `${
                  level === 6 || isQuiqTest
                    ? isWrong === true
                      ? 4
                      : (isQuiqTest && currentScore < 5) || currentScore < 10
                      ? 4
                      : (isQuiqTest && currentScore < 10) || currentScore < 25
                      ? 8
                      : (isQuiqTest && currentScore < 15) || currentScore < 50
                      ? 12
                      : 16
                    : level === 1
                    ? 4
                    : level > 1 && level < 4
                    ? 8
                    : level === 4
                    ? 12
                    : 16
                }`
            )
          ],
      },
    });
    if (!isQuiqTest) {
      setCurrentTime(time);
    }
  };
  const bestResult = isQuiqTest
    ? bestScore[bestScore.length - 1]
    : bestScore.find(
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
    numbers,
    bestScore,
    setBestScore,
    newQuestion,
    isQuiqTest,
    setIsQuiqTest,
    bestResult,
  };

  return (
    <AdditionContext.Provider value={providerValue}>
      {children}
    </AdditionContext.Provider>
  );
};

export default AdditionProvider;
