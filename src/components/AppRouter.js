import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const AppRouter = () => {

    const userLogged = false

    return (
        <Switch>
            {
                userLogged
                    ?
                    privateRoutes.map( ( {path, Component} ) =>
                        <Route exact={true} key={path} path={path} component={Component} />
                    )
                    :
                    publicRoutes.map( ( {path, Component} ) =>
                        <Route exact={true} key={path} path={path} component={Component} />
                    )
            }
            {
                userLogged
                ?
                    <Redirect to={CHAT_ROUTE} />
                :
                    <Redirect to={LOGIN_ROUTE} />
            }
        </Switch>
    );
};

export default AppRouter;
