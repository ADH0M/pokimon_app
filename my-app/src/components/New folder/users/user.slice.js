// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

// export const fetchUsers =createAsyncThunk( 'users/fetchUsers' , async ()=>{
//     const response = await fetch( USERS_URL )
//     const data     = await response.json()
//     return data
// } )


// const usersSlice = createSlice({
//     name         :'users',
//     initialState : []    ,
//     reducers:{},
//     extraReducers(builder){
//         builder.addCase( fetchUsers.fulfilled ,(state ,action) => {
//             return action.payload;
//         })
//     }

// })

// export default usersSlice.reducer


const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers   = createAsyncThunk( 'users/fetchUsers' ,async()=>{
    const response = await fetch(USERS_URL)
    const data     = await response.json()
    return data
} )


const usersSlice =createSlice({
    name:'users',
    initialState:[],
    reducers:{},
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled , (state ,action) =>{
            return action.payload
        })
    }
})

export default usersSlice.reducer








