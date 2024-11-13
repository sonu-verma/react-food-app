import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        AddToCart: (state, action) => {
            var isItemExist = state.cart.find(
                 (item) => item.id === action.payload.id
                );
            console.log("isItemExist:", isItemExist);
            if(isItemExist){
                state.cart = state.cart.map( (item) => 
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                )
            }else{
                state.cart.push(action.payload);
            }
            // state.cart.push(action.payload);
        },
        RemoveToCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload.id
            )
        },
        increaseQty: (state, action) => {
            state.cart = state.cart.map( (item) =>
                item.id === action.payload.id ? { ...item,  qty: item.qty +1 } : item
            )
        },
        descreaseQty: (state, action) => {
            state.cart = state.cart.map( (item) => 
                item.id === action.payload.id && item.qty > 1 ? { ...item, qty: item.qty-1 } : item
            );
        }
    }
});

export const { AddToCart, RemoveToCart, increaseQty, descreaseQty } = cartSlice.actions
export default cartSlice.reducer