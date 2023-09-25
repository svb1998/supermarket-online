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
import Navbar from "@/components/Navbar/Navbar";
import ReactPaginate from "react-paginate";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

function Home() {
    const [food, setFood] = useState<FoodItem[]>([]);
    const [filteredFood, setFilteredFood] = useState<FoodItem[]>([]);

    const dispatch = useDispatch();
    const shoppingCartState = useSelector(
        (store: AppStore) => store.shoppingCart
    );

    const { toast } = useToast();

    const itemsPerPage = 8;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredFood.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredFood.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filteredFood.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    const handleAddItem = (item: FoodItem) => {
        dispatch(addItem(item));
        toast({
            title: "Item added",
            description: "Your item has been added to the cart!",

            action: (
                <ToastAction
                    altText="Remove item"
                    onClick={() => handleRemove(item)}
                >
                    Remove Item
                </ToastAction>
            ),
        });
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
                setFood(resJson.foods);
                setFilteredFood(resJson.foods);
            });
    }, []);

    return (
        <div className="h-screen w-full ">
            <Navbar
                food={food}
                total={shoppingCartState.total}
                filterItems={setFilteredFood}
            />
            <div className=" p-10 pt-28 w-full h-full ">
                <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                    {currentItems.map((item) => (
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
                            onClick={() => handleAddItem(item)}
                        />
                    ))}
                </div>

                <ReactPaginate
                    containerClassName="w-fit mx-auto mt-10 flex gap-4 bg-gray-100 justify-center items-center rounded-full"
                    pageClassName="px-2 hover:bg-gray-200 rounded-lg w-8 "
                    pageLinkClassName="w-22 bg-blue text-gray-800 hover:text-black hover:rounded-lg  "
                    activeClassName=" bg-white rounded-lg border-[1px] border-gray-300 "
                    activeLinkClassName="text-green-800  "
                    breakLabel="..."
                    nextLabel={<Button className="h-8 w-8"> {">"} </Button>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={
                        <Button className="h-8 w-8 flex justify-center items-center">
                            {"<"}
                        </Button>
                    }
                    renderOnZeroPageCount={null}
                />

                {/* <br />
                <br />
                <br />

                <Button variant={"destructive"} onClick={handleEmptyCart}>
                    Empty Cart
                </Button>
                <div>
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
                </div> */}
            </div>
        </div>
    );
}
export default Home;
