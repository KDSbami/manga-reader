import { ThemeContext } from "../components/Theme";
import { React, useContext, useEffect } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
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
          <div className="flex flex-row justify-center m-4 w-max">
            {[
              {cover:"https://uploads.mangadex.org/covers/32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/f5873770-80a4-470e-a11c-63b709d87eb3.jpg",name:"Solo Leveling"},
              {cover:"https://uploads.mangadex.org/covers/8f3e1818-a015-491d-bd81-3addc4d7d56a/4113e972-d228-4172-a885-cb30baffff97.jpg.256.jpg"},
            ].map((manga) => (
              <Card key={manga.name} image={manga.cover} title={manga.name} />
            ))}
          </div>
        </div>
      </EnvContainer>
    </>
  );
}

export default Components;
