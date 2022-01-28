// TODO: https://github.com/KDSbami/manga-reader/issues/38
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { React, useContext, useState } from "react";
import { ThemeContext } from "../Theme";
// breakout @ 820px
const InputField = ({ placeholder, value, inputCallback, handleKeyDown, icon }) => {
  let { theme, setTheme } = useContext(ThemeContext);
  let [ hover, setHover ] = useState(false);
  let [ focus, setFocus ] = useState(false);
  let focusHandler = ()=> {
    setFocus(true)
  }
  let darkModeStyle =
    theme === "dark"
      ? "transition ease-in-out duration-150 bg-background hover:bg-foreground-shading"
      : "bg-foreground";
  let shadow =
    "border border-foreground-25 hover:border-foreground transition ease-in-out duration-150 shadow-xl hover:shadow-md";
  return (
    <div
      className={`flex flex-row align-center h-44px border-foreground rounded-full w-full overflow-hidden ${darkModeStyle} ${shadow}`}
    >
      { icon &&
        <div 
          className="h-auto w-8 m-auto pl-2" 
          onClick={focusHandler}
          onMouseOver={focusHandler}
        >
            <img 
              alt=""
              className="h-4 m-auto"
              src={icon}
            />
        </div>
      }
        <input
          placeholder={placeholder}
          value={value}
          className={`${icon?"pl-2":"pl-4"} placeholder-foreground-25 hover:placeholder-accent1 outline-none bg-background text-foreground-accent text-xl w-full ${darkModeStyle}`}
          onChange={inputCallback}
          onKeyDown={handleKeyDown}
        />
    </div>
  );
};

export default InputField;
