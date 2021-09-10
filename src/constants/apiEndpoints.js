const supportedApis = {
    "api.mangadex.org":{
        name:"api.mangadex.org",
        url:"https://api.mangadex.org",
        headerKey:"Authorization",
        headerValue:"Bearer *",
        endpoints: {
            "GET_MULTIPLE_MANGA":`/manga`
        }
        
    }
}

export function getEndpoint(apiId,endpointId) {
    if(apiId && endpointId) return supportedApis[apiId][endpointId];
    return ""
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

export function getUrl(apiId) {
    if(apiId) return supportedApis[apiId]['url'];
    return ""
}
