
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:null,
    email:null
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
userRegSuccess(state,action){
    return action.payload
},
userLogSuccess(state,action){
    return action.payload
},
getCurrentUserSuccess(state,action){
    return action.payload
},
userlogoutSuccess(state,action){
    return initialState
}
    }
})

const { actions, reducer } = userSlice;
export const {userRegSuccess,userLogSuccess,getCurrentUserSuccess,userlogoutSuccess} = actions;

export default reducer;