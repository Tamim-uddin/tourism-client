import { Alert, Button, Grid, Paper, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';


const Makeadmin = () => {
    const [email, setemail] = useState('');
    const [success, setsuccess] = useState(false);

    const handleonBlur = e => {
        setemail(e.target.value);
    }

    const handleonSubmit = e =>{
        const user = {email};
        fetch('https://limitless-chamber-81508.herokuapp.com/users/admin' , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setsuccess(true)
            }
            console.log(data)
        })
        e.preventDefault()

    }
    return (
        <Grid sx={{mt: '60px'}} >
             <Paper elevation={10} style={{padding: '20px', height: '35vh', width: 290, margin: 'auto', border: '1px solid #804d4d', backgroundColor: ' #c69f9f'}}>
                <Grid  align="center">
            <h2 style={{fontFamily:'"Playfair Display",serif', marginTop: '20px', color:'#303030'}}>Make an Admin</h2></Grid>
            <form onSubmit={handleonSubmit}>
            <TextField 
             fullWidth
             type="email"
             label="Email" 
             onBlur={handleonBlur}
             variant="standard" /><br />
             <Button sx={{mt: '5px', mb: '5px', backgroundColor: '#804d4d'}} type='submit' variant="contained">MAke admin</Button>
            </form>
            </Paper>
            {success && <Alert severity="success">Made Admin Successfully </Alert>}

        </Grid>
    );
};

export default Makeadmin;