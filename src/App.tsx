import React from 'react';

import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Router from './layout/Router';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default App;
