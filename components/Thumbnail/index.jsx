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
    
    <div className="flex w-256px h-363px overflow-hidden" style={{backgroundColor:backgroundColor}}>
      <div className="h-min self-center">
        <img
          crossOrigin="anonymous"
          src={imageUrl}
          width="256"
          className="filter grayscale-1"
          alt=""
        />
      </div>
    </div>
  );
}
