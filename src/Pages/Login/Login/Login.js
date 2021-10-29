import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const Login = () => {
    const {signinwithgoogle} = UseAuth();
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signinwithgoogle} className="btn btn-warning">Google Login</button>
        </div>
    );
};

export default Login;