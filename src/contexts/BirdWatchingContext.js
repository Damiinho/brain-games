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
    const oldQuestion = currentQuestion.blocks;
    let blocks = [];
    let result = "";
    if (level === 1) {
      for (let i = 0; i < 9; i++) {
        const color = Math.floor(Math.random() * 2);

        blocks.push({ id: i, color: color === 0 ? "#d40091" : "#3782bb" });
      }

      const countD40091 = blocks.filter(
        (block) => block.color === "#d40091"
      ).length;
      const count3782bb = blocks.filter(
        (block) => block.color === "#3782bb"
      ).length;

      result = countD40091 > count3782bb ? "#d40091" : "#3782bb";
    }
    if (level === 2) {
      for (let i = 0; i < 16; i++) {
        const color = Math.floor(Math.random() * 2);

        blocks.push({ id: i, color: color === 0 ? "#d40091" : "#3782bb" });
      }

      let countD40091 = blocks.filter(
        (block) => block.color === "#d40091"
      ).length;
      let count3782bb = blocks.filter(
        (block) => block.color === "#3782bb"
      ).length;

      if (count3782bb === countD40091) {
        const randomBlock = Math.floor(Math.random() * blocks.length);
        if (blocks[randomBlock].color === "#d40091") {
          blocks[randomBlock].color = "#3782bb";
          countD40091 = blocks.filter(
            (block) => block.color === "#d40091"
          ).length;
          count3782bb = blocks.filter(
            (block) => block.color === "#3782bb"
          ).length;
        } else if (blocks[randomBlock].color === "#3782bb") {
          blocks[randomBlock].color = "#d40091";
          countD40091 = blocks.filter(
            (block) => block.color === "#d40091"
          ).length;
          count3782bb = blocks.filter(
            (block) => block.color === "#3782bb"
          ).length;
        }
      }

      result = countD40091 > count3782bb ? "#d40091" : "#3782bb";
    }
    if (level === 3) {
      for (let i = 0; i < 16; i++) {
        const color = Math.floor(Math.random() * 2);

        blocks.push({ id: i, color: color === 0 ? "#d40091" : "#3782bb" });
      }

      let countD40091 = blocks.filter(
        (block) => block.color === "#d40091"
      ).length;
      let count3782bb = blocks.filter(
        (block) => block.color === "#3782bb"
      ).length;

      if (count3782bb === countD40091) {
        const randomBlock = Math.floor(Math.random() * blocks.length);
        if (blocks[randomBlock].color === "#d40091") {
          blocks[randomBlock].color = "#3782bb";
          countD40091 = blocks.filter(
            (block) => block.color === "#d40091"
          ).length;
          count3782bb = blocks.filter(
            (block) => block.color === "#3782bb"
          ).length;
        } else if (blocks[randomBlock].color === "#3782bb") {
          blocks[randomBlock].color = "#d40091";
          countD40091 = blocks.filter(
            (block) => block.color === "#d40091"
          ).length;
          count3782bb = blocks.filter(
            (block) => block.color === "#3782bb"
          ).length;
        }
      }
      if (count3782bb > 8) {
        const howMany = count3782bb - 8;
        for (let i = 0; i < howMany; i++) {
          blocks.filter((block) => block.color === "#3782bb")[
            Math.floor(
              Math.random() *
                blocks.filter((block) => block.color === "#3782bb").length
            )
          ].color = "#3e8d4e";
        }
      }
      if (countD40091 > 8) {
        const howMany = countD40091 - 8;
        for (let i = 0; i < howMany; i++) {
          blocks.filter((block) => block.color === "#d40091")[
            Math.floor(
              Math.random() *
                blocks.filter((block) => block.color === "#d40091").length
            )
          ].color = "#3e8d4e";
        }
      }
      countD40091 = blocks.filter((block) => block.color === "#d40091").length;
      count3782bb = blocks.filter((block) => block.color === "#3782bb").length;
      let count3e8d4e = blocks.filter(
        (block) => block.color === "#3e8d4e"
      ).length;
      const randomNumbers = {
        first: Math.floor(Math.random() * 3),
        second: Math.floor(Math.random() * 3),
      };
      if (!(randomNumbers.first === randomNumbers.second)) {
        if (
          (randomNumbers.first === 0 && randomNumbers.second === 2) ||
          (randomNumbers.first === 2 && randomNumbers.second === 0)
        ) {
          blocks = blocks.map((block) => ({
            ...block,
            color:
              block.color === "#3e8d4e"
                ? "#d40091"
                : block.color === "#d40091"
                ? "#3e8d4e"
                : "#3782bb",
          }));
          countD40091 = blocks.filter(
            (block) => block.color === "#d40091"
          ).length;
          count3e8d4e = blocks.filter(
            (block) => block.color === "#3e8d4e"
          ).length;
        } else if (
          (randomNumbers.first === 2 && randomNumbers.second === 1) ||
          (randomNumbers.first === 1 && randomNumbers.second === 2)
        ) {
          blocks = blocks.map((block) => ({
            ...block,
            color:
              block.color === "#3e8d4e"
                ? "#3782bb"
                : block.color === "#3782bb"
                ? "#3e8d4e"
                : "#d40091",
          }));
          count3782bb = blocks.filter(
            (block) => block.color === "#3782bb"
          ).length;
          count3e8d4e = blocks.filter(
            (block) => block.color === "#3e8d4e"
          ).length;
        }
      }

      if (countD40091 > count3782bb && countD40091 > count3e8d4e) {
        result = "#d40091";
      } else if (count3782bb > countD40091 && count3782bb > count3e8d4e) {
        result = "#3782bb";
      } else {
        result = "#3e8d4e";
      }
    }
    if (level === 4) {
      const colors = ["#d40091", "#3782bb", "#3e8d4e"];

      for (let i = 0; i < 25; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        blocks.push({ id: i, color });
      }

      const counts = colors.map(
        (color) => blocks.filter((block) => block.color === color).length
      );

      const maxCount = Math.max(...counts);

      if (counts.filter((count) => count === maxCount).length > 1) {
        const randomBlockIndex = Math.floor(Math.random() * blocks.length);
        const randomBlock = blocks[randomBlockIndex];

        const otherColors = colors.filter(
          (color) => color !== randomBlock.color
        );
        randomBlock.color =
          otherColors[Math.floor(Math.random() * otherColors.length)];
      }

      result = colors.reduce(
        (maxColor, color, index) =>
          counts[index] === maxCount ? color : maxColor,
        ""
      );
    }
    if (level === 5) {
      const colors = ["#d40091", "#3782bb", "#3e8d4e"];

      const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 9; i++) {
        blocks.push({ id: i, color: randomColor1 });
      }
      const otherColors = colors.filter((color) => color !== randomColor1);
      const randomColor2 =
        otherColors[Math.floor(Math.random() * otherColors.length)];
      for (let i = 9; i < 17; i++) {
        blocks.push({ id: i, color: randomColor2 });
      }
      const remainingColors = otherColors.filter(
        (color) => color !== randomColor2
      );
      const randomColor3 =
        remainingColors[Math.floor(Math.random() * remainingColors.length)];
      for (let i = 17; i < 25; i++) {
        blocks.push({ id: i, color: randomColor3 });
      }
      for (let i = blocks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
      }

      result = randomColor1;
    }
    if (level === 6) {
      if (isWrong === true || currentScore < 5) {
        for (let i = 0; i < 9; i++) {
          const color = Math.floor(Math.random() * 2);

          blocks.push({ id: i, color: color === 0 ? "#d40091" : "#3782bb" });
        }

        const countD40091 = blocks.filter(
          (block) => block.color === "#d40091"
        ).length;
        const count3782bb = blocks.filter(
          (block) => block.color === "#3782bb"
        ).length;

        result = countD40091 > count3782bb ? "#d40091" : "#3782bb";
      } else if (currentScore < 10) {
        for (let i = 0; i < 16; i++) {
          const color = Math.floor(Math.random() * 2);

          blocks.push({ id: i, color: color === 0 ? "#d40091" : "#3782bb" });
        }

        let countD40091 = blocks.filter(
          (block) => block.color === "#d40091"
        ).length;
        let count3782bb = blocks.filter(
          (block) => block.color === "#3782bb"
        ).length;

        if (count3782bb === countD40091) {
          const randomBlock = Math.floor(Math.random() * blocks.length);
          if (blocks[randomBlock].color === "#d40091") {
            blocks[randomBlock].color = "#3782bb";
            countD40091 = blocks.filter(
              (block) => block.color === "#d40091"
            ).length;
            count3782bb = blocks.filter(
              (block) => block.color === "#3782bb"
            ).length;
          } else if (blocks[randomBlock].color === "#3782bb") {
            blocks[randomBlock].color = "#d40091";
            countD40091 = blocks.filter(
              (block) => block.color === "#d40091"
            ).length;
            count3782bb = blocks.filter(
              (block) => block.color === "#3782bb"
            ).length;
          }
        }

        result = countD40091 > count3782bb ? "#d40091" : "#3782bb";
      } else if (currentScore < 15) {
        for (let i = 0; i < 16; i++) {
          const color = Math.floor(Math.random() * 2);

          blocks.push({ id: i, color: color === 0 ? "#d40091" : "#3782bb" });
        }

        let countD40091 = blocks.filter(
          (block) => block.color === "#d40091"
        ).length;
        let count3782bb = blocks.filter(
          (block) => block.color === "#3782bb"
        ).length;

        if (count3782bb === countD40091) {
          const randomBlock = Math.floor(Math.random() * blocks.length);
          if (blocks[randomBlock].color === "#d40091") {
            blocks[randomBlock].color = "#3782bb";
            countD40091 = blocks.filter(
              (block) => block.color === "#d40091"
            ).length;
            count3782bb = blocks.filter(
              (block) => block.color === "#3782bb"
            ).length;
          } else if (blocks[randomBlock].color === "#3782bb") {
            blocks[randomBlock].color = "#d40091";
            countD40091 = blocks.filter(
              (block) => block.color === "#d40091"
            ).length;
            count3782bb = blocks.filter(
              (block) => block.color === "#3782bb"
            ).length;
          }
        }
        if (count3782bb > 8) {
          const howMany = count3782bb - 8;
          for (let i = 0; i < howMany; i++) {
            blocks.filter((block) => block.color === "#3782bb")[
              Math.floor(
                Math.random() *
                  blocks.filter((block) => block.color === "#3782bb").length
              )
            ].color = "#3e8d4e";
          }
        }
        if (countD40091 > 8) {
          const howMany = countD40091 - 8;
          for (let i = 0; i < howMany; i++) {
            blocks.filter((block) => block.color === "#d40091")[
              Math.floor(
                Math.random() *
                  blocks.filter((block) => block.color === "#d40091").length
              )
            ].color = "#3e8d4e";
          }
        }
        countD40091 = blocks.filter(
          (block) => block.color === "#d40091"
        ).length;
        count3782bb = blocks.filter(
          (block) => block.color === "#3782bb"
        ).length;
        let count3e8d4e = blocks.filter(
          (block) => block.color === "#3e8d4e"
        ).length;
        const randomNumbers = {
          first: Math.floor(Math.random() * 3),
          second: Math.floor(Math.random() * 3),
        };
        if (!(randomNumbers.first === randomNumbers.second)) {
          if (
            (randomNumbers.first === 0 && randomNumbers.second === 2) ||
            (randomNumbers.first === 2 && randomNumbers.second === 0)
          ) {
            blocks = blocks.map((block) => ({
              ...block,
              color:
                block.color === "#3e8d4e"
                  ? "#d40091"
                  : block.color === "#d40091"
                  ? "#3e8d4e"
                  : "#3782bb",
            }));
            countD40091 = blocks.filter(
              (block) => block.color === "#d40091"
            ).length;
            count3e8d4e = blocks.filter(
              (block) => block.color === "#3e8d4e"
            ).length;
          } else if (
            (randomNumbers.first === 2 && randomNumbers.second === 1) ||
            (randomNumbers.first === 1 && randomNumbers.second === 2)
          ) {
            blocks = blocks.map((block) => ({
              ...block,
              color:
                block.color === "#3e8d4e"
                  ? "#3782bb"
                  : block.color === "#3782bb"
                  ? "#3e8d4e"
                  : "#d40091",
            }));
            count3782bb = blocks.filter(
              (block) => block.color === "#3782bb"
            ).length;
            count3e8d4e = blocks.filter(
              (block) => block.color === "#3e8d4e"
            ).length;
          }
        }

        if (countD40091 > count3782bb && countD40091 > count3e8d4e) {
          result = "#d40091";
        } else if (count3782bb > countD40091 && count3782bb > count3e8d4e) {
          result = "#3782bb";
        } else {
          result = "#3e8d4e";
        }
      } else if (currentScore < 20) {
        const colors = ["#d40091", "#3782bb", "#3e8d4e"];

        for (let i = 0; i < 25; i++) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          blocks.push({ id: i, color });
        }

        const counts = colors.map(
          (color) => blocks.filter((block) => block.color === color).length
        );

        const maxCount = Math.max(...counts);

        if (counts.filter((count) => count === maxCount).length > 1) {
          const randomBlockIndex = Math.floor(Math.random() * blocks.length);
          const randomBlock = blocks[randomBlockIndex];

          const otherColors = colors.filter(
            (color) => color !== randomBlock.color
          );
          randomBlock.color =
            otherColors[Math.floor(Math.random() * otherColors.length)];
        }

        result = colors.reduce(
          (maxColor, color, index) =>
            counts[index] === maxCount ? color : maxColor,
          ""
        );
      } else {
        const colors = ["#d40091", "#3782bb", "#3e8d4e"];

        const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < 9; i++) {
          blocks.push({ id: i, color: randomColor1 });
        }
        const otherColors = colors.filter((color) => color !== randomColor1);
        const randomColor2 =
          otherColors[Math.floor(Math.random() * otherColors.length)];
        for (let i = 9; i < 17; i++) {
          blocks.push({ id: i, color: randomColor2 });
        }
        const remainingColors = otherColors.filter(
          (color) => color !== randomColor2
        );
        const randomColor3 =
          remainingColors[Math.floor(Math.random() * remainingColors.length)];
        for (let i = 17; i < 25; i++) {
          blocks.push({ id: i, color: randomColor3 });
        }
        for (let i = blocks.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
        }

        result = randomColor1;
      }
    }

    setCurrentQuestion({ blocks, result, oldQuestion });
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
    <BirdWatchingContext.Provider value={providerValue}>
      {children}
    </BirdWatchingContext.Provider>
  );
};

export default BirdWatchingProvider;
