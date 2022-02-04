const Showcase = ({ coverUrl, mangaTitle }) => {
  return (
    <div className="overflow-hidden w-full h-min rounded-xl">
      <img
        crossOrigin="anonymous"
        src={coverUrl}
        width="384"
        alt={mangaTitle}
      />
    </div>
  );
};

export default Showcase;
