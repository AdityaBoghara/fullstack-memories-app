import React from "react";
import { AppBar, Avatar, Button, Typography, Toolbar} from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./styles";
import {Link} from 'react-router-dom'
import { typography } from "@material-ui/system";

const Navbar = () => {
  const classes = useStyles();
  const user = null;

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/"  className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
            <div className={classes.profile}> 
                <Avatar className={classes.purple} alt={user.result.name} src={user.image.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <typography className={classes.userName} variant="h6">{user.result.name}</typography>
                <Button variant="contained" className={classes.logout} color="secondary"> Logout </Button>
            </div> 
        ): (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
