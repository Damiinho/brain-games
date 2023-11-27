import { Button, MenuItem, Select } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

const StartPanel = () => {
  const {
    windowWidth,
    plusTime,
    setPlusTime,
    plusLevel,
    setPlusLevel,
    setIsPlusStart,
    plusBestScore,
    setPlusIsWrong,
    setCurrentPlusTime,
    setCurrentPlusQuestion,
    plusNumbers,
    setPlusCurrentScore,
  } = useContext(AppContext);

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

  const bestResult = plusBestScore.find(
    (element) => element.level === plusLevel && element.time === plusTime
  );

  return (
    <>
      <div className="plus__description">
        The game involves assessing whether the addition result is correct. You
        can choose the answer using the mouse or the keyboard (or by touch, of
        course).
        <div className="plus__description-buttons">
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
      <div className="plus__options">
        <div className="plus__options-title">Change options:</div>
        <div className="plus__options-main">
          <div className="plus__options-main__element">
            <p>Time:</p>

            <Select
              value={plusTime}
              onChange={(e) => {
                setPlusTime(e.target.value);
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
          <div className="plus__options-main__element">
            <p>Level:</p>

            <Select
              value={plusLevel}
              onChange={(e) => {
                setPlusLevel(e.target.value);
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
            </Select>
          </div>
        </div>
      </div>{" "}
      <div className="plus__options-best">Best result: {bestResult.best}</div>
      <div className="plus__start">
        <Button
          variant="contained"
          size={windowWidth > 400 ? "large" : "medium"}
          style={{
            fontFamily: "Changa, serif",
            fontSize: windowWidth > 400 ? 25 : 20,
          }}
          onClick={() => {
            setIsPlusStart(true);
            setPlusIsWrong(false);
            const possibleNumbers =
              plusLevel === 1
                ? plusNumbers.trainee
                : plusLevel === 2
                ? plusNumbers.easy
                : plusLevel === 3
                ? plusNumbers.medium
                : plusLevel === 4
                ? plusNumbers.hard
                : plusLevel === 5
                ? plusNumbers.extreme
                : null;
            const numberOfNumbers =
              plusLevel === 1
                ? 5
                : plusLevel === 2
                ? 10
                : plusLevel === 3
                ? 20
                : plusLevel === 4
                ? 50
                : plusLevel === 5
                ? 100
                : null;

            const first =
              possibleNumbers[Math.floor(Math.random() * numberOfNumbers)];
            const second =
              possibleNumbers[Math.floor(Math.random() * numberOfNumbers)];
            const result = first + second;
            const possible = [result - 1, result, result + 1];
            setCurrentPlusQuestion({
              firstNumber: first,
              secondNumber: second,
              result: result,
              possibleResults: possible,
              visibleResult: possible[Math.floor(Math.random() * 3)],
            });
            setCurrentPlusTime(plusTime);
            setPlusCurrentScore(0);
          }}
        >
          Start
        </Button>
      </div>
    </>
  );
};

export default StartPanel;