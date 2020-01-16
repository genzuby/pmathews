import React, { useState, createContext } from "react";

export const MenuContext = createContext(null);

export const MenuContextStore = ({ children }) => {
  const [color, setColor] = useState("#fff");
  return (
    <MenuContext.Provider value={{ color, setColor }}>
      {children}
    </MenuContext.Provider>
  );
};
