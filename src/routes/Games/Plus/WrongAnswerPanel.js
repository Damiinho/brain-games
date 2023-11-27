import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

const WrongAnswerPanel = () => {
  const {
    plusLevel,
    plusTime,
    setCurrentPlusTime,
    setIsPlusStart,
    plusCurrentScore,
    setPlusCurrentScore,
    setPlusIsWrong,
    plusBestScore,
  } = useContext(AppContext);
  const bestResult = plusBestScore.find(
    (element) => element.level === plusLevel && element.time === plusTime
  );
  return (
    <div className="plus__game">
      <div className="plus__game-score">Last score: {plusCurrentScore}</div>
      <div className="plus__game-score">Best score: {bestResult.best}</div>
      <div className="plus__game-challenge">Wrong </div>
      <div className="plus__game-buttons">
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            setPlusCurrentScore(0);
            setPlusIsWrong(false);
            setCurrentPlusTime(plusTime);
          }}
        >
          restart
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setIsPlusStart(false)}
        >
          back
        </Button>
      </div>
    </div>
  );
};

export default WrongAnswerPanel;
