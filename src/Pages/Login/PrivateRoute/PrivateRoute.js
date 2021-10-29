import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ( { children, ...rest } ) => {
    const { user, isloading} = UseAuth();
    if(isloading) {
        return  <Spinner animation="border" variant="warning" />
    }
    return (
        <Route
            {...rest}
            render = {({ location }) => user.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
              }}
            ></Redirect>}    
        
        >

        </Route>
    );
};

export default PrivateRoute;