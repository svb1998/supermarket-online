import { Button } from "@/components/ui/button";

function ProductCard({
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
    onClick,
}) {
    const productUnitType = (unit) => (unit === "unit" ? "u" : "kg");

    return (
        <div className="flex max-w-lg h-48   rounded-xl overflow-hidden border-2 border-gray-200-200">
            <div className="w-5/12 h-full">
                <img className="h-full  object-cover" src={imageUrl} alt="" />
            </div>
            <div className="w-7/12 h-full  justify-between flex flex-col p-3">
                <h2 className="font-bold text-center text-xl">{name}</h2>
                <div className="flex flex-col ">
                    <span className="text-xs text-start font-bold ">
                        Nutritional Value
                    </span>
                    <ul className="text-[10px] text-left text-slate-500  ">
                        <li className="">{calories} calories</li>
                        <li>{fat} fat</li>
                        <li>{carbohydrates} carbohydrates</li>
                        <li>{protein} protein</li>
                        <li>{fiber} fiber</li>
                    </ul>
                </div>
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col items-start ">
                        <strong className="m-0">
                            {price}€/{productUnitType(unit)}
                        </strong>
                        <span className="text-[11px] text-red-500">
                            {quantity}
                            {{ unit } == "grams" ? { unit } : " units"} left!
                        </span>
                    </div>

                    <Button onClick={onClick} size={"sm"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;
