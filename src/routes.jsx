import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage';
import ShrumenProjectPage from './components/projects/ShrumenProjectPage';
import NPRProjectPage from './components/projects/NPRProjectPage';
import { ProjectSlug } from './constants';

const routes = (
  <Route path={`${process.env.PUBLIC_URL}/`} component={App}>
    <IndexRoute component={HomePage} />
    <Route path={ProjectSlug.shrumen} component={ShrumenProjectPage} />
    <Route path={ProjectSlug.npr} component={NPRProjectPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
