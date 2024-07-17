import React from "react";

const AnswerCorrect = ({ textAnswerCorrect }) => {
    return (
        <p className="text-green-700 font-medium bg-green-600/10 px-3 py-2 inline-block rounded-sm">
            Đáp án chính xác là: {textAnswerCorrect}
        </p>
    );
};

export default AnswerCorrect;
