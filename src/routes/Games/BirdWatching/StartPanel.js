import { Button, MenuItem, Select } from "@mui/material";

import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { BirdWatchingContext } from "../../../contexts/BirdWatchingContext";

const StartPanel = () => {
  const {
    windowWidth,
    time,
    setTime,
    level,
    setLevel,
    bestScore,
    setIsWrong,
    newQuestion,
    setCurrentScore,
  } = useContext(BirdWatchingContext);
  const { setIsBirdWatchingStart } = useContext(AppContext);

  const itemStyle = {
    color: "white",
    fontFamily: "Times New Roman, serif",
    "&:hover": {
      backgroundColor: "#d4009122",
    },
    "&.Mui-selected": {
      backgroundColor: "#d4009122", // Kolor tła dla wybranego elementu
      "&:hover": {
        backgroundColor: "#d4009155",
      },
    },
  };

  const bestResult = bestScore.find(
    (element) => element.level === level && element.time === time
  );

  return (
    <>
      <div className="game__description">
        <p>Check which colored squares there are the most.</p>
        <p style={{ marginTop: 10 }}>
          You can choose your answer by clicking on any square (by mouse or
          touch) with the color you think is most abundant.
        </p>
      </div>
      <div className="game__options">
        <div className="game__options-title">Change options:</div>
        <div className="game__options-main">
          <div className="game__options-main__element">
            <p>Time:</p>

            <Select
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              style={{
                color: "white",
                fontSize: windowWidth > 400 ? 20 : 16,
                fontFamily: "Times New Roman, serif",
                backgroundColor: "#55555555",
                width: windowWidth > 400 ? 200 : 120,
                textAlign: "left",
                paddingLeft: 10,
              }} // Kolor tekstu
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                PaperProps: {
                  style: {
                    backgroundColor: "#555555bb", // Kolor tła rozwijanej listy
                    color: "white", // Kolor tekstu na liście
                  },
                },
              }}
            >
              <MenuItem value={1} sx={itemStyle}>
                1 second
              </MenuItem>
              <MenuItem value={2} sx={itemStyle}>
                2 seconds
              </MenuItem>
              <MenuItem value={3} sx={itemStyle}>
                3 seconds
              </MenuItem>
              <MenuItem value={4} sx={itemStyle}>
                4 seconds
              </MenuItem>
              <MenuItem value={5} sx={itemStyle}>
                5 seconds
              </MenuItem>
            </Select>
          </div>
          <div className="game__options-main__element">
            <p>Level:</p>

            <Select
              value={level}
              onChange={(e) => {
                setLevel(e.target.value);
              }}
              style={{
                color: "white",
                fontSize: windowWidth > 400 ? 20 : 16,
                fontFamily: "Times New Roman, serif",
                backgroundColor: "#55555555",
                width: windowWidth > 400 ? 200 : 120,
                textAlign: "left",
                paddingLeft: 10,
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                PaperProps: {
                  style: {
                    backgroundColor: "#555555bb",
                    color: "white",
                  },
                },
              }}
            >
              <MenuItem value={1} sx={itemStyle}>
                Trainee
              </MenuItem>
              <MenuItem value={2} sx={itemStyle}>
                Easy
              </MenuItem>
              <MenuItem value={3} sx={itemStyle}>
                Medium
              </MenuItem>
              <MenuItem value={4} sx={itemStyle}>
                Hard
              </MenuItem>
              <MenuItem value={5} sx={itemStyle}>
                Extreme
              </MenuItem>
              <MenuItem value={6} sx={itemStyle}>
                Increasing
              </MenuItem>
            </Select>
          </div>
        </div>
      </div>{" "}
      <div className="game__options-best">Best result: {bestResult.best}</div>
      <div className="game__start">
        <Button
          variant="contained"
          size={windowWidth > 400 ? "large" : "medium"}
          style={{
            fontFamily: "Changa, serif",
            fontSize: windowWidth > 400 ? 25 : 20,
          }}
          onClick={() => {
            setIsBirdWatchingStart(true);
            setIsWrong(false);
            newQuestion();
            setCurrentScore(0);
          }}
        >
          Start
        </Button>
      </div>
    </>
  );
};

export default StartPanel;