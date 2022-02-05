import Container from "../../src/components/Container";
import Button from "../../src/components/Button";
import Showcase from "../../src/components/Showcase";
import InputField from "../../src/components/InputField";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";

const Manga = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [query, setQuery] = useState(title);
  const { id } = router.query;
  useEffect(() => {
    if (id !== undefined) {
      fetchManga();
    }
  }, [id]);

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key !== "Enter") return;
    router.push(`/search?q=${query}`);
  };

  const fetchManga = () => {
    if (!id) return;
    try {
      fetch(`https://api.mangadex.org/manga/${id}?&includes[]=cover_art`)
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
        <div className="grid grid-template-cols: repeat(2, minmax(0, auto)) grid-template-rows: repeat(1, minmax(0, 1fr)) gap-y-2 gap-x-4">
          <div className="row-start-1 col-span-2">
            <InputField
              inputCallback={onQueryChange}
              handleKeyDown={onKeyDown}
              value={query}
            />
          </div>
          <div className="row-start-2">
            <div className="col-start-1">
            {cover ? (
                <Showcase
                  coverUrl={cover}
                  mangaTitle={title}
                />
              ) : null}
            </div>
          </div>
          <div className="col-start-2 row-start-2">
            <div>
              {title}
              <div className="text-sm font-normal">{description}</div>
              <div className="py-4 row-end-2">
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
