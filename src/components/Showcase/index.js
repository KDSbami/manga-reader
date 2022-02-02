const Showcase = ({ coverUrl, mangaTitle }) => {
  return (
    <div className="flex overflow-hidden w-full rounded-xl">
      <div className="h-min self-center">
        <img
          crossOrigin="anonymous"
          src={coverUrl}
          width="384"
          className="filter grayscale-1 transition ease-in-out duration-300 grayscale-25 hover:grayscale-0"
          alt={mangaTitle}
        />
      </div>
    </div>
  );
};

export default Showcase;
