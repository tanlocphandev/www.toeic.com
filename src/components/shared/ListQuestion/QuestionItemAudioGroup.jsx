import QuestionItem from "@/components/shared/ListQuestion/QuestionItem";
import Audio from "@/components/shared/PartTest/Audio";
import React from "react";

const QuestionItemAudioGroup = ({
    audioGroup,
    imageSrc,
    groupOrder,
    groupTranscript,
    groupQuestions = [],
}) => {
    return (
        <>
            <Audio option={audioGroup} />

            {imageSrc ? (
                <div>
                    <img
                        loading="lazy"
                        className="w-[300px] m-auto h-[250px]"
                        src={imageSrc}
                        alt={imageSrc}
                    />
                </div>
            ) : null}

            {groupQuestions.map((question, index) => (
                <QuestionItem
                    key={index}
                    answers={question.answers}
                    textQuestion={question.question_text}
                    order={question.question_order}
                />
            ))}
        </>
    );
};

export default QuestionItemAudioGroup;
