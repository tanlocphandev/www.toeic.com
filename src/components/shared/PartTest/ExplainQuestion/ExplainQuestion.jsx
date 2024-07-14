import { useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";

const ExplainQuestion = ({ explain }) => {
    const [isExplanationVisible, setIsExplanationVisible] = useState(false);

    const toggleExplanation = () => {
        setIsExplanationVisible(!isExplanationVisible);
    };

    return (
        <div className="mb-3 p-1">
            <button
                onClick={toggleExplanation}
                className="flex items-center text-[#34447c] font-medium"
            >
                Giải thích chi tiết đáp án <IoCaretDownOutline className="ml-1" />
            </button>

            {isExplanationVisible && (
                <>
                    {!explain ? <h4 className="font-bold">Dịch đáp án</h4> : null}

                    <div>
                        {explain ? (
                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={{ __html: explain }}
                            />
                        ) : null}

                        {/* {value.question ? (
                            <div
                                className="text-justify mb-2"
                                dangerouslySetInnerHTML={{ __html: value.question }}
                            ></div>
                        ) : null}

                        {value.answerA ? <p>{value.answerA}</p> : null}
                        {value.answerB ? <p>{value.answerB}</p> : null}
                        {value.answerC ? <p>{value.answerC}</p> : null}
                        {value.answerD ? <p>{value.answerD}</p> : null} */}
                    </div>
                </>
            )}
        </div>
    );
};

export default ExplainQuestion;
