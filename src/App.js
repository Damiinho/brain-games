import { Button } from "@mui/material";
import "./App.css";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import { Link } from "react-router-dom";
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
      <div className="games__math">
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
  );
}

export default App;
