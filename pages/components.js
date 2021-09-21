import { React } from "react";
import Button from "../src/components/Button";
import EnvContainer from "../src/components/EnvContainer";
import DevComponent from "../src/components/DevComponent";
import coverData from '../src/constants/cardContainerData';
import CardContainer from "../src/components/CardContainer";
import RoundedDiv from "../src/components/RoundedDiv";
import SearchBar from "../src/components/SearchBar";

function Components() {
  return (
    <>
      <EnvContainer forEnv="development">
        <div className="flex flex-row flex-wrap">
          <DevComponent title="Button">
            <Button
              animate={true}
              type="big"
              title="Animate on"
              onClick={() => {
                alert("animate on, big");
              }}
            />
          </DevComponent>
          <DevComponent title="Button">
            <Button
              animate={false}
              type="small"
              title="Animate off"
              onClick={() => {
                alert("animate off, small");
              }}
            />
          </DevComponent>
        </div>
        <DevComponent title="100, 100, 12">
          <RoundedDiv width={100} height={100} eccentricity={12} />
        </DevComponent>
        <DevComponent title="200, 100, 30">
          <RoundedDiv width={200} height={100} eccentricity={12} resolution={250} />
        </DevComponent>
        <DevComponent title="SearchBar">
          <div className="w-300px">
            <SearchBar placeholder={"Search Manga Name"} inputCallback={()=>{console.log("input")}}/>
          </div>
        </DevComponent>
        <DevComponent title="Card Container">
              <CardContainer data={coverData}/>
        </DevComponent>
      </EnvContainer>
    </>
  );
}

export default Components;
