import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './index.css';
import App from './components/App/App';

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
