import useFetch from "./fetch ";
import React, { useState, useEffect,useContext } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("avenger");
  const {  movie } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider value={{ query, movie, setQuery}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };