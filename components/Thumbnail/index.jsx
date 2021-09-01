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
            // container.style.backgroundColor = color.rgba;
            // container.style.color = color.isDark ? '#fff' : '#000';
            setBackgroundColor(color.rgba);
            console.log(color)
        })
        .catch(e => {
            console.log(e);
        });
  }, [imageUrl])
  return (
    
    <div className="flex w-128px h-180px overflow-hidden rounded-2xl" style={{backgroundColor:backgroundColor}}>
      <div className="h-min self-center">
        <img
          src={imageUrl}
          width="64"
          className="filter rounded-2xl grayscale-0 hover:grayscale-0"
          alt=""
        />
      </div>
    </div>
  );
}

// 480 x 720
// 240 x 360