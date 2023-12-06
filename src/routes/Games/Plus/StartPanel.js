import { Button, MenuItem, Select } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AdditionContext } from "../../../contexts/AdditionContext";

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
    setIsQuickTest,
    setCurrentTime,
    bestScore,
  } = useContext(AdditionContext);
  const { setIsPlusStart } = useContext(AppContext);

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
        <p>Check if the addition result is correct.</p>
        <p style={{ marginTop: 10 }}>
          You can choose the answer using the mouse, the keyboard (left arrow –
          bad, right arrow – good) or by touch.
        </p>
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
      <div className="game__quick">
        <Button
          variant="outlined"
          size={windowWidth > 400 ? "large" : "large"}
          style={{
            fontFamily: "Changa, serif",
            fontSize: windowWidth > 400 ? 25 : 25,
            marginRight: 10,
          }}
          onClick={() => {
            setIsPlusStart(true);
            setIsWrong(false);
            newQuestion();
            setCurrentScore(0);
            setCurrentTime(20);
            setIsQuickTest(true);
          }}
        >
          Quick test
        </Button>
        <div className="game__quick-text">
          <div>most in 20 seconds</div>
          <div>best: {bestScore[bestScore.length - 1].best}</div>
        </div>
      </div>
      <div className="game__options">
        <div className="game__options-title">
          <div>Infinite mode</div>
          <div
            style={{
              // border: "1px solid rgba(25, 118, 210, 0.5)",
              borderRadius: 4,
              padding: "5px 15px",
              color: "#1976d2",
            }}
          >
            best result: {bestResult.best}
          </div>
        </div>
        <div className="game__options-main">
          <div className="game__options-main__element">
            <p>Time to answer:</p>

            <Select
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              style={{
                color: "white",
                fontSize: windowWidth > 400 ? 20 : 20,
                fontFamily: "Times New Roman, serif",
                backgroundColor: "#55555555",
                width: windowWidth > 400 ? 200 : 200,
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
                fontSize: windowWidth > 400 ? 20 : 20,
                fontFamily: "Times New Roman, serif",
                backgroundColor: "#55555555",
                width: windowWidth > 400 ? 200 : 200,
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
        <div className="game__start">
          <Button
            variant="contained"
            size={windowWidth > 400 ? "large" : "large"}
            style={{
              fontFamily: "Changa, serif",
              fontSize: windowWidth > 400 ? 25 : 25,
            }}
            onClick={() => {
              setIsPlusStart(true);
              setIsWrong(false);
              newQuestion();
              setCurrentScore(0);
              setIsQuickTest(false);
              setCurrentTime(time);
            }}
          >
            Start
          </Button>
        </div>
      </div>
    </>
  );
};

export default StartPanel;
