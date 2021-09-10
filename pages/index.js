import { React, useEffect } from "react";
import Container from "../src/components/Container";
import { fetchData, fetchDataWithAuth } from "../src/services/apiServices";

export default function Home() {

  useEffect(()=>{
    fetchDataWithAuth('api.mangadex.org','GET_MANGA_LIST',{offset:"5",limit:"25"})
    .then((data)=> {
      console.log(data)
    })
  },[])
  return <Container>Manga Reader</Container>;
}
