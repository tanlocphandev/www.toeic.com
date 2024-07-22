import { cn } from "@/lib/utils";

const QuestionQuantityItem = ({ quantities, activeQuantity = [] }) => {
    return (
        <div className="px-4 flex flex-wrap">
            {quantities.map((quantity, i) => (
                <button
                    key={i}
                    className={cn(
                        "mx-1 text-xs mt-2 font-medium w-[29px] h-[29px] border border-[#34447c] flex items-center justify-center rounded hover:bg-[#34447c] hover:text-white",
                        {
                            "bg-[#34447c] text-white": activeQuantity.includes(quantity),
                        }
                    )}
                >
                    {quantity}
                </button>
            ))}
        </div>
    );
};

export default QuestionQuantityItem;
