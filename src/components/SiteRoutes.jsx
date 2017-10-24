import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

const SiteRoutes = () => (
  <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)} />
);

export default SiteRoutes;
