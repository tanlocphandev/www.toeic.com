import React from "react";

const TextOrderQuestion = ({ order, orderGroup = null }) => {
    if (orderGroup) {
        return (
            <p className="text-[#34447c] mb-3 font-medium bg-blue-600/10 px-3 py-2 inline-block rounded-sm">
                {orderGroup}
            </p>
        );
    }

    return (
        <p className="mr-3 w-[35px] h-[35px] bg-[#e3faff] rounded-full flex items-center justify-center text-[#34447c] font-medium">
            {order}
        </p>
    );
};

export default TextOrderQuestion;
