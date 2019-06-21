import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import MyApp from './PageLayout';
ReactDOM.render(<MyApp />, document.getElementById('root'));

// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

// import MainPageLayoutExample from './MainPageLayout';
// ReactDOM.render(<MainPageLayoutExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
