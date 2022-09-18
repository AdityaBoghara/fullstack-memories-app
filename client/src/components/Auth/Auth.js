import { Avatar, Button, Grid, Paper, Typography, Container, TextField } from '@material-ui/core';
import React, {useState} from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import { typography } from '@material-ui/system';
import Input from './Input'

const Auth = () => {
  const classes = useStyles();
  const isSignUp = false
const [showPassword, setShowPassword] = useState(false)

  const handleSubmit= ()=>
  {

  }
  const handleChange= ()=>
  {

  }
  const handleShowPassword= ()=> setShowPassword((prevShowPassword)=> !prevShowPassword)


  return (
  <Container component="main" maxWidth="xs">
      <paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar} >
            <LockOutlinedIcon/>
        </Avatar>
        <typography varient="h5">{isSignUp ? 'Sign Up' : 'Sign In' }</typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {
                    isSignUp && (
                        <>
                        <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                        <Input name="lirstName" label="Lirst Name" handleChange={handleChange}  half/>
                        </>
                    )
                }
                <Input name="email" lable="Email Address" handleChange={handleChange} type="email"/>
                <Input name="password" lable="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                {isSignUp && <Input name="confirmPassword" lable="repeatPassword" handleChange={handleChange} type="password"/>}
            </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignUp ?'Sign Up' : 'Sign In'}
                </Button>
        </form>
      </paper>

</Container>
  );
};

export default Auth;
