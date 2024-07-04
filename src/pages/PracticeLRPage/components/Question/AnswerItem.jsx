import React, { useId, useState } from 'react';


const AnswerItem = ({ value }) => {
    const labelId = useId();

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex items-center">
            <input
                type="radio"
                id={labelId}
                name="answer"
                value={value}
                checked={selectedOption}
                onChange={handleOptionChange}
                className="form-radio h-3 w-3 text-[#34447c] rounded-full focus:ring-[#34447c] focus:ring-offset-0"
            />
            {

                <label htmlFor={labelId} className="ml-2 text-gray-700">
                    {value}
                </label>

            }
        </div>
    )
}

export default AnswerItem;