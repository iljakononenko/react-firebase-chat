import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Box, Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const Chat = () => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 60, marginTop: 5}} alignItems={'center'} justifyContent={'center'}>
                <div style={{width: '80%', height: "70vh", border: '1px solid gray', overflowY: "auto"}}>
                    {messages.map(message =>
                        <div style={{
                            margin: 10,
                            border: user.uid === message.uid ? "1px solid green" : "1px solid black",
                            marginLeft: user.uid === message.uid ? "10px" : "auto",
                            width: 'fit-content'
                        }}>
                            <Grid container style={{padding: 10}}>
                                <Avatar src={message.photoURL} />
                                <div style={{marginLeft: 5, padding: 5}}>
                                    <h4>{message.displayName}</h4>
                                    <p>
                                        {message.text}
                                    </p>
                                </div>
                            </Grid>

                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={'row'}
                    justifyContent={'end'}
                    style={{width: '80%'}}
                >
                    <TextField
                        fullWidth
                        variant={'outlined'}
                        style={{marginTop: 10}}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button onClick={sendMessage} variant={'outlined'} style={{marginTop: 10}}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;
