import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import Routes from './config/route';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}