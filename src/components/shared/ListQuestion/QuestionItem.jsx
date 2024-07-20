import Audio from "@/components/shared/PartTest/Audio";
import Question from "@/components/shared/PartTest/Question";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import React from "react";

const QuestionItem = ({
    imageSrc,
    order,
    textQuestion,
    answers,
    isCorrect,
    explain,
    tags,
    audioSrc,
    transcript,
}) => {
    return (
        <div className="w-full p-4 rounded-lg border mb-3">
            {/* <ListTag tags={row.tags} /> */}

            {audioSrc ? <Audio option={audioSrc} /> : null}

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

            {/* <Transcript transcript={row.transcript} /> */}

            <div className="flex my-4">
                <TextOrderQuestion order={order} />

                <Question question={textQuestion} answers={answers} />
            </div>

            {/* <AnswerCorrect textAnswerCorrect={row.is_correct_cap} /> */}

            {/* <ExplainQuestion explain={row.explain} /> */}
        </div>
    );
};

export default QuestionItem;
