import { React} from "react";
import Card from "../Card";


function Components({ data }) {
  return (
              <div className="grid grid-cols-cardHolder">
                {data.map((manga,index) => (
                  <div className="flex flex-row justify-center" key={manga.name+index}>
                    <Card  image={manga.cover} title={manga.name} />
                  </div>
                ))}
              </div>
  );
}

export default Components;
