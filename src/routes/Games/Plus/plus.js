import { Button, MenuItem, Select } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import PlusGameContent from "./PlusGameContent";

const PlusGame = () => {
  const {
    plusTime,
    setPlusTime,
    plusLevel,
    setPlusLevel,
    isPlusStart,
    setIsPlusStart,
    plusBestScore,
    setPlusIsWrong,
  } = useContext(AppContext);

  const StartPanel = () => {
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
          The game involves assessing whether the addition result is correct.
          You can choose the answer using the mouse or the keyboard.
          <div className="plus__description-buttons">
            <Button variant="contained" color="error">
              <div style={buttonStyle}>
                <KeyboardBackspaceRoundedIcon />
                incorrect
                <CancelIcon fontSize="large" />
              </div>
            </Button>
            <Button variant="contained" color="success">
              <div style={buttonStyle}>
                <EastRoundedIcon />
                correct
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
                  fontSize: 20,
                  fontFamily: "Times New Roman, serif",
                  backgroundColor: "#55555555",
                  width: 200,
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
                  getContentAnchorEl: null,
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
                  fontSize: 20,
                  fontFamily: "Times New Roman, serif",
                  backgroundColor: "#55555555",
                  width: 200,
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
                  getContentAnchorEl: null,
                  PaperProps: {
                    style: {
                      backgroundColor: "#555555bb", // Kolor tła rozwijanej listy
                      color: "white", // Kolor tekstu na liście
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
          <div className="plus__options-main__element">
            Best result: {bestResult.best}
          </div>
        </div>
        <div className="plus__start">
          <Button
            variant="contained"
            size="large"
            style={{
              fontFamily: "Changa, serif",
              fontSize: 25,
            }}
            onClick={() => {
              setIsPlusStart(true);
              setPlusIsWrong(false);
            }}
          >
            Start
          </Button>
        </div>
      </>
    );
  };

  return (
    <div className="plus">
      {!isPlusStart && <StartPanel />}
      {isPlusStart && <PlusGameContent />}
    </div>
  );
};

export default PlusGame;
