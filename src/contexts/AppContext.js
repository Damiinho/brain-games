import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isPlusStart, setIsPlusStart] = useState(false);
  const [isMinusStart, setIsMinusStart] = useState(false);
  const [isDivisionStart, setIsDivisionStart] = useState(false);

  const providerValue = {
    windowWidth,

    isPlusStart,
    setIsPlusStart,
    isMinusStart,
    setIsMinusStart,
    isDivisionStart,
    setIsDivisionStart,
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
