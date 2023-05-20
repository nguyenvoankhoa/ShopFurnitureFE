import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { totalAmount: 0, items: [], quantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const itemAdded = action.payload;
      state.totalAmount += itemAdded.price * itemAdded.amount;
      state.quantity += itemAdded.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === itemAdded.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + itemAdded.amount,
        };
        state.items[existingCartItemIndex] = updatedItem;
      } else {
        state.items.push(itemAdded);
      }
    },
    removeItem(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingCartItemIndex !== -1) {
        const existingItem = state.items[existingCartItemIndex];
        state.quantity -= 1;
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(
            (item) => item.id !== action.payload
          );
        } else {
          const updatedItem = {
            ...existingItem,
            amount: existingItem.amount - 1,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }

        state.items = updatedItems;
        state.totalAmount = updatedTotalAmount;
      }
    },
  },
});

export const cartItemAction = cartSlice.actions;
export default cartSlice.reducer;
