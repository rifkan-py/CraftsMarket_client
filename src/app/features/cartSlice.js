import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qty: 0,
  total: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index > -1) {
        state.products[index].qty = state.products[index].qty + 1;
      } else {
        state.products.push({
          ...action.payload,
          qty: 1,
          total: parseInt(action.payload.price),
        });
      }
      state.qty++;
    },
    adjustQty: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      const valueToAdjust = action.payload.value - state.products[index].qty;
      state.products[index].qty = state.products[index].qty + valueToAdjust;
      state.qty = state.qty + valueToAdjust;
      state.products[index].total =
        state.products[index].qty * state.products[index].price;
    },
    remove: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );

      state.qty = state.qty - state.products[index].qty;
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { add, adjustQty, remove } = cartSlice.actions;
export default cartSlice.reducer;
