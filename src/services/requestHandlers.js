import axios from 'axios';
import { getAuthData } from '../constants/apiEndpoints';

function credentialsHandler(config = { headers: {} },apiNetwork, apiSecurityHeaderKey = 'Authorization', apiSecurityHeaderValue = `Bearer *`) {
    const token = localStorage.getItem(`${apiNetwork}.auth`);
    if (token) {
        let tokenisedString = apiSecurityHeaderValue.replace('*',token);
        config.headers[apiSecurityHeaderKey] = tokenisedString;
        return axios.create(config);
    }
    console.error("Could not find matching API token.")
    return axios.create({});
  }

export function httpHandler() {
    const config = {};
    return axios.create(config);
}

export function secureHttpHandler(apiId) {
    const apiObject = getAuthData(apiId);
    const config = {
        headers:{}
    };
    return credentialsHandler(config,apiObject.name,apiObject.headerKey,apiObject.headerValue);
}