
import { fetchData, fetchDataWithAuth } from "../services/apiServices";
import { getEndpoint } from "./endpointService";

const mangadexCoverArtString= async (coverId,mangaId,size="") => {
    const imageSize = size==='512'?'.512.jpg':'.256.jpg';
    const coverData = await fetchData('api.mangadex.org',`${getEndpoint('api.mangadex.org','GET_COVER_LIST')}/${coverId}`)
    if(coverData.result === 'ok'){
        let fileName = coverData.data.attributes.fileName;
        return `https://uploads.mangadex.org/covers/${mangaId}/${fileName}${imageSize}`;
    } else {
        return "";
    }
};

const mangadexSearchManga= async (params={}) => {
    let query = `&`
    Object.keys(params).forEach(element => {
        query+=`${element}=${params[element]}&`
    });
    const coverData = await fetchData('api.mangadex.org',`${getEndpoint('api.mangadex.org','GET_MANGA_LIST')}?${query}`)
    console.log(coverData);
    return coverData
};

export const api_mangadex_org_flow = {
    getCoverArtUrl:mangadexCoverArtString,
    searchManga:mangadexSearchManga
}