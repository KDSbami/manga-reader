// TODO: Debounce query building and find autocomplete api
// Need to change from onKeyDown listener -> leads to API call spam on keyHold
import { React, useEffect, useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
import { useRouter } from "next/router";
// breakout @ 820px
const InputField = ({ placeholder, value, inputCallback, handleKeyDown }) => {
  let { theme, setTheme } = useContext(ThemeContext);
  let darkModeStyle =
    theme === "dark"
      ? "transition ease-in-out duration-150 bg-foreground hover:bg-foreground-shading"
      : "bg-foreground";
  let shadow =
    "border border-foreground-25 hover:border-foreground transition ease-in-out duration-150 shadow-xl hover:shadow-md";
  return (
    <div
      className={`flex flex-row align-center h-44px rounded-full w-full pl-8 bg-foreground overflow-hidden ${darkModeStyle} ${shadow}`}
    >
      <input
        placeholder={placeholder}
        value={value}
        className={`placeholder-foreground-25 hover:placeholder-accent1 outline-none bg-foreground text-foreground-accent text-xl w-full ${darkModeStyle}`}
        onChange={inputCallback}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default InputField;
