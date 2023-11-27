import { Button } from "@mui/material";
import Timer from "./Games/Plus/Timer";

const Game = () => {
  return (
    <div>
      tu będzie gra
      <Timer />
      <Button
        onClick={() => {
          console.log("kliknięty");
        }}
      >
        kliknij mnie
      </Button>
    </div>
  );
};

export default Game;
