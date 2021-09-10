/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "../../../styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import FastAverageColor from "fast-average-color";

export default function Thumbnail({ imageUrl }) {
  // Scale ratio for card size is 1.4
  // TODO: Handle image sizes
  // add average color support
  
  const imageRef = useRef(null);

  const [backgroundColor,setBackgroundColor] = useState('');
  useEffect(() => {
    const fac = new FastAverageColor();
    const color = fac.getColor(imageRef.current, {algorithm: "dominant"});
    setBackgroundColor(color.rgba);
  }, [imageUrl])
  return (
    
    <div className="flex w-194px h-270px overflow-hidden rounded-xl" style={{backgroundColor:backgroundColor}}>
      <div className="h-min self-center">
        <img
          ref={imageRef}
          crossOrigin="anonymous"
          src={imageUrl}
          width="194"
          className="filter grayscale-1 transition ease-in-out duration-300 grayscale-25 hover:grayscale-0"
          alt=""
        />
      </div>
    </div>
  );
}
