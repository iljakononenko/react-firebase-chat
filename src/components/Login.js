import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

const Login = () => {

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}} alignItems={'center'} justifyContent={'center'}>
                <Grid style={{width: 400, background: 'lightgray'}} container alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Box p={5} >
                        <Button onClick={login} variant={'outlined'}>
                            Login via Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
