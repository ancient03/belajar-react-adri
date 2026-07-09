import { createContext, useState, useEffect } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};
