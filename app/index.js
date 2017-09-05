import React from 'react';
import { render } from 'react-dom';

import 'normalize-scss';
import './styles/global.scss';

import Root from './containers/Root';

render(
    <Root />,
    document.getElementById('root')
);
