import {createSlice} from "@reduxjs/toolkit";


const INITIAL_STATE={
    cartList:[],
    cartCount:0,
}


const create_Slice = createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:()=>{
            
        },
        increment:()=>{},
        decrement:()=>{},

    }
});























//1.provider
// 2.store
//3.Reducer
//4.Action
/////////////////////////////////////
//Store =State
//Action =Button click
//Reducer => State
//Provider => React

