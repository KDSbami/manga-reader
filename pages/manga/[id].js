import Container from "../../src/components/Container";
import Button from "../../src/components/Button";
import Showcase from "../../src/components/Showcase";
import InputField from "../../src/components/InputField";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";

const Manga = () => {
  let manga = {};
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [query, setQuery] = useState(title);
  useEffect(() => {
    fetchManga();
  }, []);

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key !== "Enter") return;
    router.push(`/search?q=${query}`);
  };

  const fetchManga = () => {
    if (!router.query.id) return;
    try {
      fetch(
        `https://api.mangadex.org/manga/${router.query.id}?&includes[]=cover_art`
      )
        .then((res) => res.json())
        .then((res) => {
          setTitle(res.data.attributes.title.en);
          setQuery(res.data.attributes.title.en);
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-2 grid-template-rows: repeat(1, minmax(0, 1fr)) gap-y-2">
          <div className="row-start-1 col-span-full">
            <InputField
              inputCallback={onQueryChange}
              handleKeyDown={onKeyDown}
              value={query}
            />
          </div>
          <div className="row-start-2">
            <div className="w-full col-start-1">
              <Showcase coverUrl={cover} mangaTitle={title} />
            </div>
          </div>
          <div className="col-start-2">
            <div>
              {title}
              <div className="text-sm">{description}</div>
              <div className="row-end-2">
                <Button
                  type="small"
                  animate={true}
                  title={`read ${title}`}
                  onClick={() => {
                    alert(`reading`);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Manga;
