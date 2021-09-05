import { React } from "react";
import Button from "../components/Button";
import ButtonV2 from "../components/ButtonV2";
import EnvContainer from "../components/EnvContainer";
import DevComponent from "../components/DevComponent";
import coverData from '../Constant/cardContainerData';
import CardContainer from "../components/CardContainer";
import Search from "../components/Search";

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
        <div className="flex flex-row flex-wrap">
          <DevComponent title="Button Ui V2">
            <ButtonV2
              animate={true}
              type="big"
              title="Animate on"
              onClick={() => {
                alert("animate on, big");
              }}
            />
          </DevComponent>
          <DevComponent title="Button UI V2">
            <ButtonV2
              animate={false}
              type="small"
              title="Animate off"
              onClick={() => {
                alert("animate off, small");
              }}
            />
          </DevComponent>
        </div>
        <DevComponent title="SearchBar">
          <div className="w-300px">
            <Search placeholder={"Search Manga Name"} inputCallback={()=>{console.log("input")}}/>
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
