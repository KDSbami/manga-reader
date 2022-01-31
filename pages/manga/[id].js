import Container from "../../src/components/Container";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Manga = () => {
  let manga = {};
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  useEffect(() => {
    fetchManga();
    console.log(cover);
  }, []);
  const fetchManga = () => {
    if (!router.query.id) return;
    fetch(
      `https://api.mangadex.org/manga/${router.query.id}?&includes[]=cover_art`
    )
      .then((res) => res.json())
      .then((res) => {
        setTitle(res.data.attributes.title.en);
        setDescription(res.data.attributes.description.en);
        let fileName;
        res.data.relationships.forEach((relation) => {
          if (relation.type === "cover_art") {
            fileName = relation.attributes.fileName;
            return;
          }
        });
        setCover(
          `https://uploads.mangadex.org/covers/${res.data.id}/${fileName}`
        );
      });
  };

  return (
    <Container>
      <div>{title}</div>
      <div className="text-sm">{description}</div>
      <img src={cover} alt="cover"></img>
    </Container>
  );
};

export default Manga;
