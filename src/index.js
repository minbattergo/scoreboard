import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {Root} from "./pages/Root";

import 'bootstrap/dist/css/bootstrap.css'; //모든 페이지에 적용되는 글로벌 css
import './index.css'

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
