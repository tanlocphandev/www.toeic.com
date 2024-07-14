import React from "react";

const PartButton = ({ onClick = (e) => {}, text }) => {
    return (
        <button
            type="button"
            className="text-[#34447c] bg-[#e3faff] border border-[#34447c] hover:bg-[#34447c] hover:text-white py-1 px-5 ml-2 rounded-lg text-[14px]"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default PartButton;
