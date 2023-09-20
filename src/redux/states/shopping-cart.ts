import { ShoppingCart } from "@/models/shopping-cart";
import { createSlice } from "@reduxjs/toolkit";

export const EmptyShoppingCart: ShoppingCart = {
    itemsAdded: [],
    total: 0,
};

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: EmptyShoppingCart,
    reducers: {
        addItem: (state, action) => ({
            ...state,
            itemsAdded: [...state.itemsAdded, action.payload],
            total: state.total + action.payload.price,
        }),
        removeItem: (state, action) => {
            const itemIndex = state.itemsAdded.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex !== -1) {
                state.itemsAdded.splice(itemIndex, 1);
                state.total -= action.payload.price;
            }
        },
        emptyShoppingCart: () => EmptyShoppingCart,
    },
});

export const { addItem, removeItem, emptyShoppingCart } =
    shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
