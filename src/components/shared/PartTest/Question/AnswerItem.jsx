import { cn } from "@/lib/utils";
import { useId } from "react";

const AnswerItem = ({
    value,
    name,
    questionId,
    answerId,
    selected = false,
    isResult = false,
    onSelectedAnswer = (answerId, questionId) => {},
    isWrong = false,
    isCorrect = false,
}) => {
    const labelId = useId();

    return (
        <div
            className={cn("flex items-start", {
                "opacity-90 pointer-events-none": isResult,
            })}
        >
            <div className="mt-[2px]">
                <input
                    disabled={isResult}
                    type="radio"
                    id={labelId}
                    name={name}
                    checked={selected}
                    onChange={() => onSelectedAnswer?.(answerId, questionId)}
                />
            </div>

            <label
                htmlFor={labelId}
                className={cn("ml-2 text-gray-700", {
                    "text-white bg-red-500": isWrong,
                    "text-white bg-green-700": isCorrect,
                })}
            >
                {value}
            </label>
        </div>
    );
};

export default AnswerItem;
