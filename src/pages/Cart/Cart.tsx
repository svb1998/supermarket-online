import { Button } from "@/components/ui/button";
import Logo from "../../assets/imgs/logo-dark.png";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import CartCard from "./components/CartCard/CartCard";
import { useDispatch } from "react-redux";
import { emptyShoppingCart, removeItem } from "@/redux/states/shopping-cart";
import { FoodItem } from "@/models/food-item";

function Cart() {
    const shoppingCartState = useSelector(
        (store: AppStore) => store.shoppingCart
    );

    const dispatch = useDispatch();

    const handleEmptyCart = () => {
        dispatch(emptyShoppingCart());
    };

    const handleRemoveItem = (item: FoodItem) => {
        dispatch(removeItem(item));
    };

    return (
        <div className="h-full w-full">
            <div className=" px-6 sm:px-14 gap-4  h-20 w-full   flex items-center border-b-[1px] border-gray-200 fixed top-0  bg-white justify-between">
                <div className=" hidden md:block md:w-2/12 lg:w-1/3">
                    <img className="rounded-full h-14" src={Logo} alt="" />
                </div>
                {/* <div className=" flex p-2 px-4 w-full sm:w-2/3 md:w-6/12 lg:w-1/3 h-10 border-2  rounded-full items-center justify-between">
                    <Input
                        placeholder="Enter an item..."
                        onChange={searchItems}
                        className="border-none h-8  focus-visible:ring-transparent focus-visible:border-none"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </div>
                <div className="w-1/3  items-center gap-4 justify-end hidden sm:flex">
                    <span>Total: {total}€</span>
                    <Button onClick={() => navigate("/cart")}>
                        Go to Cart
                    </Button>
                </div> */}
            </div>

            <div className="flex flex-col w-full sm:flex-row    pt-16 h-screen md:max-w-screen-xl xl:max-w-screen-2xl   mx-auto   ">
                <div className="flex flex-col w-full sm:w-3/4 pt-0  p-6 sm:pt-0 sm:p-10  items-start overflow-y-auto h-5/6 sm:h-full ">
                    <div className="sticky top-4 flex justify-between items-center py-4 sm:py-8 pb-6 sm:pb-6 sm:mt-0 mb-6 w-full sm:h-22  bg-white">
                        <h2 className="text-3xl sm:text-4xl font-semibold">
                            Cart
                        </h2>
                        <Button
                            variant={"destructive"}
                            onClick={handleEmptyCart}
                        >
                            Empty Cart
                        </Button>
                    </div>

                    <div className="flex flex-col w-full gap-6 ">
                        {shoppingCartState.itemsAdded.map((item) => (
                            <CartCard
                                imageUrl={item.imageUrl}
                                name={item.name}
                                price={item.price}
                                onRemove={() => handleRemoveItem(item)}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
                <div className="border-gray-100 border-[1px] h-[1px] sm:h-full"></div>
                <div className="flex flex-col w-full  sm:w-1/4 p-6 sticky bottom-0 bg-white sm:relative sm:bg-transparent sm:h-full  sm:pb-0 sm:p-10">
                    <div className="rounded-xl border-2 border-gray-200 flex flex-col items-start p-4 ">
                        <div className="flex justify-between w-full items-center sm:flex-col sm:items-start">
                            <h2 className="text-md lg:text-2xl font-semibold ">
                                Subtotal
                            </h2>
                            <h3 className="text-lg lg:text-3xl font-bold  ">
                                {shoppingCartState.total}€
                            </h3>
                        </div>

                        <Button className="h-22  w-full gap-3 mt-2 sm:mt-4 bg-purple-700 hover:bg-purple-600 ">
                            Buy{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.7}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;
