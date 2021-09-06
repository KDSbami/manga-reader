import { React } from "react";
import { pathGenerator } from "../../utility/pathGenerator";

function RoundedDiv({width, height, eccentricity, fill="black"}) {
  return (
    <>
    <svg width={width} height={height} viewBox={`-${width} -${height} ${2*width} ${2*height}`} fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d={pathGenerator(width, height, eccentricity)} fill={fill}/>        
    </svg>
    </>
  );
}

export default RoundedDiv;
