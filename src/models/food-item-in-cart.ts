import { FoodItem } from "./food-item";

export interface FoodItemInCart extends FoodItem {
    selectedQuantity: number;
}
