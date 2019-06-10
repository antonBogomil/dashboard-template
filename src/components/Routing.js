import React from 'react';
import {Route, Switch} from "react-router-dom";
import routes from './../data/routes'
console.log(routes);
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