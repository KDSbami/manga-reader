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
              {cover:"https://i.pinimg.com/originals/36/3d/d6/363dd6296ac84dc8876b13d734756771.jpg", name:"Jujutsu Kaisen"},
              {cover:"https://cdn.archonia.com/images/1-70387203-1-1-original1/demon-slayer-kimetsu-no-yaiba-vol-06-gn-manga.jpg", name:"Demon Slayer"},
              {cover:"https://i.pinimg.com/originals/ba/5a/70/ba5a7064b4b1f9b260df25901008e21c.jpg",name:"Nobara"},
              {cover:"https://images-na.ssl-images-amazon.com/images/I/81HC2HywjbL.jpg",name:"Chainsaw Man"}
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
