import { httpHandler, secureHttpHandler } from './requestHandlers';
import { getApiRoute } from './endpointService';

function fetchOperation(
    handler,
    apiRoute,
    queries = {},  
  ) {
    return new Promise((resolve, reject) => {
      handler
        .get(apiRoute, {params:queries})
        .then((res) => {
            const data = typeof res.data.data !== 'undefined' ? res.data.data : res.data;
            resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

function postOperation(
    handler,
    apiRoute,
    dataContent,
) {
    return new Promise((resolve, reject) => {
        handler
        .post(apiRoute, dataContent)
        .then((res) => {
            const data = typeof res.data.data !== 'undefined' ? res.data.data : res.data;
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

export const fetchData = (apiId, endpointId, queryParams={}) => {
    return fetchOperation(
        httpHandler(),
        getApiRoute(apiId,endpointId),
        queryParams
    );
};

export const postData = (apiId, endpointId, dataContent) => {
    return postOperation(
        httpHandler(),
        getApiRoute(apiId,endpointId),
        dataContent
    );
};

export const fetchDataWithAuth = (apiId, endpointId, queryParams={}) => {
    return fetchOperation(
        secureHttpHandler(apiId),
        getApiRoute(apiId,endpointId),
        queryParams
    );
};

export const postDataWithAuth = (apiId, endpointId, dataContent) => {
    return postOperation(
        secureHttpHandler(apiId),
        getApiRoute(apiId,endpointId),
        dataContent
    );
};