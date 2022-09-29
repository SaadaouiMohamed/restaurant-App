import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
name : reservation ,

initialState : {
    value : 0
},

reducers : {
    increment : state => {state.value += 1},
    decrement: state => {state.value -= 1},
}
})

export const {increment , decrement} = reservationSlice.actions
export default reservationSlice.reducer