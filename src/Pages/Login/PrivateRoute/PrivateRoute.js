import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ( { children, ...rest } ) => {
    const { user, isloading} = UseAuth();
    // add spinner
    if(isloading) {
        return  <Spinner animation="border" variant="warning" />
    }
    // set private route
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