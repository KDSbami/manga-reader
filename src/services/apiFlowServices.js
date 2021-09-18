import { api_mangadex_org_flow } from "./api.mangadex.org.flow";

const flowObject = {
    "api.mangadex.org":api_mangadex_org_flow
}

export const getFlow = (apiId, instruction) => {
    return flowObject[apiId][instruction];
}
