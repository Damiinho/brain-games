import { Button, MenuItem, Select } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { DivisionContext } from "../../../contexts/DivisionContext";

const StartPanel = () => {
  const {
    windowWidth,
    time,
    setTime,
    level,
    setLevel,
    bestResult,
    setIsWrong,
    newQuestion,
    setCurrentScore,
  } = useContext(DivisionContext);
  const { setIsDivisionStart } = useContext(AppContext);

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    fontSize: 20,
    fontFamily: "Changa, serif",
  };

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
          <p>Check if the division result is correct.</p>
          <p style={{ marginTop: 10 }}>
            You can choose the answer using the mouse, the keyboard (left arrow
            – bad, right arrow – good) or by touch.
          </p>
        </div>
        <div className="game__description-buttons">
          <Button variant="contained" color="error">
            <div style={buttonStyle}>
              {windowWidth > 400 && (
                <>
                  <div className="button-icon">
                    {" "}
                    <KeyboardBackspaceRoundedIcon />
                  </div>
                  <div className="button-text">incorrect</div>
                </>
              )}
              <CancelIcon fontSize="large" />
            </div>
          </Button>
          <Button variant="contained" color="success">
            <div style={buttonStyle}>
              {windowWidth > 400 && (
                <>
                  <div className="button-icon">
                    <EastRoundedIcon />
                  </div>
                  <div className="button-text">correct</div>
                </>
              )}
              <CheckCircleIcon fontSize="large" />
            </div>
          </Button>
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
                setIsDivisionStart(true);
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
