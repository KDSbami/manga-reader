import { httpHandler, secureHttpHandler } from '../helpers/requestHandlers';
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

export const fetchData = (apiId, endpoint, queryParams={}) => {
    return fetchOperation(
        httpHandler(),
        getApiRoute(apiId,endpoint),
        queryParams
    );
};

export const postData = (apiId, endpoint, dataContent) => {
    return postOperation(
        httpHandler(),
        getApiRoute(apiId,endpoint),
        dataContent
    );
};

export const fetchDataWithAuth = (apiId, endpoint, queryParams={}) => {
    return fetchOperation(
        secureHttpHandler(apiId),
        getApiRoute(apiId,endpoint),
        queryParams
    );
};

export const postDataWithAuth = (apiId, endpoint, dataContent) => {
    return postOperation(
        secureHttpHandler(apiId),
        getApiRoute(apiId,endpoint),
        dataContent
    );
};