import { FoodItem } from "@/models/food-item";
import Logo from "../../assets/imgs/logo-dark.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";

function Navbar({
    food,
    filterItems,
    total,
}: {
    food: FoodItem[];
    filterItems: (foodItems: FoodItem[]) => void;
    total: number;
}) {
    const navigate = useNavigate();

    const searchItems = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) return filterItems(food);
        else
            return filterItems(
                food.filter((item) =>
                    item.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                )
            );
    };

    return (
        <div className=" px-6 sm:px-14 gap-4  h-20 w-full  flex items-center border-b-[1px] border-gray-200 fixed top-0  bg-white justify-between">
            <div className=" hidden md:block md:w-2/12 lg:w-1/3">
                <img className="rounded-full h-14" src={Logo} alt="" />
            </div>
            <div className=" flex p-2 px-4 w-full sm:w-2/3 md:w-6/12 lg:w-1/3 h-10 border-2  rounded-full items-center justify-between">
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
                <Button onClick={() => navigate("/cart")}>Go to Cart</Button>
            </div>
        </div>
    );
}
export default Navbar;
