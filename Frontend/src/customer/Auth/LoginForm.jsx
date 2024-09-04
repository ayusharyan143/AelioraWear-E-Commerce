import React from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../State/Auth/Action';
// import { login } from '../../../src/customer/State/Auth/Action';


const LoginForm = () => {

    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password")
        };

        console.log("Form data being submitted:", userData);
        dispatch(login(userData))
        // dispatch(login(userData)).then(() => {
        //     navigate("/dashboard"); // or any other route
        // });

    }
    
    return (
        <div>
            <Typography variant="h4" 
                    gutterBottom 
                    align="center" 
                    style={{ marginBottom: 20, fontWeight: 'bold' }}>
                Login to Your Account
            </Typography>
            <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
                <Grid container spacing={3}>
                    
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'
                            type='email'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='password'
                            name='password'
                            label='Password'
                            type='password'
                            fullWidth
                            autoComplete='new-password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                        style={{ marginTop: 10 , marginBottom: 10 }}
                            type='submit'
                            variant='contained'
                            color='primary'
                            size='large'
                            fullWidth
                            sx={{ padding: '0.8rem', bgcolor: '#9155FD', '&:hover': { bgcolor: '#7a44d8' } }}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>if you don't have account ?</p>
                    <Button onClick={()=>navigate("/register")} className='ml-5' size='small' >Register</Button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm