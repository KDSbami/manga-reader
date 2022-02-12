// TODO: https://github.com/KDSbami/manga-reader/issues/38
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { React, useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Theme";
// breakout @ 820px
const SearchField = ({ placeholder, value, inputCallback, handleKeyDown, icon, type, style }) => {
  let { theme, setTheme } = useContext(ThemeContext);
  let [ hover, setHover ] = useState(false);
  let [ focus, setFocus ] = useState(false);
  let [ themeStyle, setThemeStyle ] = useState(false);

  useEffect(()=>{
    let themeStyleReactivity = hover || focus ? "bg-foreground-shading" : "bg-background"
    
    let darkModeStyle = theme === "dark" 
      ? `transition ease-in-out duration-150 ${themeStyleReactivity}` : "bg-foreground";
    
      setThemeStyle(darkModeStyle)
  },[theme, hover, focus])
  
  let shadow = `border ${hover || focus?"border-foreground":"border-foreground-25"} ${hover?"transition ease-in-out duration-150 shadow-xl hover:shadow-md":`${focus?"shadow-md":"shadow-xl"}`}`;
  return (
    <div
      className={`flex flex-row align-center h-44px border-foreground rounded-full w-full overflow-hidden ${themeStyle} ${shadow}`}
      onMouseOver={()=>{setHover(true)}}
      onMouseOut={()=>{setHover(false)}}
    >
      { icon &&
        <div 
          className={`h-auto w-8 m-auto pl-2`} 
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
          type={type?type:"text"}
          value={value}
          className={`${icon?"pl-2":"pl-4"} placeholder-foreground-25 outline-none text-foreground-accent text-xl w-full ${themeStyle}`}
          onChange={inputCallback}
          onKeyDown={handleKeyDown}
          onBlur={()=>{console.log("out focused");setFocus(false)}}
          onFocus={()=>{setFocus(true)}}
        />
    </div>
  );
};

export default SearchField;
