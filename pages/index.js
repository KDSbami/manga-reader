import { React, useEffect } from "react";
import Container from "../src/components/Container";
import { fetchData, fetchDataWithAuth } from "../src/services/apiServices";
import { getEndpoint } from "../src/services/endpointService";
import {getFlow} from '../src/services/apiFlowServices';

export default function Home() {

  useEffect(()=>{
    fetchDataWithAuth('api.mangadex.org',getEndpoint('api.mangadex.org','GET_MANGA_LIST'),{offset:"5",limit:"25"})
    .then((data)=> {
      console.log(data)
    })
    getFlow('api.mangadex.org','searchManga')({'contentRating[]':'erotica'});
  },[])
  return <Container>Manga Reader</Container>;
}
