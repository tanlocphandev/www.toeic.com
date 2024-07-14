import React from "react";

const TextOrderQuestion = ({ order }) => {
    return (
        <p className="mr-3 w-[35px] h-[35px] bg-[#e3faff] rounded-full flex items-center justify-center text-[#34447c] font-medium">
            {order}
        </p>
    );
};

export default TextOrderQuestion;
