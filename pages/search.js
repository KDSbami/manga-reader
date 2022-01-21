import Container from "../src/components/Container";
import InputField from "../src/components/InputField";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const searchCall = (query) => {
  fetch(`/api/search?q=${query}`)
    .then((response) => response.json())
    .then((response) => response);
};

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchCall = (query) => {
    fetch(`/api/search?q=${query}`)
      .then((response) => response.json())
      .then((response) => {
        setResults(Array.from(response.data));
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
    </Container>
  );
};

export default Search;
