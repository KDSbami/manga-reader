import Container from "../src/components/Container";
import InputField from "../src/components/InputField";
import CardContainer from "../src/components/CardContainer";
import { fetchDataWithAuth } from "../src/services/apiServices";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchCall = (query) => {
    fetchDataWithAuth("api.mangadex.org", "GET_MANGA_LIST", {
      title: query,
      limit: "25",
    }).then((res) => {
      console.log(res);
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?q=${query}`);
      searchCall(query);
    }
  };

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container forEnv="development">
      <InputField
        placeholder={"Search for a manga"}
        inputCallback={onQueryChange}
        handleKeyDown={onKeyDown}
        value={query}
      />
      {results ? <CardContainer data={results} /> : null}
    </Container>
  );
};

export default Search;
