import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector"
import { buildAutocompleteQueryConfig, buildFacetConfigFromConfig, buildSearchOptionsFromConfig, getConfig } from "./helper"

export const VERSION = process.env.REACT_APP_VERSION || ""
export const API_URL = process.env.REACT_APP_API_URL || ""

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
