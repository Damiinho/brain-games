import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const PlusGameContent = () => {
  const {
    plusLevel,
    plusTime,
    isPlusStart,
    setIsPlusStart,
    plusCurrentScore,
    setPlusCurrentScore,
    plusIsWrong,
    setPlusIsWrong,
    plusBestScore,
    setPlusBestScore,
  } = useContext(AppContext);
  const traineeNumbers = [1, 2, 3, 4, 5];
  const [currentTime, setCurrentTime] = useState(plusTime);

  const bestResult = plusBestScore.find(
    (element) => element.level === plusLevel && element.time === plusTime
  );

  const firstNumber = traineeNumbers[Math.floor(Math.random() * 5)];
  const secondNumber = traineeNumbers[Math.floor(Math.random() * 5)];
  const result = firstNumber + secondNumber;
  const possibleResults = [result - 1, result, result + 1];
  const visibleResult = possibleResults[Math.floor(Math.random() * 3)];
  const isCorrect = result === visibleResult ? true : false;

  console.log(result);
  console.log(visibleResult);
  console.log(isCorrect);

  const handleIncorrect = () => {
    if (plusCurrentScore > bestResult.best) {
      setPlusBestScore((prevScore) =>
        prevScore.map((el) =>
          el.level === plusLevel && el.time === plusTime
            ? { ...el, best: plusCurrentScore }
            : el
        )
      );
    }
    if (!isCorrect) {
      setPlusCurrentScore(plusCurrentScore + 1);
    } else {
      setPlusIsWrong(true);
    }
  };
  const handleCorrect = () => {
    if (plusCurrentScore > bestResult.best) {
      setPlusBestScore((prevScore) =>
        prevScore.map((el) =>
          el.level === plusLevel && el.time === plusTime
            ? { ...el, best: plusCurrentScore }
            : el
        )
      );
    }
    if (isCorrect) {
      setPlusCurrentScore(plusCurrentScore + 1);
    } else {
      setPlusIsWrong(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      handleCorrect();
    }
    if (e.key === "ArrowLeft") {
      handleIncorrect();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Usuń nasłuchiwanie zdarzenia podczas usuwania komponentu
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]); // Użyj handleKeyDown jako zależności, aby uniknąć błędów związanych z domknięciem

  useEffect(() => {
    if (currentTime > 0) {
      const timer = setTimeout(() => {
        const newTime = Number((currentTime - 0.1).toFixed(1));
        setCurrentTime(newTime);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      if (isCorrect) {
        handleIncorrect();
      } else handleCorrect();
    }
  }, []);

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    fontSize: 20,
    fontFamily: "Changa, serif",
  };
  const Challenge = () => (
    <>
      <div className="plus__game-score">
        Current score: {plusCurrentScore}, timer: {currentTime}
      </div>
      <div className="plus__game-time">
        <div
          className="plus__game-time__contain"
          style={{
            position: "absolute",
            width: 200,
            height: 25,
            right: 0,
            top: 0,
            backgroundColor: "#111111",
          }}
        ></div>
      </div>
      <div className="plus__game-challenge">
        {firstNumber} + {secondNumber} = {visibleResult}
      </div>
      {/* poziom: {plusLevel}, czas: {plusTime} */}
      <div className="plus__game-buttons">
        <Button variant="contained" color="error" onClick={handleIncorrect}>
          <div style={buttonStyle}>
            incorrect
            <CancelIcon fontSize="large" />
          </div>
        </Button>
        <Button variant="contained" color="success" onClick={handleCorrect}>
          <div style={buttonStyle}>
            correct
            <CheckCircleIcon fontSize="large" />
          </div>
        </Button>
      </div>
    </>
  );
  const Wrong = () => (
    <>
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
    </>
  );

  return (
    <div className="plus__game">
      {!plusIsWrong && <Challenge />}
      {plusIsWrong && <Wrong />}
      {/* <Button onClick={() => setIsPlusStart(false)}>wróć</Button> */}
    </div>
  );
};

export default PlusGameContent;
