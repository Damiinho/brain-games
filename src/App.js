import { Button } from "@mui/material";
import "./App.css";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import { Link } from "react-router-dom";
import { LinearGradient } from "react-text-gradients";
import BirdIMG from "./img/bird.svg";
import HighOrLowIMG from "./img/highorlow.svg";
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";
function App() {
  const buttonStyle = {
    color: "#ff00ab",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  };

  const spanStyle = {
    color: "#ffe7dc",
    fontSize: 20,
    fontFamily: "Changa, serif",
    margin: "3px 3px",
  };

  return (
    <div className="games">
      <div className="games__division">
        <div className="games__division-title">
          <LinearGradient gradient={["to left", "#ff68f0 ,#17acff"]}>
            Math games
          </LinearGradient>
        </div>
        <div className="games__division-list">
          <Link to={`plus`}>
            <Button
              size="small"
              variant="contained"
              style={{
                backgroundColor: "rgb(63, 130, 185, 0.7)",
              }}
            >
              <div style={buttonStyle}>
                <span style={spanStyle}>addition</span>
                <AddBoxRoundedIcon fontSize="large" corlor="secondary" />
              </div>
            </Button>
          </Link>
          <Link to={`minus`}>
            <Button
              size="small"
              variant="contained"
              style={{
                backgroundColor: "rgb(63, 130, 185, 0.7)",
              }}
            >
              <div style={buttonStyle}>
                <span style={spanStyle}>subtraction</span>
                <IndeterminateCheckBoxRoundedIcon
                  fontSize="large"
                  corlor="secondary"
                />
              </div>
            </Button>
          </Link>
          <Link to={`division`}>
            <Button
              size="small"
              variant="contained"
              style={{
                backgroundColor: "rgb(63, 130, 185, 0.7)",
              }}
            >
              <div style={buttonStyle}>
                <span style={spanStyle}>division</span>
                <div
                  style={{
                    width: 35,
                    height: 35,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      backgroundColor: "#fb00aa",
                      borderRadius: 3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#376085",
                        fontWeight: "bold",
                        fontSize: 40,
                        fontFamily: "Quicksand, sans-serif",
                        transform: "rotate(-45deg)",
                        position: "relative",
                        top: -2,
                        left: -2,
                      }}
                    >
                      –
                    </span>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
          <Link to={`multiplication`}>
            <Button
              size="small"
              variant="contained"
              style={{
                backgroundColor: "rgb(63, 130, 185, 0.7)",
              }}
            >
              <div style={buttonStyle}>
                <span style={spanStyle}>multiplication</span>
                <div
                  style={{
                    width: 35,
                    height: 35,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      backgroundColor: "#fb00aa",
                      borderRadius: 3,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "#376085",
                        fontWeight: "bold",
                        fontSize: 30,
                        fontFamily: "Quicksand, sans-serif",
                      }}
                    >
                      ×
                    </span>
                  </div>
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      <div className="games__division">
        <div className="games__division-title observation">
          <LinearGradient gradient={["to left", "#ff68f0 ,#17acff"]}>
            Observation games
          </LinearGradient>
        </div>
        <div className="games__division-list">
          <Link to={`birdwatching`}>
            <Button
              size="small"
              variant="contained"
              style={{
                backgroundColor: "rgb(63, 130, 185, 0.7)",
              }}
            >
              <div style={buttonStyle}>
                <span style={spanStyle}>Bird Watching</span>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    backgroundColor: "#fb00aa",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img style={{ width: 25 }} src={BirdIMG} alt="birdwatching" />
                </div>
              </div>
            </Button>
          </Link>
          <Link to={`highorlow`}>
            <Button
              size="small"
              variant="contained"
              style={{
                backgroundColor: "rgb(63, 130, 185, 0.7)",
              }}
            >
              <div style={buttonStyle}>
                <span style={spanStyle}>High or low</span>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    backgroundColor: "#fb00aa",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: 25 }}
                    src={HighOrLowIMG}
                    alt="highorlow"
                  />
                </div>
              </div>
            </Button>
          </Link>
          <Link to={`swipemaster`}>
            <Button
              size="small"
              variant="contained"
              style={{
                backgroundColor: "rgb(63, 130, 185, 0.7)",
              }}
            >
              <div style={buttonStyle}>
                <span style={spanStyle}>Swipe master</span>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    backgroundColor: "#fb00aa",
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <KeyboardBackspaceTwoToneIcon style={{ color: "#376085" }} />
                </div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
