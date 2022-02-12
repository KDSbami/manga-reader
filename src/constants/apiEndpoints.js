const supportedApis = {
  "api.mangadex.org": {
    name: "api.mangadex.org",
    url: "https://api.mangadex.org",
    headerKey: "Authorization",
    headerValue: "Bearer *",
    endpoints: {
      GET_MANGA_LIST: `/manga`,
      USER_LOGIN: `/auth/login`,
    },
  },
};
export default supportedApis;
