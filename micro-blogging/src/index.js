import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import { initializeApp } from "firebase/app";
// import {
//      getFirestore, collection, getDocs
// } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyD9xElHz_e0-Ks2W7t5rZkVPHnOLjUVtQA",
//     authDomain: "micro-blogging-d5804.firebaseapp.com",
//     projectId: "micro-blogging-d5804",
//     storageBucket: "micro-blogging-d5804.appspot.com",
//     messagingSenderId: "1024241032717",
//     appId: "1:1024241032717:web:3b41386c9f26b046c83f44",
//     measurementId: "G-MMNHPE90GP"
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore();
// const colRef = collection(db, "tweets");
// getDocs(colRef).then((snapshot) => {
//     let tweets = [];
//     snapshot.docs.forEach((doc) => {
//         tweets.push({...doc.data(), id: doc.id})
//     })
//     console.log(tweets);
// }).catch(err => {
//     console.error(err.message);
// })


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
