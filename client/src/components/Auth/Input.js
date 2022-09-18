import React from 'react'
import {TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const Input = ({name,handleChange, lable, autoFocus, type, handleShowPassword, half}) => {
  return (
    <Grid item xs={12} sm={half ? 6 :12}>
      <TextField 
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      lable={lable}
      autoFocus={autoFocus}
      type={type}
      InputProps={name=='password' && {
        endAdorment: (
          <InputAdornment position="end"> 
            <IconButton onclick={handleShowPassword}> 
              {type==="password"} ? <Visibility/> : <VisibilityOff/>
            </IconButton>
          </InputAdornment>
        )
      }}
      
      />

      </Grid>
      
    
  )
}

export default Input
