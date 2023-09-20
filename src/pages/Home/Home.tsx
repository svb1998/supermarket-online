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
        <div className=" p-4">
            <div className="flex flex-wrap  gap-5 items-center w-full">
                {food.map((item) => (
                    // <p>
                    //     <span>{item.name}</span>
                    //     <span>____</span>
                    //     <span>{item.price}</span>
                    //     <Button onClick={() => handleRedux(item)}>
                    //         Add to Cart
                    //     </Button>
                    // </p>

                    <div className="flex flex-grow w-72 h-40 max-w-[288px] bg-slate-100 rounded-xl overflow-hidden">
                        <div className="w-5/12 h-full">
                            <img
                                className="h-full  object-cover"
                                src={item.imageUrl}
                                alt=""
                            />
                        </div>
                        <div className="w-7/12 h-full">
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <Button onClick={() => handleRedux(item)}>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
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
