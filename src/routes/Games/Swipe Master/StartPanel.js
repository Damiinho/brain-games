import { Button, MenuItem, Select } from "@mui/material";
import { useCallback, useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { SwipeMasterContext } from "../../../contexts/SwipeMasterContext";
import { isMobile } from "react-device-detect";
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";
import {
  EastRounded,
  NorthRounded,
  SouthRounded,
  WestRounded,
} from "@mui/icons-material";

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
  } = useContext(SwipeMasterContext);
  const { setIsSwipeMasterStart, windowWidth } = useContext(AppContext);
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

  const arrows = [
    <WestRounded style={{ fontSize: 100 }} />,
    <EastRounded style={{ fontSize: 100 }} />,
    <NorthRounded style={{ fontSize: 100 }} />,
    <SouthRounded style={{ fontSize: 100 }} />,
  ];

  return (
    <>
      <div className="game__description">
        {" "}
        <div className="game__description-title">
          <span>Swipe master</span>
          <div
            style={{
              width: windowWidth > 600 ? 32 : 26,
              height: windowWidth > 600 ? 32 : 26,
              backgroundColor: "#fb00aa",
              borderRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <KeyboardBackspaceTwoToneIcon style={{ color: "black" }} />
          </div>
        </div>
        <div className="game__description-main">
          <div className="game__description-main__text">
            <p>
              Swipe in the appropriate direction (the direction of the arrow).
            </p>
            <p style={{ marginTop: 10 }}>
              Be careful! If the background color of the arrow is red, swipe in
              the opposite direction.
            </p>
            <p style={{ marginTop: 10 }}>
              You can control by touch (and swiping) or keyboard (arrows).
            </p>
          </div>
          <div className="game__description-main__buttons">
            <div
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#3782bb99",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <div style={{ transform: "scale(0.5)" }}>
                {arrows[Math.floor(Math.random() * 4)]}
              </div>
            </div>
            <div
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#fb00aa99",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <div style={{ transform: "scale(0.5)" }}>
                {arrows[Math.floor(Math.random() * 4)]}
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default StartPanel;
