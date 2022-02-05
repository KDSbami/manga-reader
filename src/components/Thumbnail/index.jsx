import Image from "next/image";
import { useState, useEffect } from "react";
import FastAverageColor from "fast-average-color";

const Thumbnail = ({ imageUrl }) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    const fac = new FastAverageColor();
    fac.getColorAsync(imageUrl, { algorithm: "dominant" }).then((color) => {
      setBackgroundColor(color.rgba);
    });
  }, [imageUrl]);

  return (
    <div
      className="flex w-194px h-270px overflow-hidden rounded-xl"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="h-min self-center">
        <Image
          src={imageUrl}
          crossOrigin="anonymous"
          width="194"
          height="270"
          alt=""
        />
      </div>
    </div>
  );
};

export default Thumbnail;
