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
      </div>
    </div>
  );
}

export default App;
