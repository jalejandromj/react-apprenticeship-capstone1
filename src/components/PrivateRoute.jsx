import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../providers/Auth';

const PrivateRoute = ({component: Component, ...rest}) => {
    const { authenticated } = useAuth();
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            authenticated ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;