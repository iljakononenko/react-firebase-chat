import React from 'react';
import {AppBar, Button, Grid, IconButton, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";

const Navbar = () => {

    const user = true

    return (
        <AppBar color={''} position='static'>
            <Toolbar variant={'dense'}>
                <Grid container justifyContent={'flex-end'}>
                    {
                        user
                        ?
                            <Button variant={'outlined'}>Log out</Button>
                        :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant={'outlined'}>Login</Button>
                            </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
