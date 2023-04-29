import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyARJLQL0juUYyc-PYgarvcMf08TvE0NBAE",
    authDomain: "react-chat-82fbf.firebaseapp.com",
    projectId: "react-chat-82fbf",
    storageBucket: "react-chat-82fbf.appspot.com",
    messagingSenderId: "875767589012",
    appId: "1:875767589012:web:afc06089f8d37cd9146c81",
    measurementId: "G-1TPKNZ736J"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>
);
