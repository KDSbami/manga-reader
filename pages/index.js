import { React, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../src/components/Container";
import SearchField from "../src/components/SearchField";
import { ThemeContext } from "../src/components/Theme";
import { AuthContext } from "../src/components/Token";
import { fetchData, fetchDataWithAuth } from "../src/services/apiServices";

const Home = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchIcon, setSearchIcon] = useState("");
  let { theme, setTheme } = useContext(ThemeContext);
  let { tokens, setTokens } = useContext(AuthContext);

  useEffect(()=>{
    setSearchIcon(
      theme==="dark"
      ?"https://cdn.discordapp.com/attachments/936709028657127477/936709131719565332/searchDM.png"
      :"https://cdn.discordapp.com/attachments/936709028657127477/936709132046700554/searchLM.png")
  },[theme])

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  }

  const onKeyDown = (e) => {
    if (e.key !== "Enter") return;
    router.push(`/search?q=${query}`);
  }

  return (
    <Container>
      <div className="grid grid-rows-5 h-full">
        <div className="row-start-2 mx-auto flex items-end text-5xl">
          M.
        </div>
        <div className="row-start-3 pt-2">
          <div className="max-w-640px m-auto p-4">
            <SearchField
              placeholder={""}
              inputCallback={onQueryChange}
              handleKeyDown={onKeyDown}
              value={query}
              icon={searchIcon} 
            />
          </div>
        </div>  
      </div>
      
    </Container>
  );
};

export default Home;
