import ChipTag from "@/components/shared/ChipTag/ChipTag";
import ListTag from "@/components/shared/ListTag";
import AnswerCorrect from "@/components/shared/PartTest/AnswerCorrect";
import Audio from "@/components/shared/PartTest/AudioBase";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import { Fragment, memo } from "react";

const ReviewPart = ({ data = [] }) => {
    if (!data.length) return null;

    return (
        <>
            {data.map((row, index) => {
                // Part 6,7
                if (row.text) {
                    return (
                        <div className="w-full rounded-lg border mb-3" key={index}>
                            <ChipTag
                                text={
                                    row.part === 6
                                        ? `[Part 6] Hoàn thành đoạn văn`
                                        : `[Part 7] Đọc hiểu - ${row.question_type}`
                                }
                                className={"ml-3 mt-3"}
                            />

                            <div className="flex">
                                <div className="flex flex-col w-[62%] px-3 py-4 bg-[#cfe2ff] rounded-lg m-3 h-[650px] overflow-y-auto">
                                    <TextOrderQuestion orderGroup={row.group_question_order} />

                                    <div
                                        className="text-justify"
                                        dangerouslySetInnerHTML={{
                                            __html: row.text,
                                        }}
                                    />

                                    <Transcript transcript={row.group_transcript} />
                                </div>

                                <div className="flex w-[38%] h-[650px] overflow-y-auto mt-3">
                                    <div className="flex flex-col">
                                        {row.group_questions.map((question, idx) => {
                                            return (
                                                <Fragment key={idx}>
                                                    <div className="flex my-2">
                                                        <TextOrderQuestion order={question.order} />

                                                        <Question
                                                            question={question?.text_question}
                                                            answers={question?.answers}
                                                        />
                                                    </div>

                                                    <AnswerCorrect
                                                        textAnswerCorrect={question.is_correct_cap}
                                                    />

                                                    <ExplainQuestion explain={question.explain} />
                                                </Fragment>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }

                // Part 3,4
                if (row.audio && row.group_questions && row.group_question_order) {
                    return row.group_questions.map((question, index) => {
                        return (
                            <div key={index} className="w-full p-4 rounded-lg border mb-3">
                                <ListTag tags={question.tags} />

                                <Audio option={question} />

                                <Transcript transcript={row.group_transcript} />

                                <div className="flex my-4">
                                    <TextOrderQuestion order={question.order} />

                                    <Question
                                        question={question?.text_question}
                                        answers={question?.answers}
                                    />
                                </div>

                                <AnswerCorrect textAnswerCorrect={question.is_correct_cap} />

                                <ExplainQuestion explain={question.explain} />
                            </div>
                        );
                    });
                }

                // Part 1,2,5
                return (
                    <div key={index} className="w-full p-4 rounded-lg border mb-3">
                        <ListTag tags={row.tags} />

                        {row.audio ? <Audio option={row} /> : null}

                        {row.uploadImageCloud ? (
                            <div>
                                <img
                                    loading="lazy"
                                    className="w-[300px] m-auto h-[250px]"
                                    src={row.uploadImageCloud.url}
                                    alt={row.uploadImageCloud.url}
                                />
                            </div>
                        ) : null}

                        <Transcript transcript={row.transcript} />

                        <div className="flex my-4">
                            <TextOrderQuestion order={row.order} />

                            <Question question={row?.text_question} answers={row?.answers} />
                        </div>

                        <AnswerCorrect textAnswerCorrect={row.is_correct_cap} />

                        <ExplainQuestion explain={row.explain} />
                    </div>
                );
            })}
        </>
    );
};

ReviewPart.displayName = "ReviewPart";

export default memo(ReviewPart);
