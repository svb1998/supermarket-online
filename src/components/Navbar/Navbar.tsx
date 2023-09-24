import Logo from "../../assets/imgs/logo-dark.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Navbar({ total }) {
    return (
        <div className="px-12  h-20  flex items-center border-b-[1px] border-gray-200 sticky top-0 bg-white justify-between">
            <div className="w-1/3">
                <img className="rounded-full h-14" src={Logo} alt="" />
            </div>
            <div className=" flex p-2 px-4 w-1/3 h-10 border-2  rounded-full items-center justify-between">
                <Input
                    placeholder="Search"
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
            <div className="w-1/3 flex items-center gap-4 justify-end">
                <span>Total: {total}€</span>
                <Button>Go to Cart</Button>
            </div>
        </div>
    );
}
export default Navbar;
