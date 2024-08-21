import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[],
    statusSection:false
}
const cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const{productId, qty}=action.payload;
            const indexProductId=(state.items).findIndex(item=>item.productId=== productId);
            if (indexProductId>=0)
            {
                state.items[indexProductId].qty+=qty;
            } else {
                state.items.push({productId, qty});
            }
            
        },
        changeQuantity(state, action){
            const{productId, qty}=action.payload;
            const indexProductId=(state.items).findIndex(item=>item.productId=== productId);
            if (qty>0)
            {
                state.items[indexProductId].qty=qty;
            }else
            {
                //delete state.items[indexProductId];
                state.items=(state.items).filter(item => item.productId !== productId );
            }
        },
        toogleSection(state){
            if (state.statusSection===false){
                state.statusSection=true;
            }
            else
            {
                state.statusSection=false;
            }
        }
    }
})
export const{addToCart, changeQuantity,toogleSection}=cartSlice.actions;
export default cartSlice.reducer;