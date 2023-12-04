import { Button } from "@mui/material";
const Game = () => {
  return (
    <div>
      tu będzie gra
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
