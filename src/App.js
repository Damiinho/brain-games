import { Button } from "@mui/material";
import "./App.css";
import AddToPhotosRoundedIcon from "@mui/icons-material/AddToPhotosRounded";
import { Link } from "react-router-dom";
function App() {
  const buttonStyle = {
    color: "#ff00ab",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  };
  const spanStyle = {
    color: "#ffe7dc",
    fontSize: 30,
    fontFamily: "Changa, serif",
  };

  return (
    <div className="games">
      <div className="games__math">
        <Link to={`plus`}>
          <Button size="large" variant="contained" style={{ opacity: 0.8 }}>
            <div style={buttonStyle}>
              <span style={spanStyle}>plus</span>
              <AddToPhotosRoundedIcon fontSize="large" corlor="secondary" />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default App;
