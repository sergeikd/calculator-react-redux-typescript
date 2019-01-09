import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import './index.css';
import { Calc, calcReducer } from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(calcReducer);

ReactDOM.render(
    <Provider store={store}>
        {<Calc />}
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
