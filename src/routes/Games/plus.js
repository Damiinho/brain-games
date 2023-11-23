import { Button, Slider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const PlusGame = () => {
  const { plusTime, setPlusTime } = useContext(AppContext);

  const handleTimeChange = (newValue) => {
    console.log(newValue);
    if (newValue !== null && newValue !== undefined) {
      setPlusTime(newValue);
    }
  };

  const StartPanel = () => {
    const buttonStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      fontSize: 20,
      fontFamily: "Changa, serif",
    };

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
          <div className="plus__options-title">Options:</div>
          <div className="plus__options-main">
            <div className="plus__options-main__time">
              <p>Time</p>
              <Slider
                value={plusTime}
                onChange={(event, newValue) => {
                  if (newValue !== null && newValue !== undefined) {
                    setPlusTime(newValue);
                  }
                }}
                min={1}
                max={5}
                step={1}
              />
              <p>{plusTime}s</p>
            </div>
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
          >
            Start
          </Button>
        </div>
      </>
    );
  };

  return (
    <div className="plus">
      <StartPanel />
    </div>
  );
};

export default PlusGame;
