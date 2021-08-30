/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "../../styles/Home.module.css";

export default function Thumbnail({ imageUrl }) {
  // Scale ratio for card size is 1.4
  // TODO: Handle image sizes
  return (
    
    // <div className="flex w-240px h-360px overflow-hidden rounded-2xl bg-background">
      <div className="self-end w-full h-min self-center">
        <img
          src={imageUrl}
          className="w-240px filter rounded-t-2xl grayscale-50 hover:grayscale-0"
          alt=""
        />
      {/* </div> */}
    </div>
  );
}

// 480 x 720
// 240 x 360