import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "../Posts/PostsSlice";
import usersSlice from "../users/user.slice";


const store = configureStore( {
    reducer: 
    {
        posts : PostsSlice ,
        users : usersSlice

    }
})


export default store