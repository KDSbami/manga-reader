import supportedApis from '../constants/apiEndpoints';

function getEndpoint(apiId,endpointId) {
    if(apiId && endpointId) return supportedApis[apiId]['endpoints'][endpointId];
    return ""
}

function getUrl(apiId) {
    if(apiId) return supportedApis[apiId]['url'];
    return ""
}

export function getApiRoute(apiId, endpointId) {
    
    if(apiId && endpointId) return `${getUrl(apiId)}${getEndpoint(apiId,endpointId)}`;
    console.error("Could not find matching API route");
    return ``;
}

export function getAuthData(apiId) {
    if(apiId) return {
        name:supportedApis[apiId]['name'],
        headerKey:supportedApis[apiId]['headerKey'],
        headerValue:supportedApis[apiId]['headerValue']
    };
    console.error("Could not find matching API ID");
    return {}
}
