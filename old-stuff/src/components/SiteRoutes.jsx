import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import routes from '../Routes';
import ScrollToTop from '../ScrollToTop';

const SiteRoutes = () => (
  <BrowserRouter routes={routes}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
);

export default SiteRoutes;
