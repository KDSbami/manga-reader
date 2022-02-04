import { useRouter } from "next/router";
import { fetchDataWithAuth } from "../../src/services/apiServices";

// FIXME: Needs auth to generate images and cdn url
// https://api.mangadex.org/docs.html#section/Reading-a-chapter-using-the-API

const Read = () => {
  const router = useRouter();
  const { id } = router.query;

  const getVolumeList = (volumesObject) => {
    let volumesBuilder = [];
    let volumes = [];
    if (volumesObject === undefined) return;
    let keys = Object.keys(volumesObject);
    if (keys.length) {
      keys.forEach((key) => {
        volumesBuilder.push(volumesObject[key]);
      });
      volumesBuilder.forEach((vol) => {
        volumes.push({
          volume: vol.volume,
          chapters: vol.chapters,
        });
      });
    }
    return volumes;
  };

  const getChaptersList = (volumes) => {
    let chapterIdObject = [];
    let chapterIds = [];
    volumes.forEach((volume) => {
      chapterIdObject.push(volume.chapters);
    });
    Object.keys(chapterIdObject).forEach((key) => {
      for (let i = 0; i < Object.keys(chapterIdObject).length; i++)
        if (chapterIdObject[key][i] !== undefined) {
          // let vol = Number(key)+1;
          // returnObj.volume = vol;
          // console.log(returnObj.vol)
          // returnObj.vol.chapter = i;
          // returnObj.volume[Number(key)+1][i].push(chapterIdObject[key][i].id)
          // For now, just spitting array of ids
          chapterIds.push(chapterIdObject[key][i].id);
        }

    });
    return chapterIds;
  };

  const fetchChapter = () => {
    let chapterIds = [];
    try {
      fetch(`https://api.mangadex.org/manga/${id}/aggregate`)
        .then((res) => res.json())
        .then((res) => {
          let volumes = getVolumeList(res.volumes);
          chapterIds = getChaptersList(volumes);
          chapterIds.forEach(chapterId => {
            console.log(chapterId);
            fetch(`https://api.mangadex.org/chapter/${chapterId}`)
            .then(res => res.json())
            .then((res) => {
              console.log(res.data)
            })
          })
        })
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {fetchChapter()}
      {id}
    </div>
  );
};

export default Read;
