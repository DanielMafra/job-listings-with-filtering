import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState([]);

  //this consts is just for alternate URL to fetch in localhost (development mode)
  const url = ["http://192.168.15.120:3000/api/data.json", "http://localhost:3000/api/data.json"];
  const screen = window.innerWidth;
  //---

  useEffect(async () => {
    const response = await fetch(screen <= 375 ? url[0] : url[1]);
    const json = await response.json();
    setJobs(json);
  }, []);

  return (
    <GlobalContext.Provider value={{ jobs, filter, setFilter }}>
      {children}
    </GlobalContext.Provider>
  );
};