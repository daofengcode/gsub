import React from 'react';
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { config } from './config';
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { ErrorBoundary, WithSearch, PagingInfo, ResultsPerPage, Paging, Facet, SearchProvider, Results, SearchBox, Sorting } from "@elastic/react-search-ui";
import { buildSortOptionsFromConfig, getConfig, getFacetFields } from './helper';
import CustomResultView from './components/CustomResultView';

let facetFields = getFacetFields() as Array<string>

function App() {
  return (
    <SearchProvider config={config}>
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
                      resultView={CustomResultView}
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
