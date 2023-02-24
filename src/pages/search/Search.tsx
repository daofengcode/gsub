import { ErrorBoundary, WithSearch, PagingInfo, ResultsPerPage, Paging, Facet, SearchProvider, Results, SearchBox, Sorting } from "@elastic/react-search-ui";
import React from 'react'
import { config } from '../../config';
import { Layout } from "@elastic/react-search-ui-views";
import { buildSortOptionsFromConfig, getConfig, getFacetFields } from "../../helper";
import CustomResultView from "../../components/CustomResultView";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { Box, CircularProgress } from "@mui/material";

type Props = {}


interface IContentProps {
    wasSearched: any
}
const Content = ({ wasSearched }: IContentProps) => {
    let facetFields = getFacetFields() as Array<string>
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
                                // console.log(field)
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
}


const Search = (props: Props) => {
    return (
        <SearchProvider config={config}>
            <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
                {({ wasSearched }) => {
                    if (wasSearched) {
                        return <Content wasSearched={wasSearched}></Content>
                    } else {
                        return (
                            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", paddingTop: 5 }}>
                                <CircularProgress />
                            </Box>
                        )
                    }
                }}
            </WithSearch>
        </SearchProvider>
    )
}

export default Search