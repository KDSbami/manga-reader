import axios from "axios";
import { getAuthData } from "./endpointService";
import supportedApis from "../constants/apiEndpoints";

const credentialsHandler = (
  config = { headers: {} },
  apiNetwork,
  apiSecurityHeaderKey = "Authorization",
  apiSecurityHeaderValue = `Bearer *`
) => {
  const stringifiedTokenObject = localStorage.getItem(`auth`);
  let tokenObject = {};
  try {
    tokenObject = JSON.parse(stringifiedTokenObject);
    tokenObject = tokenObject ?? {};
    const token = supportedApis["api.mangadex.org"]["callbacks"]["getTokenCallback"](tokenObject);
    if (token) {
      let tokenisedString = apiSecurityHeaderValue.replace("*", token);
      config.headers[apiSecurityHeaderKey] = tokenisedString;
      return axios.create(config);
    }
  } catch(e) {
    console.error("in catch: ",e);
    tokenObject = {};
  }
  console.error("Could not find matching API token.");
  return axios.create({});
};

export const httpHandler = () => {
  const config = {};
  return axios.create(config);
};

export const secureHttpHandler = (apiId) => {
  const apiObject = getAuthData(apiId);
  const config = {
    headers: {},
  };
  return credentialsHandler(
    config,
    apiObject.name,
    apiObject.headerKey,
    apiObject.headerValue
  );
};
