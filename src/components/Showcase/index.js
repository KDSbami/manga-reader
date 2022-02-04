const Showcase = ({ coverUrl, mangaTitle }) => {
  return (
    <div className="overflow-hidden w-full h-min rounded-xl">
      <img
        crossOrigin="anonymous"
        src={coverUrl}
        width="384"
        className="filter grayscale-1 transition ease-in-out duration-300 grayscale-25 hover:grayscale-0"
        alt={mangaTitle}
      />
    </div>
  );
};

export default Showcase;
