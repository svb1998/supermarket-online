import { FoodItem } from "./food-item";

export interface ShoppingCart {
    itemsAdded: FoodItem[];
    total: number;
}
