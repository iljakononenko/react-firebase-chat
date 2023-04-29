import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";

const Login = () => {
    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}} alignItems={'center'} justifyContent={'center'}>
                <Grid style={{width: 400, background: 'lightgray'}} container alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Box p={5} >
                        <Button variant={'outlined'}>
                            Login via Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
