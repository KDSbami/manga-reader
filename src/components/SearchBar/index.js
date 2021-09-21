import { React} from "react";
import { useContext } from 'react';
import { ThemeContext } from "../Theme";
// breakout @ 820px
function SearchBar({ inputCallback, placeholder }) {
    let {theme, setTheme} = useContext(ThemeContext);
    let darkModeStyle = theme === 'dark'?"transition ease-in-out duration-150 bg-foreground hover:bg-foreground-shading" :"bg-foreground";
    let shadow = "border border-foreground-25 hover:border-foreground transition ease-in-out duration-150 shadow-xl hover:shadow-md";
    return (
        <div className={`flex flex-row align-center h-44px rounded-full w-full pl-8 bg-foreground overflow-hidden ${darkModeStyle} ${shadow}`}>
            <input placeholder={placeholder} className={`placeholder-foreground-25 hover:placeholder-accent1 outline-none bg-foreground text-foreground-accent text-xl w-full ${darkModeStyle}`} onInput={inputCallback} />
        </div>
    )
}

export default SearchBar;
