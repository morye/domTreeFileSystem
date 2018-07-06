require('../scss/main.scss');

import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';

let dom = document.querySelector('html');

render(<App nodes={dom} />, document.getElementById('app'));
