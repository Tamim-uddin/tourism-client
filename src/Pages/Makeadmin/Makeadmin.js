import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';


const Makeadmin = () => {
    const [email, setemail] = useState('');

    const handleonBlur = e => {
        setemail(e.target.value);
    }

    const handleonSubmit = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin' , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        e.preventDefault()

    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleonSubmit}>
            <TextField 
             type="email"
             label="Email" 
             onBlur={handleonBlur}
             variant="standard" /><br />
             <Button type='submit' variant="contained">MAke admin</Button>
            </form>
        </div>
    );
};

export default Makeadmin;