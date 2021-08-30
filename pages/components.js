import { ThemeContext } from "../components/Theme";
import { React, useContext, useEffect } from "react";
import Button from "../components/Button";
import EnvContainer from "../components/EnvContainer";
import Error from "next/error";

function Components() {
  return (
    <>
      <EnvContainer forEnv="development">
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-col justify-center m-4 w-max h-32">
            <Button
              animate={true}
              type="big"
              title="Animate on"
              onClick={() => {
                alert("animate on, big");
              }}
            />
          </div>
          <div className="flex flex-col justify-center m-4 w-max h-32">
            <Button
              animate={false}
              type="small"
              title="Animate off"
              onClick={() => {
                alert("animate off, small");
              }}
            />
          </div>
        </div>
      </EnvContainer>
    </>
  );
}

export default Components;
