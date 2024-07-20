import QuestionItem from "@/components/shared/ListQuestion/QuestionItem";
import QuestionItemAudioGroup from "@/components/shared/ListQuestion/QuestionItemAudioGroup";
import QuestionItemTextGroup from "@/components/shared/ListQuestion/QuestionItemTextGroup";
import React from "react";

const ListQuestion = ({ data = [] }) => {
    if (!data.length) return null;

    return (
        <>
            {data.map((row, index) => {
                // Part 6, 7
                if (row?.group_text) {
                    return (
                        <QuestionItemTextGroup
                            key={index}
                            groupQuestionOrder={row.group_question_order}
                            groupTextHtml={row.group_text}
                            // groupTranscript={row.group_transcript}
                            groupQuestions={row.group_questions}
                        />
                    );
                }

                // Part 3, 4
                if (row?.group_audio) {
                    return (
                        <QuestionItemAudioGroup
                            imageSrc={row?.group_image?.url}
                            key={row.group_id}
                            audioGroup={row.group_audio}
                            groupOrder={row.group_question_order}
                            groupTranscript={row.group_transcript}
                            groupQuestions={row.group_questions}
                        />
                    );
                }

                // Part 1, 2, 5
                return (
                    <QuestionItem
                        textQuestion={row?.question_text}
                        key={row.question_order}
                        answers={row.answers}
                        imageSrc={row?.question_image?.url}
                        audioSrc={row?.question_audio}
                        order={row.question_order}
                    />
                );
            })}
        </>
    );
};

export default ListQuestion;
