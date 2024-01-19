import {createSlice} from "@reduxjs/toolkit";


const INITIAL_STATE={
    cartList:[],
    cartCount:0,
}


const create_Slice = createSlice({
    name:"cart",
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state)=>{
            state.cartCount=1;
        },
        increment:(state)=> {
            state.cartCount +=1;
        },
        decrement:(state)=>{
            state.cartCount -=1;
        },

    }
});

export const {increment,decrement,addtoCart} =createSlice.actions;

export default createSlice.reducers;


 



//1.provider
// 2.store
//3.Reducer
//4.Action
/////////////////////////////////////
//Store =State
//Action =Button click
//Reducer => State
//Provider => React

