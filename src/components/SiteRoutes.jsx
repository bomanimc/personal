import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import zenscroll from 'zenscroll';
import App from './App';
import routes from '../Routes';
import ScrollToTop from '../ScrollToTop';

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
      if (element) zenscroll.to(element, 500);
      // eslint-disable-next-line no-restricted-globals
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }, 0);
  }
}

const SiteRoutes = () => (
  <BrowserRouter routes={routes} onUpdate={hashLinkScroll}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
);

export default SiteRoutes;
