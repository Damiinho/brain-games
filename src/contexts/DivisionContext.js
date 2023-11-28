import { createContext, useState } from "react";

export const DivisionContext = createContext();

export const DivisionProvider = ({ children }) => {
  const [time, setTime] = useState(2);
  const [currentTime, setCurrentTime] = useState();
  const [level, setLevel] = useState(2);
  const [currentScore, setCurrentScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const numbers = {
    trainee: [
      { dividend: 1, divisor: [{ number: 1, result: [1, 0] }] },
      {
        dividend: 2,
        divisor: [
          { number: 1, result: [1, 2] },
          { number: 2, result: [1, 2] },
        ],
      },
      {
        dividend: 3,
        divisor: [
          { number: 1, result: [1, 3] },
          { number: 3, result: [1, 3] },
        ],
      },
      {
        dividend: 4,
        divisor: [
          { number: 2, result: [1, 2, 4] },
          { number: 4, result: [1, 2, 4] },
        ],
      },

      {
        dividend: 5,
        divisor: [
          { number: 1, result: [1, 3, 5] },
          { number: 3, result: [2, 3] },
          { number: 5, result: [1, 5] },
        ],
      },
      {
        dividend: 6,
        divisor: [
          { number: 2, result: [3, 2] },
          { number: 3, result: [2, 3] },
          { number: 6, result: [1, 3, 6] },
        ],
      },
    ],
    // easy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    // medium: [
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    // ],
    // hard: [
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    //   40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    // ],
    // extreme: [
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    //   40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    //   58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    //   76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
    //   94, 95, 96, 97, 98, 99, 100,
    // ],
    // increasing:
    //   isWrong === true
    //     ? [1, 2, 3, 4, 5]
    //     : currentScore < 10
    //     ? [1, 2, 3, 4, 5]
    //     : currentScore < 17
    //     ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //     : currentScore < 25
    //     ? [
    //         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    //         20,
    //       ]
    //     : currentScore < 50
    //     ? [
    //         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    //         20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    //         37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    //       ]
    //     : [
    //         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    //         20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    //         37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
    //         54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    //         71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
    //         88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    //       ],
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
    const numberOfNumbers = possibleNumbers.length;
    const quizNumbers =
      possibleNumbers[Math.floor(Math.random() * numberOfNumbers)];

    const first = quizNumbers.dividend;
    const divisor = quizNumbers.divisor;
    const divisorNumber = divisor[Math.floor(Math.random() * divisor.length)];
    const second = divisorNumber.number;

    const result = first / second;
    const visibleResult =
      divisorNumber.result[
        Math.floor(Math.random() * divisorNumber.result.length)
      ];
    console.log(second);

    setCurrentQuestion({
      firstNumber: first,
      secondNumber: second,
      result: result,
      visibleResult: visibleResult,
    });
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
    numbers,
    bestScore,
    setBestScore,
    newQuestion,
  };

  return (
    <DivisionContext.Provider value={providerValue}>
      {children}
    </DivisionContext.Provider>
  );
};

export default DivisionProvider;
