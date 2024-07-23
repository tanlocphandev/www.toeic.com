import { cn } from "@/lib/utils";

const QuestionQuantityItem = ({
    quantities,
    activeQuantity = [],
    questionWrong = [],
    questionCorrect = [],
    questionSkip = [],
}) => {
    return (
        <div className="px-4 flex flex-wrap">
            {quantities.map((quantity, i) => (
                <button
                    key={i}
                    className={cn(
                        "mx-1 text-xs mt-2 font-medium w-[29px] h-[29px] border border-[#34447c] flex items-center justify-center rounded hover:bg-[#34447c] hover:text-white",
                        {
                            "bg-[#34447c] text-white": activeQuantity.includes(quantity),
                            "bg-green-500 text-white border-green-500 transition-all hover:bg-green-500 hover:opacity-80":
                                questionCorrect.includes(quantity),
                            "bg-red-500 text-white border-red-500 transition-all hover:bg-red-500 hover:opacity-80":
                                questionWrong.includes(quantity),
                            "bg-gray-500 text-white border-gray-500 transition-all hover:opacity-80":
                                questionSkip.includes(quantity),
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
