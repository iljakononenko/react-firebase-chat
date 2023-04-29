import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const AppRouter = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <Switch>
            {
                user
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
                user
                ?
                    <Redirect to={CHAT_ROUTE} />
                :
                    <Redirect to={LOGIN_ROUTE} />
            }
        </Switch>
    );
};

export default AppRouter;
