export interface FoodItem {
    id: number;
    name: string;
    nutritionalValue: NutritionalValue;
    color: string;
    taste: string;
    stock: Stock;
    price: number;
    imageUrl?: string;
}

export interface NutritionalValue {
    calories: number;
    fat: number;
    carbohydrates: number;
    protein: number;
    fiber: number;
}

export interface Stock {
    quantity: number;
    unit: string;
}
