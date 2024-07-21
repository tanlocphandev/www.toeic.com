import { useId } from "react";

const AnswerItem = ({
    value,
    name,
    questionId,
    answerId,
    selected = false,
    onSelectedAnswer = (answerId, questionId) => {},
}) => {
    const labelId = useId();

    return (
        <div className="flex items-start">
            <div className="mt-[2px]">
                <input
                    type="radio"
                    id={labelId}
                    name={name}
                    checked={selected}
                    onChange={() => onSelectedAnswer?.(answerId, questionId)}
                />
            </div>

            <label htmlFor={labelId} className="ml-2 text-gray-700">
                {value}
            </label>
        </div>
    );
};

export default AnswerItem;
