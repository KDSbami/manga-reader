import Link from 'next/link';
import EnvContainer from "../src/components/EnvContainer";
import DevComponent from "../src/components/DevComponent";
import SearchBar from '../src/components/SearchBar';

const Search = () => {
  return (
  <EnvContainer forEnv="development">
    <DevComponent>
      <SearchBar>
      </SearchBar>
    </DevComponent>
  </EnvContainer>
  );
}

export default Search;