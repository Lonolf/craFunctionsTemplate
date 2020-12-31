import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from 'logic';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const disableDevTools = () => {
  for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
    if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'function')
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = () => {}
    else
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = null
}

if (process.env.REACT_APP_ENV === 'production')
  disableDevTools()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
