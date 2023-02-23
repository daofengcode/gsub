import React from 'react';

import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Router from './layout/Router';

function App() {
  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
