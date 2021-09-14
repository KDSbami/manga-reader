const supportedApis = {
    "api.mangadex.org":{
        name:"api.mangadex.org",
        url:"https://api.mangadex.org",
        headerKey:"Authorization",
        headerValue:"Bearer *",
        endpoints: {
            "GET_MANGA_LIST":`/manga`,
            "GET_COVER_LIST":`/cover`
        }  
    },
    "uploads.mangadex.org":{
        name:"api.mangadex.org",
        url:"https://uploads.mangadex.org",
        headerKey:"Authorization",
        headerValue:"Bearer *",
        endpoints: {}
    }
}
export default supportedApis;