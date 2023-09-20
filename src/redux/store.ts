import { ShoppingCart } from "@/models/shopping-cart";
import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartSlice } from "./states/shopping-cart";

export interface AppStore {
    shoppingCart: ShoppingCart;
}

export default configureStore<AppStore>({
    reducer: {
        shoppingCart: shoppingCartSlice.reducer,
    },
});
