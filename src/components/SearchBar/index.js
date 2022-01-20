// TODO: Debounce query building and find autocomplete api
// Need to change from onKeyDown listener -> leads to API call spam on keyHold
import { React } from "react";
import { useContext } from "react";
import { ThemeContext } from "../Theme";
import { useRouter } from "next/router";
// breakout @ 820px
const SearchBar = ({ inputCallback, placeholder }) => {
  const router = useRouter();

  const searchCall = (query) => {
    fetch(`/api/search?q=${query}`)
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  const onSearch = (e) => {
    const query = `${e.target.value}`;
    if (e.key === "Enter" && query.length) {
      router.push({
        pathname: "/search",
        query: `q=${query}`,
      });
      searchCall(query);
    }
  };

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
        onKeyDown={onSearch}
      />
    </div>
  );
};

export default SearchBar;
