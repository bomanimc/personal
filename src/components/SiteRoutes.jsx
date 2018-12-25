import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

// Taken from https://github.com/rafrex/react-router-hash-link/tree/react-router-v2/3.
function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }, 0);
  }
}

const SiteRoutes = () => (
  <Router history={browserHistory} routes={routes} onUpdate={hashLinkScroll} />
);

export default SiteRoutes;
