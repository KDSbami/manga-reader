import { React } from "react";
import Button from "../components/Button";
import EnvContainer from "../components/EnvContainer";
import DevComponent from "../components/DevComponent";
import coverData from '../Constant/cardContainerData';
import CardContainer from "../components/CardContainer";
import RoundedDiv from "../components/RoundedDiv";

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
        <DevComponent title="200, 100, 15">
          <RoundedDiv width={200} height={100} eccentricity={15} />
        </DevComponent>
        <DevComponent title="Card Container">
              <CardContainer data={coverData}/>
          </DevComponent>
      </EnvContainer>
    </>
  );
}

export default Components;
