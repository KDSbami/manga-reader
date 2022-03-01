import callbacks from '../constants/endpointCallbacks';
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
    callbacks: {
      storeTokenCallback:callbacks.putMangadexToken,
      getTokenCallback:callbacks.getMangadexToken
    }
  },
};
export default supportedApis;
