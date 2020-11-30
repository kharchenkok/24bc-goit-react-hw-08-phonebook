import { createSlice } from "@reduxjs/toolkit";
const initialState=''

 const errorSlice=createSlice({
    name:'error',
    initialState,
    reducers:{
        setError(state,{payload}){
            return payload
        },
        resetError(state,{payload}){
            return initialState
        }
    }
})

const {actions,reducer} = errorSlice
export const{setError,resetError}=actions

export default reducer
















// import { RESET_ERROR, SET_ERROR } from "../constant";

// const initiallState = "";
// const errorReducer = (state = initiallState, action) => {
//   switch (action.type) {
//     case SET_ERROR:
//       return action.payload;
//     case RESET_ERROR:
//       return initiallState;
//     default:
//       return state;
//   }
// };

// export default errorReducer;

// import { SET_ERROR, RESET_ERROR } from "../constant";

// export const setError = (text) => ({
//   type: SET_ERROR,
//   payload: text,
// });
// export const resetError = () => ({
//   type: RESET_ERROR,
// });
