import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
   
    {
        id: 1,
        title: "This is the first post",
        content: "This is the content of this first post",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
    {
        id: 2,
        title: "This is the second post",
        content: "This is the content of this second post",
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
    },
];


const postsSlice =createSlice( {
    name:'posts',
    initialState:initialState,
    reducers : {
        addPosts:( state,action)=>{
            state.push({...action.payload , id : nanoid()})
        }
    }
})

export default postsSlice.reducer
export const { addPosts }  = postsSlice.actions

