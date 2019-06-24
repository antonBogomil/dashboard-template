import React, {Suspense} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import routes, {ADMIN_PATH} from '../settings/routes'
import Preloader from "./Preloader";

const AdminRouting = (props) => {
    return (
        <Suspense fallback={<Preloader size={'large'}/>}>
            <Switch>
                {routes.map((route, i) => {
                        return <Route key={i} path={`${props.match.url + route.path}`} exact={route.exact}
                                      component={route.action}/>
                    }
                )}
            </Switch>
        </Suspense>
    );
};

export default withRouter(AdminRouting);