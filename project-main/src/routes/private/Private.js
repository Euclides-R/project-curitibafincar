import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../../hooks/auth';

export default function RoutesPrivates({ component: Component, ...rest }) {

    const { user } = useContext(AuthContext);

    return(
        <Route
            {...rest}
            render={() => user 
                ? <Component {...rest} /> 
                : <Redirect to="/" />
            }
        />
    )
}

