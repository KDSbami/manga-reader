const ChapterList = ({ chapters }) => {
  return (
    <div className="font-light">
      <ul className="list-none border rounded-lg">
        <div className="font-bold border-b px-2">Chapters</div>
        {chapters.map((chapter, index) => (
          <li
            className={`${
              index === chapters.length - 1 ? "border-t" : "border"
            } px-2`}
            id={chapter.id}
          >
            {chapter.name}
            <button className="float-right px-2">read</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapterList;
