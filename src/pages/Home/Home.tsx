import { Button } from "@/components/ui/button";
import { FoodItem } from "@/models/food-item";
import {
    addItem,
    emptyShoppingCart,
    removeItem,
} from "@/redux/states/shopping-cart";
import { AppStore } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";

function Home() {
    const [food, setFood] = useState<FoodItem[]>([]);
    const dispatch = useDispatch();
    const shoppingCartState = useSelector(
        (store: AppStore) => store.shoppingCart
    );

    const handleRedux = (item: FoodItem) => {
        dispatch(addItem(item));
    };

    const handleRemove = (item: FoodItem) => {
        dispatch(removeItem(item));
    };

    const handleEmptyCart = () => {
        dispatch(emptyShoppingCart());
    };

    useEffect(() => {
        fetch("src/mock/food-items.json")
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson.foods);
                setFood(resJson.foods);
            });
    }, []);

    return (
        <div className=" p-12">
            <h1 className="mb-4 font-bold">Supermarket Online</h1>
            <div className=" w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {food.map((item) => (
                    // <p>
                    //     <span>{item.name}</span>
                    //     <span>____</span>
                    //     <span>{item.price}</span>
                    //     <Button onClick={() => handleRedux(item)}>
                    //         Add to Cart
                    //     </Button>
                    // </p>

                    <ProductCard
                        key={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        calories={item.nutritionalValue.calories}
                        fat={item.nutritionalValue.fat}
                        carbohydrates={item.nutritionalValue.carbohydrates}
                        protein={item.nutritionalValue.protein}
                        fiber={item.nutritionalValue.fiber}
                        price={item.price}
                        unit={item.stock.unit}
                        quantity={item.stock.quantity}
                        onClick={() => handleRedux(item)}
                    />
                ))}
            </div>

            <br />
            <br />
            <br />
            <h1>Shopping cart</h1>
            <Button variant={"destructive"} onClick={handleEmptyCart}>
                Empty Cart
            </Button>
            <div>
                Products <br />
                {shoppingCartState.itemsAdded.map((item) => (
                    <p>
                        <span>{item.name}</span>
                        <span>____</span>
                        <span>{item.price}</span>
                        <Button onClick={() => handleRemove(item)}>
                            Remove from Cart
                        </Button>
                    </p>
                ))}
                <br />
                <br />
                TOTAL
                <br />
                {shoppingCartState.total}
            </div>
        </div>
    );
}
export default Home;
