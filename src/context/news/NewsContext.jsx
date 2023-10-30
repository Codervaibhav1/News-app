import { createContext, useReducer } from "react";
import { NewsReducer } from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const initalState = {
    newsAll: [],
  };

  const [state, dispatch] = useReducer(NewsReducer, initalState);

  return (
    <NewsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
