import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path={`${process.env.PUBLIC_URL}/`} component={App}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
