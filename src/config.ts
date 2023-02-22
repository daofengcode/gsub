import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector"
import { buildAutocompleteQueryConfig, buildFacetConfigFromConfig, buildSearchOptionsFromConfig, getConfig } from "./helper"

export const SEARCH_KEY = process.env.REACT_APP_SEARCH_KEY || ""
export const ENDPOINT_BASE = process.env.REACT_APP_ENDPOINT_BASE || ""
export const ENGINE_NAME = process.env.REACT_APP_ENGINE_NAME || ""
export const VERSION = process.env.REACT_APP_VERSION || ""

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
const connector = new AppSearchAPIConnector({
    searchKey,
    engineName,
    hostIdentifier,
    endpointBase
});

export const config = {
    searchQuery: {
        facets: buildFacetConfigFromConfig(),
        ...buildSearchOptionsFromConfig()
    },
    autocompleteQuery: buildAutocompleteQueryConfig(),
    apiConnector: connector,
    alwaysSearchOnInitialLoad: true
};
