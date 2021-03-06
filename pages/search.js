import Container from "../src/components/Container";
import SearchField from "../src/components/SearchField";
import CardContainer from "../src/components/CardContainer";
import { fetchDataWithAuth } from "../src/services/apiServices";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Search = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("Search");
  const [results, setResults] = useState([]);
  const [empty, setEmpty] = useState(false);
  const { q } = router.query;

  useEffect(() => {
    if (q !== undefined) {
      setTitle(q === "" ? "Manga" : q);
      setQuery(q);
      searchCall(q);
    }
  }, [q]);

  const searchCall = (query) => {
    let searchData = [];
    fetchDataWithAuth("api.mangadex.org", "GET_MANGA_LIST", {
      title: query,
      "contentRating[]": "safe",
      "includes[]": "cover_art",
      limit: "25",
    }).then((res) => {
      res.forEach((manga) => {
        let coverUrl = "";
        manga.relationships.forEach((relation) => {
          if (relation.type !== "cover_art") return;
          coverUrl = `https://uploads.mangadex.org/covers/${manga.id}/${relation.attributes.fileName}`;
        });
        searchData.push({
          id: manga.id,
          name: manga.attributes.title.en,
          cover: coverUrl,
        });
      });
      if (searchData.length === 0) {
        setEmpty(!empty);
        setResults([]);
      } else {
        setEmpty(false);
        setResults(searchData);
      }
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?q=${query}`);
      setTitle(query);
    }
  };

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <SearchField
        placeholder={"Search for a manga"}
        inputCallback={onQueryChange}
        handleKeyDown={onKeyDown}
        value={query}
      />
      {empty ? (
        <div className="flex justify-center my-10">
          <div className="center">No results :(</div>
        </div>
      ) : null}
      {results ? <CardContainer data={results} /> : null}
    </Container>
  );
};

export default Search;
