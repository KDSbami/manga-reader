import { React } from "react";
import { useRouter } from "next/router";
import { SearchBar } from "../src/components/SearchBar";
import { EnvContainer } from "../src/components/EnvContainer";
import { DevComponent } from "../src/components/DevComponent";

export default function Search() {
  const router = useRouter();
  const handleClick = (click) => { 
    click.preventDefault();
    router.push(href)
  }

  return (
    <>
      <EnvContainer forEnv="development">
        <DevComponent title="Search">
          <SearchBar 
          placeholder={"Search"}
          inputCallback={()=>{console.log("x")}}
          />
        </DevComponent>
      </EnvContainer>
    </>
  );
}