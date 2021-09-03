/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "../../styles/Home.module.css";
import { useState,useEffect } from "react";
import FastAverageColor from "fast-average-color";

export default function Thumbnail({ imageUrl }) {
  // Scale ratio for card size is 1.4
  // TODO: Handle image sizes
  // add average color support
  
  const [backgroundColor,setBackgroundColor] = useState('');
  useEffect(() => {
    const fac = new FastAverageColor();
    fac.getColorAsync(imageUrl,{ algorithm: 'dominant' })
        .then(color => {
            setBackgroundColor(color.rgba);
            console.log(color)
        })
        .catch(e => {
            console.log(e);
        });
  }, [imageUrl])
  return (
    
    <div className="flex w-194px h-270px overflow-hidden rounded-xl" style={{backgroundColor:backgroundColor}}>
      <div className="h-min self-center">
        <img
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
