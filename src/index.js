// import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import './styles/default.scss'
import  './i18n'
import UFormsPage from "./components/pages/UFormsPage";



// ReactDOM.render(
//     <UFormsPage/>
//     , document.getElementById('root'));
ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
