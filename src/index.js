import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import createHashHistory from './history/CreateHashHistory';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

const HashHistory = createHashHistory({basename:process.env.PUBLIC_URL});

ReactDOM.render(
    <Router history={HashHistory}>
        <App />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
