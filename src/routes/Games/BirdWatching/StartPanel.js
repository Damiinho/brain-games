import { Button, MenuItem, Select } from "@mui/material";

import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { BirdWatchingContext } from "../../../contexts/BirdWatchingContext";

const StartPanel = () => {
  const {
    time,
    setTime,
    level,
    setLevel,
    bestResult,
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

  return (
    <>
      <div className="game__description">
        <div className="game__description-text">
          <p>Check which colored squares there are the most.</p>
          <p style={{ marginTop: 10 }}>
            You can choose your answer by clicking on any square (by mouse or
            touch) with the color you think is most abundant.
          </p>
        </div>
      </div>
      <div className="game__modes">
        <div className="game__modes-element infinite">
          <div className="game__modes-element__title">Infinite mode</div>
          <div className="game__modes-element__description">
            <div>best result: {bestResult.best}</div>
          </div>
          <div className="game__modes-element__selectors">
            <div className="game__modes-element__selectors-item">
              <div className="game__modes-element__selectors-item__title">
                Time to answer
              </div>
              <div className="game__modes-element__selectors-item__select">
                <Select
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  style={{
                    color: "white",
                    fontFamily: "Changa, serif",
                    backgroundColor: "#55555555",
                    width: "auto",
                    maxWidth: 140,
                    height: 40,
                    textAlign: "left",
                    // paddingLeft: 10,
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
            </div>{" "}
            <div className="game__modes-element__selectors-item">
              <div className="game__modes-element__selectors-item__title">
                Level
              </div>
              <div className="game__modes-element__selectors-item__select">
                <Select
                  value={level}
                  onChange={(e) => {
                    setLevel(e.target.value);
                  }}
                  style={{
                    color: "white",
                    fontFamily: "Changa, serif",
                    backgroundColor: "#55555555",
                    width: "auto",
                    maxWidth: 140,
                    height: 40,
                    textAlign: "left",
                    // paddingLeft: 10,
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
          </div>
          <div className="game__modes-element__start">
            <Button
              variant="contained"
              size="large"
              style={{
                fontFamily: "Changa, serif",
                fontSize: 25,
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
        </div>
      </div>
    </>
  );
};

export default StartPanel;
