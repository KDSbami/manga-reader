import {React,createContext, useState, useEffect} from 'react';

export const ThemeContext = createContext();

export default function Theme({ children }) {

  const [theme, setTheme] = useState("");
  useEffect(() =>{
    debugger;
    let storedColour = (localStorage.getItem('theme')) ? (localStorage.getItem('theme')) : 'theme-dark';
    switch(storedColour){
      case 'theme-dark':
        storedColour = `dark`;
        break;
      case 'theme-light':
        storedColour = `light`;
        break;
      default:
        storedColour = `dark`;
        break;
    }
    setTheme(storedColour)
  },[])
  const defaultContext = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  );
};