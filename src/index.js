import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('app');
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  // module.hot.accept('./App', () => {
  //   render(App);
  // });
  const NextApp = require('./App').default;
  ReactDOM.render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    rootElement
  );
}
