import { parseRequestURL } from './helpers/utils.js';

import Header from './views/partials/header.js';
import Footer from './views/partials/footer.js';

import mainPage from './views/pages/mainPage.js';
import Error404 from './views/pages/error404.js';

import Catalog from './views/pages/tasks/catalog.js';
import Stock from './views/pages/tasks/stock.js';
import AboutCompany from './views/pages/tasks/aboutCompany.js';
import Help from './views/pages/tasks/help.js';
import Info from './views/pages/tasks/info.js';

const Routes = {
  '/': mainPage,
  '/catalog': Catalog,
  '/stock': Stock,
  '/about_company': AboutCompany,
  '/help': Help,
  '/info': Info,
  '/contacts': ''
};

function router() {
  const headerContainer   = document.getElementsByClassName('header-container')[0],
        contentContainer  = document.getElementsByClassName('content-container')[0],
        footerContainer   = document.getElementsByClassName('footer-container')[0],
        header            = new Header(),
        footer            = new Footer();

  header.render().then(html => (headerContainer.innerHTML = html));

  const request = parseRequestURL(),
    parsedURL = `/${request.resource || ''}${request.id
      ? '/:id'
      : ''}${request.action ? `/${request.action}` : ''}`,
    page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

  page.render().then(html => {
    contentContainer.innerHTML = html;
    page.afterRender();
  });

  footer.render().then(html => (footerContainer.innerHTML = html));
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
