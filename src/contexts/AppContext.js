import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isPlusStart, setIsPlusStart] = useState(false);
  const [isMinusStart, setIsMinusStart] = useState(false);
  const [isDivisionStart, setIsDivisionStart] = useState(false);
  const [isBirdWatchingStart, setIsBirdWatchingStart] = useState(false);
  const [isHighOrLowStart, setIsHighOrLowStart] = useState(false);
  const [isSwipeMasterStart, setIsSwipeMasterStart] = useState(false);

  const playSuccessSound = () => {
    const audio = new Audio("/sounds/success.wav");
    audio.play();
  };
  const playFailSound = () => {
    const audio = new Audio("/sounds/fail.mp3");
    audio.play();
  };
  const playEndSound = () => {
    const audio = new Audio("/sounds/score.mp3");
    audio.play();
  };

  const providerValue = {
    windowWidth,

    isPlusStart,
    setIsPlusStart,
    isMinusStart,
    setIsMinusStart,
    isDivisionStart,
    setIsDivisionStart,
    isBirdWatchingStart,
    setIsBirdWatchingStart,
    isHighOrLowStart,
    setIsHighOrLowStart,
    isSwipeMasterStart,
    setIsSwipeMasterStart,
    playSuccessSound,
    playFailSound,
    playEndSound,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
