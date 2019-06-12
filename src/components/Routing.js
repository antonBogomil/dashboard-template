import React from 'react';
import {Route, Switch} from "react-router-dom";
import routes from '../settings/routes'
const Routing = () => {
    return (
        <>
            {routes.map((route,i)=>
                <Route key={i} path={route.path} exact={route.exact} component={route.action} />
            )}
        </>
    );
};

export default Routing;