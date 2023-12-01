import { createContext, useState } from "react";

export const DivisionContext = createContext();

export const DivisionProvider = ({ children }) => {
  const [time, setTime] = useState(2);
  const [currentTime, setCurrentTime] = useState();
  const [level, setLevel] = useState(2);
  const [currentScore, setCurrentScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const trainee = [
    { dividend: 1, divisor: [{ number: 1, result: [1, 0] }] },
    {
      dividend: 2,
      divisor: [
        { number: 1, result: [1, 2] },
        { number: 2, result: [1, 2] },
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
      dividend: 10,
      divisor: [
        { number: 2, result: [2, 5] },
        { number: 5, result: [2, 5] },
        { number: 10, result: [1, 0, 10] },
      ],
    },
  ];
  const easy = [
    {
      dividend: 3,
      divisor: [
        { number: 1, result: [1, 3] },
        { number: 3, result: [1, 3] },
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

    {
      dividend: 8,
      divisor: [
        { number: 2, result: [4, 2] },
        { number: 3, result: [3, 2] },
        { number: 4, result: [4, 2] },
      ],
    },
    {
      dividend: 9,
      divisor: [
        { number: 1, result: [9, 1] },
        { number: 2, result: [4, 5, 0] },
        { number: 3, result: [3, 4] },
        { number: 9, result: [1, 9] },
      ],
    },
    {
      dividend: 15,
      divisor: [
        { number: 3, result: [5, 3] },
        { number: 5, result: [3, 5] },
        { number: 7, result: [2] },
      ],
    },
    {
      dividend: 20,
      divisor: [
        { number: 2, result: [10, 5] },
        { number: 4, result: [5, 4] },
        { number: 5, result: [4, 5] },
        { number: 10, result: [10, 2] },
      ],
    },
    {
      dividend: 25,
      divisor: [{ number: 5, result: [5, 6] }],
    },
    {
      dividend: 30,
      divisor: [
        { number: 3, result: [10, 3] },
        { number: 10, result: [10, 3] },
      ],
    },
  ];
  const medium = [
    {
      dividend: 7,
      divisor: [
        { number: 1, result: [7] },
        { number: 3, result: [2, 3] },
        { number: 7, result: [1, 0] },
      ],
    },
    {
      dividend: 12,
      divisor: [
        { number: 2, result: [6, 4] },
        { number: 3, result: [4, 6] },
        { number: 4, result: [3, 4] },
        { number: 6, result: [2, 6] },
      ],
    },

    {
      dividend: 16,
      divisor: [
        { number: 2, result: [8, 6] },
        { number: 4, result: [4, 6] },
        { number: 8, result: [2, 4] },
      ],
    },
    {
      dividend: 18,
      divisor: [
        { number: 2, result: [9, 2] },
        { number: 4, result: [4, 5] },
        { number: 6, result: [3, 4] },
        { number: 9, result: [2, 9] },
      ],
    },
    {
      dividend: 21,
      divisor: [{ number: 3, result: [9, 7, 6] }],
    },
    {
      dividend: 27,
      divisor: [
        { number: 3, result: [9, 8] },
        { number: 9, result: [3, 4] },
        { number: 7, result: [4, 5] },
      ],
    },
    {
      dividend: 36,
      divisor: [{ number: 6, result: [6, 8] }],
    },
    {
      dividend: 64,
      divisor: [{ number: 8, result: [8, 9] }],
    },
    {
      dividend: 81,
      divisor: [{ number: 9, result: [8, 9] }],
    },
  ];
  const hard = [
    {
      dividend: 11,
      divisor: [{ number: 3, result: [3, 4] }],
    },
    {
      dividend: 13,
      divisor: [
        { number: 3, result: [3, 4] },
        { number: 13, result: [1, 0] },
      ],
    },
    {
      dividend: 14,
      divisor: [
        { number: 2, result: [6, 7] },
        { number: 4, result: [3, 4] },
        { number: 6, result: [3, 4] },
        { number: 7, result: [2, 3] },
      ],
    },
    {
      dividend: 17,
      divisor: [
        { number: 17, result: [1] },
        { number: 3, result: [5, 6] },
      ],
    },
    {
      dividend: 19,
      divisor: [{ number: 9, result: [2, 3] }],
    },

    {
      dividend: 28,
      divisor: [
        { number: 3, result: [9, 8] },
        { number: 7, result: [4, 5] },
        { number: 2, result: [14, 2] },
      ],
    },
    {
      dividend: 42,
      divisor: [
        { number: 7, result: [6, 8] },
        { number: 6, result: [7, 8] },
      ],
    },
    {
      dividend: 56,
      divisor: [
        { number: 7, result: [6, 8] },
        { number: 8, result: [7, 6] },
      ],
    },
    {
      dividend: 63,
      divisor: [
        { number: 7, result: [9, 8] },
        { number: 9, result: [7, 8] },
      ],
    },
    {
      dividend: 72,
      divisor: [
        { number: 9, result: [7, 8] },
        { number: 8, result: [7, 9] },
      ],
    },
    {
      dividend: 81,
      divisor: [{ number: 3, result: [27, 28] }],
    },
  ];
  const extreme = [
    {
      dividend: 3,
      divisor: [{ number: 5, result: [3 / 5, 3 / 4] }],
    },
    {
      dividend: 7,
      divisor: [{ number: 2, result: [7 / 2, 7 / 4] }],
    },
    {
      dividend: 9,
      divisor: [{ number: 2, result: [9 / 2, 4.6] }],
    },
    {
      dividend: 2,
      divisor: [
        { number: 6, result: [2 / 6, 4 / 6] },
        { number: 5, result: [2 / 5, 2 / 6] },
        { number: 8, result: [1 / 4, 1 / 5] },
      ],
    },
    {
      dividend: 3,
      divisor: [
        { number: 6, result: [3 / 6, 2 / 6] },
        { number: 2, result: [3 / 2, 4 / 3] },
        { number: 10, result: [3 / 10, 3 / 9] },
      ],
    },
    {
      dividend: 1,
      divisor: [
        { number: 5, result: [1 / 4, 1 / 5] },
        { number: 4, result: [1 / 4, 1 / 5] },
        { number: 10, result: [1 / 10, 1 / 11] },
        { number: 3, result: [1 / 3, 2 / 3] },
      ],
    },
  ];
  const numbers = {
    trainee: [...trainee],
    easy: [...trainee, ...easy],
    medium: [...trainee, ...easy, ...medium],
    hard: [...trainee, ...easy, ...medium, ...hard],
    extreme: [...trainee, ...easy, ...medium, ...hard, ...extreme],
    increasing:
      isWrong === true
        ? [...trainee]
        : currentScore < 4
        ? [...trainee]
        : currentScore < 13
        ? [...trainee, ...easy]
        : currentScore < 25
        ? [...trainee, ...easy, ...medium]
        : currentScore < 50
        ? [...trainee, ...easy, ...medium, ...hard]
        : [...trainee, ...easy, ...medium, ...hard, ...extreme],
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
