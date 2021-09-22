const supportedApis = {
  "api.mangadex.org": {
    name: "api.mangadex.org",
    url: "https://api.mangadex.org",
    headerKey: "Authorization",
    headerValue: "Bearer *",
    endpoints: {
      GET_MANGA_LIST: `/manga`,
    },
  },
};
export default supportedApis;
