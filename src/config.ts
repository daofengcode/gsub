import { SearchQuery } from "@elastic/search-ui"
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


// export const searchQuery = (): SearchQuery => {
//     return {
//         search_fields: {
//             post_title: {},
//             post_content: {}
//         },
//         result_fields: {
//             "ID": {
//                 raw: {}
//             },
//             "post_id": {
//                 raw: {}
//             },
//             "post_date": {
//                 raw: {}
//             },
//             "post_title": {
//                 raw: {}
//             },
//             "post_type": {
//                 raw: {}
//             },
//             "post_content": {
//                 raw: {}
//             }
//         },
//         sortField: "post_date",
//         facets: {
//             "date_terms.year": {
//                 type: "value",
//                 size: 100
//             }
//         }
//     }
// }

