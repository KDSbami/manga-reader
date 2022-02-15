// TODO: https://github.com/KDSbami/manga-reader/issues/38
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { React, useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Theme";
// breakout @ 820px
const InputField = ({ placeholder, value, inputCallback, handleKeyDown, icon, type, customProps }) => {
  let { theme, setTheme } = useContext(ThemeContext);
  let [ hover, setHover ] = useState(false);
  let [ focus, setFocus ] = useState(false);
  let [ themeStyle, setThemeStyle ] = useState(false);
  const additionalProps = customProps ?? {};

  
  useEffect(()=>{
    let lightStyleReactivity = hover || focus ? "bg-background border-accent1" :"bg-background border-foreground-25"
    let darkStyleReactivity = hover || focus ? "bg-background-25 border-accent1" :"bg-background-25"
    
    // let darkModeStyle = theme === "dark" 
    //   ? `transition ease-in-out duration-150 ${themeStyleReactivity}` : "bg-foreground";
    
    let darkModeStyle = theme === "dark" 
      ? `transition ease-in-out duration-150 ${darkStyleReactivity}`
      : `transition ease-in-out duration-150 ${lightStyleReactivity}`

      setThemeStyle(darkModeStyle)
  },[theme, hover, focus])
  
  return (
    <div
      className={`flex flex-row border border-background align-center h-44px rounded w-full overflow-hidden ${themeStyle}`}
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
          type={type??"text"}
          value={value}
          className={`${icon?"pl-2":"pl-4"} placeholder-foreground-25 bg-background outline-none text-foreground-accent text-base w-full ${themeStyle}`}
          onChange={inputCallback}
          onKeyDown={handleKeyDown}
          onBlur={()=>{setFocus(false)}}
          onFocus={()=>{setFocus(true)}}
          {...additionalProps}
        />
    </div>
  );
};

export default InputField;
