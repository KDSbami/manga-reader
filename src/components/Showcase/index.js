import Image from "next/image";

const Showcase = ({ coverUrl, mangaTitle }) => {
  return (
    <div>
      <Image
        className="overflow-hidden border border-opacity-0 rounded-lg w-256px h-384px"
        src={coverUrl}
        crossOrigin="anonymous"
        // layout="respons"
        // w:h = 2:3 => 256:384
        width="256"
        height="384"
        alt={mangaTitle}
      />
    </div>
  );
};

export default Showcase;
