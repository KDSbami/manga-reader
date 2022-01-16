// TODO: Debounce query building and find autocomplete api
import { React } from "react";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
import { useRouter } from "next/router";
// breakout @ 820px
const SearchBar = ({ inputCallback, placeholder }) => {
  const router = useRouter();
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
        className={`placeholder-foreground-25 hover:placeholder-accent1 outline-none bg-foreground text-foreground-accent text-xl w-full ${darkModeStyle}`}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push({
              pathname: "/search",
              query: `q=${e.target.value}`,
            });
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
