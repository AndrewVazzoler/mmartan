import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Main from './main';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const history = createBrowserHistory();

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

ReactDOM.render(
  <Main store={store} history={history} />,
  document.querySelector('#root')
);

serviceWorker.unregister();
