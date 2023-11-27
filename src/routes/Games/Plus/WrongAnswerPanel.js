import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Textfit } from "@ayushmw/react-textfit";

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
    windowWidth,
  } = useContext(AppContext);
  const bestResult = plusBestScore.find(
    (element) => element.level === plusLevel && element.time === plusTime
  );
  return (
    <div className="plus__game">
      {" "}
      <div className="plus__game-buttons">
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setPlusCurrentScore(0);
            setPlusIsWrong(false);
            setCurrentPlusTime(plusTime);
          }}
          style={{
            fontFamily: "Changa, serif",
          }}
        >
          {windowWidth > 320 ? (
            <Textfit mode="single">restart</Textfit>
          ) : (
            "restart"
          )}
        </Button>
        <Button
          variant="contained"
          color="info"
          onClick={() => setIsPlusStart(false)}
          style={{
            fontFamily: "Changa, serif",
          }}
        >
          {windowWidth > 320 ? <Textfit mode="single">back</Textfit> : "back"}
        </Button>
      </div>
      <div className="plus__game-challenge">
        <Textfit mode="single">Wrong answer</Textfit>
      </div>{" "}
      <div className="plus__game-score">
        Last score: {plusCurrentScore}
        <br />
        Best score: {bestResult.best}
      </div>
    </div>
  );
};

export default WrongAnswerPanel;
