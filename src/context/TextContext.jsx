import { createContext, useContext } from "react";
import { useTextsReducer } from "../store/index.jsx";

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const textContext = useTextsReducer();

  return (
    <TextContext.Provider value={textContext}>{children}</TextContext.Provider>
  );
};

export const useTextContext = () => useContext(TextContext);
