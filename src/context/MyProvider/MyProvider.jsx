import React, { createContext } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const data = "This is Tanushri Das";
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default MyProvider;
