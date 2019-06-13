import React from 'react';
import {Route, Switch} from "react-router-dom";
import routes from '../settings/routes'

const Routing = () => {
    return (
        <Switch>
            {routes.map((route, i) => {
                    // if (route.path) {
                    //     return <Route key={i} path={route.path} exact={route.exact} component={route.action}/>
                    // }
                    return  <Route key={i} path={route.path} exact={route.exact} component={route.action}/>
                }
            )}
        </Switch>
    );
};

export default Routing;