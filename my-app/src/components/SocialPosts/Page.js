import React from 'react';
import './Ui.css'
import PostsList from './Posts/PostsList';
import { Provider } from 'react-redux';
import store from './App/store';



export default function Page(){
    return (
        <>
        <Provider store={store}>
            <PostsList /> 
        </Provider>

        </>
    )
}

