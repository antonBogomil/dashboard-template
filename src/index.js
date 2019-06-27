// import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import store from './store';
import Site from "./site";
import Admin from './admin'
import initTranslation from './admin/i18n'
import PrivateRoute from "./admin/components/PrivateRoute";
import Login from "./admin/components/Login";
initTranslation(store.getState().lang.code);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/admin/login' component={Login}/>
                <PrivateRoute path='/admin' component={Admin}/>
                <Route path='/' component={Site}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your public to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
