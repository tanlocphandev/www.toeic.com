import QuestionItem from "@/components/shared/ListQuestion/QuestionItem";
import QuestionItemAudioGroup from "@/components/shared/ListQuestion/QuestionItemAudioGroup";
import QuestionItemTextGroup from "@/components/shared/ListQuestion/QuestionItemTextGroup";
import { mapperAnswerToText } from "@/utils";

const ListQuestion = ({ data = [], isResult = false }) => {
    if (!data.length) return null;

    return (
        <>
            {data.map((row, index) => {
                console.log(row?.answerCorrect);

                // Part 6, 7
                if (row?.group_text) {
                    return (
                        <QuestionItemTextGroup
                            key={index}
                            groupQuestionOrder={row.group_question_order}
                            groupTextHtml={row.group_text}
                            groupTranscript={isResult ? row.group_transcript : undefined}
                            groupQuestions={row.group_questions}
                            isResult={isResult}
                        />
                    );
                }

                // Part 3, 4
                if (row?.group_audio) {
                    return (
                        <QuestionItemAudioGroup
                            imageSrc={row?.group_image?.url}
                            key={row.group_id}
                            audioGroup={row?.group_audio}
                            imageGroup={row?.group_image}
                            groupOrder={row.group_question_order}
                            groupTranscript={row.group_transcript}
                            groupQuestions={row.group_questions}
                            isResult={isResult}
                            answer_id={row?.answer_id}
                        />
                    );
                }

                // Part 1, 2, 5
                return (
                    <QuestionItem
                        textAnswerCorrect={mapperAnswerToText(row?.answerCorrect?.answer_order)}
                        answer_id={row?.answer_id}
                        isResult={isResult}
                        textQuestion={row?.question_text}
                        key={row.question_order}
                        answers={row.answers}
                        imageSrc={row?.question_image?.url}
                        audioSrc={row?.question_audio}
                        order={row.question_order}
                        explain={isResult ? row.question_explain : undefined}
                        transcript={isResult ? row.question_transcript : undefined}
                    />
                );
            })}
        </>
    );
};

export default ListQuestion;
