import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import React, { Fragment } from "react";

const QuestionItemTextGroup = ({
    tags,
    groupQuestionOrder,
    groupTextHtml,
    groupTranscript,
    groupQuestions,
}) => {
    return (
        <div className="w-full rounded-lg border mb-3">
            {/* <ChipTag
                text={
                    row.part === 6
                        ? `[Part 6] Hoàn thành đoạn văn`
                        : `[Part 7] Đọc hiểu - ${row.question_type}`
                }
                className={"ml-3 mt-3"}
            /> */}

            <div className="flex">
                <div className="flex flex-col w-[62%] px-3 py-4 bg-[#cfe2ff] rounded-lg m-3 h-[650px] overflow-y-auto">
                    <TextOrderQuestion orderGroup={groupQuestionOrder} />

                    <div
                        className="text-justify"
                        dangerouslySetInnerHTML={{
                            __html: groupTextHtml,
                        }}
                    />

                    {groupTranscript ? <Transcript transcript={groupTranscript} /> : null}
                </div>

                <div className="flex w-[38%] h-[650px] overflow-y-auto mt-3">
                    <div className="flex flex-col">
                        {groupQuestions.map((question, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <div className="flex my-2">
                                        <div>
                                            <TextOrderQuestion
                                                className={"text-sm"}
                                                order={question.question_order}
                                            />
                                        </div>

                                        <Question
                                            question={question?.question_text}
                                            answers={question?.answers}
                                        />
                                    </div>

                                    {/* <AnswerCorrect textAnswerCorrect={question.is_correct_cap} /> */}

                                    {/* <ExplainQuestion explain={question.explain} /> */}
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionItemTextGroup;
