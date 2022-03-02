import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../Hooks/UseAuth';


const AdminRoute = ( { children, ...rest } ) => {
    const { user, admin, isloading} = UseAuth();
    // add spinner
    if(isloading) {
        return  <Spinner animation="border" variant="warning" />
    }
    // set private route
    return (
        <Route
            {...rest}
            render = {({ location }) => user.email && admin ? children : <Redirect
            to={{
                pathname: "/",
                state: { from: location }
              }}
            ></Redirect>}    
        
        >

        </Route>
    );
};

export default AdminRoute;