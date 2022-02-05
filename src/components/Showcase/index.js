import Image from "next/image";

const Showcase = ({ coverUrl, mangaTitle }) => {
  return (
    <div className="overflow-hidden w-full h-min rounded-xl">
      <Image
        src={coverUrl}
        crossOrigin="anonymous"
        // w:h = 2:3
        width="256"
        height="384"
        alt={mangaTitle}
      />
    </div>
  );
};

export default Showcase;
