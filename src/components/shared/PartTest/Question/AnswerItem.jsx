import React, { useId, useState } from "react";

const AnswerItem = ({ value }) => {
    const labelId = useId();

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex items-start">
            <div className="mt-[2px]">
                <input
                    type="radio"
                    id={labelId}
                    name="answer"
                    value={value}
                    checked={selectedOption}
                    onChange={handleOptionChange}
                />
            </div>

            <label htmlFor={labelId} className="ml-2 text-gray-700">
                {value}
            </label>
        </div>
    );
};

export default AnswerItem;
