import QuestionItem from "@/components/shared/ListQuestion/QuestionItem";
import Audio from "@/components/shared/PartTest/AudioBase";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import { mapperAnswerToText } from "@/utils";
import { memo } from "react";

const QuestionItemAudioGroup = ({
    isFullTest = false,
    audioGroup,
    imageSrc,
    groupOrder,
    groupTranscript,
    groupQuestions = [],
    isResult = false,
}) => {
    return (
        <div className="w-full p-4 rounded-lg shadow-lg mb-3">
            <TextOrderQuestion className={"mb-0"} orderGroup={groupOrder} />

            {!isFullTest ? <Audio option={audioGroup} /> : null}

            {groupTranscript ? <Transcript transcript={groupTranscript} /> : null}

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
                    className="border-none"
                    key={index}
                    isResult={isResult}
                    textAnswerCorrect={
                        isResult
                            ? mapperAnswerToText(question.answerCorrect?.answer_order)
                            : undefined
                    }
                    answers={question.answers}
                    textQuestion={question.question_text}
                    order={question.question_order}
                    answer_id={question.answer_id}
                    explain={isResult ? question.question_explain : undefined}
                />
            ))}
        </div>
    );
};

QuestionItemAudioGroup.displayName = "QuestionItemAudioGroup";

export default memo(QuestionItemAudioGroup);
