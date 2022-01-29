import { React, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../src/components/Container";
import InputField from "../src/components/InputField";
import { ThemeContext } from "../src/components/Theme";
import { fetchData, fetchDataWithAuth } from "../src/services/apiServices";

const Home = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchIcon, setSearchIcon] = useState("");
  let { theme, setTheme } = useContext(ThemeContext);

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
            <InputField
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
