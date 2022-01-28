import { React, useState } from "react";
import { useRouter } from "next/router";
import Container from "../src/components/Container";
import InputField from "../src/components/InputField";
import { fetchData, fetchDataWithAuth } from "../src/services/apiServices";

const Home = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

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
        <div className="row-start-3 pt-2">
          <div className="max-w-640px m-auto">
            <InputField
              placeholder={""}
              inputCallback={onQueryChange}
              handleKeyDown={onKeyDown}
              value={query}
            />
          </div>
        </div>  
      </div>
      
    </Container>
  );
};

export default Home;
