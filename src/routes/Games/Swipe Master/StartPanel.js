import { Button, MenuItem, Select } from "@mui/material";
import { useCallback, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { SwipeMasterContext } from "../../../contexts/SwipeMasterContext";
import { isMobile } from "react-device-detect";
import {
  EastRounded,
  NorthRounded,
  SouthRounded,
  WestRounded,
} from "@mui/icons-material";

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
  } = useContext(SwipeMasterContext);
  const { setIsSwipeMasterStart } = useContext(AppContext);
  console.log(isMobile);

  const toggleFullscreen = useCallback(() => {
    const element = document.documentElement;
    if (isMobile) {
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement
      ) {
        // Wyjdź z trybu pełnoekranowego, jeśli jesteśmy już w nim
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        }
      } else {
        // Wejdź w tryb pełnoekranowy
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        }
      }
    }
  }, []);

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

  const arrows = [
    <WestRounded style={{ fontSize: 100 }} />,
    <EastRounded style={{ fontSize: 100 }} />,
    <NorthRounded style={{ fontSize: 100 }} />,
    <SouthRounded style={{ fontSize: 100 }} />,
  ];

  return (
    <>
      <div className="game__description">
        <p>Swipe in the appropriate direction (the direction of the arrow).</p>
        <p style={{ marginTop: 10 }}>
          Be careful! If the background color of the arrow is red, swipe in the
          opposite direction.
        </p>
        <p style={{ marginTop: 10 }}>
          You can control by touch (and swiping) or keyboard (arrows).
        </p>
        <div className="game__description-buttons">
          <div
            style={{
              width: 120,
              height: 120,
              backgroundColor: "#3782bb99",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            {arrows[Math.floor(Math.random() * 4)]}
          </div>
          <div
            style={{
              width: 120,
              height: 120,
              backgroundColor: "#fb00aa99",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            {arrows[Math.floor(Math.random() * 4)]}
          </div>
        </div>
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
            setIsSwipeMasterStart(true);
            setIsWrong(false);
            newQuestion();
            setCurrentScore(0);
            toggleFullscreen();
          }}
        >
          Start
        </Button>
      </div>
    </>
  );
};

export default StartPanel;
