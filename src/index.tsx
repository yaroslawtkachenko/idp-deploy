import * as React from 'react';
import { render } from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');

const message = 'Hello';

render(
  <React.StrictMode>
    <App message={message} />
  </React.StrictMode>,
  rootElement,
);
