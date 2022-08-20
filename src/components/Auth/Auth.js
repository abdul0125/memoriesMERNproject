import React from 'react';
import {Avatar,Button,Paper,Grid,typography,Container, Typography} from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Input from './Input';



const Auth = () => {
    const classes = useStyles();

    const isSignup = false;

    const handleSubmit = ()=>{

    };

  
    
  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography variant='h5'>{isSignup?"Sign Up":"Sign In"}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {

                    }

                </Grid>

            </form>

        </Paper>

    </Container>
  )
}

export default Auth