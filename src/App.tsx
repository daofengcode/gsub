import React from 'react';
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { ENDPOINT_BASE, ENGINE_NAME, searchQuery, SEARCH_KEY } from './config';
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import {
  ErrorBoundary,
  WithSearch,
  PagingInfo,
  ResultsPerPage,
  Paging,
  Facet,
  SearchProvider,
  Results,
  SearchBox,
  Sorting
} from "@elastic/react-search-ui";
import { buildSortOptionsFromConfig, getConfig, getFacetFields } from './helper';


const connector = new AppSearchAPIConnector({
  searchKey: SEARCH_KEY,
  endpointBase: ENDPOINT_BASE,
  engineName: ENGINE_NAME
});

let facetFields = getFacetFields() as Array<string>

function App() {
  return (
    <SearchProvider config={{
      apiConnector: connector,
      searchQuery: searchQuery()
    }}>
      <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
        {({ wasSearched }) => {
          return (
            <div className="App">
              <ErrorBoundary>
                <Layout
                  header={<SearchBox autocompleteSuggestions={true} />}
                  sideContent={
                    <div>
                      {wasSearched && (
                        <Sorting
                          label={"Sort by"}
                          sortOptions={buildSortOptionsFromConfig()}
                        />
                      )}
                      {facetFields.map(field => {
                        console.log(field)
                        return (
                          <Facet key={field} field={field} label={field} />
                        )
                      })}
                    </div>
                  }
                  bodyContent={
                    <Results
                      titleField={getConfig().titleField}
                      urlField={getConfig().urlField}
                      thumbnailField={getConfig().thumbnailField}
                      shouldTrackClickThrough={true}
                    />
                  }
                  bodyHeader={
                    <React.Fragment>
                      {wasSearched && <PagingInfo />}
                      {wasSearched && <ResultsPerPage />}
                    </React.Fragment>
                  }
                  bodyFooter={<Paging />}
                />
              </ErrorBoundary>
            </div>
          );
        }}
      </WithSearch>
    </SearchProvider>
  )
}

export default App;
