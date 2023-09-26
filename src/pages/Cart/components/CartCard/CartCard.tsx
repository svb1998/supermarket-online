import { Button } from "@/components/ui/button";

function CartCard({
    name,
    imageUrl,
    calories,
    fat,
    carbohydrates,
    protein,
    fiber,
    price,
    unit,
    quantity,
    onRemove,
}) {
    const productUnitType = (unit) => (unit === "unit" ? "u" : "kg");

    return (
        <div className="flex w-full h-32 sm:h-36    rounded-xl overflow-hidden border-2 border-gray-200">
            <div className="w-3/12 h-full">
                <img
                    className="h-full w-full object-cover"
                    src={imageUrl}
                    alt=""
                />
            </div>
            <div className="w-9/12 h-full   flex flex-col p-4 justify-between">
                <div>
                    <div className="flex justify-between items-center ">
                        <h2 className="font-bold text-start text-md sm:text-xl">
                            {name}
                        </h2>
                        <Button onClick={onRemove} variant={"secondary"}>
                            Remove
                        </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start ">
                        <strong className="text-sm sm:text-xl">
                            {price}€/{productUnitType(unit)}
                        </strong>
                        {/* <span className="text-[11px] text-red-500">
                        {quantity}
                        {{ unit } == "grams" ? { unit } : " units"} left!
                    </span> */}
                    </div>
                </div>
                <div className="flex justify-between items-center  ">
                    <p className="text-xs sm:text-sm"> Items in cart: 2</p>
                    <div className="flex gap-4 items-center">
                        <Button className="p-1 w-8 h-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 12H6"
                                />
                            </svg>
                        </Button>
                        <Button className="p-1 w-8 h-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v12m6-6H6"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartCard;
