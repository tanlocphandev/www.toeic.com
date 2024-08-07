import ListTag from "@/components/shared/ListTag";
import AnswerCorrect from "@/components/shared/PartTest/AnswerCorrect";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";
import { mapperAnswerToText } from "@/utils";
import { memo } from "react";
import ReactQuill from "react-quill";

const EditQuestion = ({ data = null, onChangeTranscript, onChangeExplain, onChangeAnswer }) => {
    if (!data) return null;

    // Part 1, 2, 5
    return (
        <div className="h-full p-4 rounded-lg border mb-3">
            <ListTag tags={data?.tags?.map((t) => t?.tag?.tag_name)} />

            {/* {data.audio ? <AudioBase option={data} /> : null} */}

            {data.question_image ? (
                <div>
                    <img
                        loading="lazy"
                        className="w-[300px] m-auto h-[250px]"
                        src={data.question_image.url}
                        alt={data.question_image.url}
                    />
                </div>
            ) : null}

            <Transcript transcript={data.question_transcript} />

            {data?.question_transcript ? (
                <div className="mt-2">
                    <ReactQuill
                        theme="snow"
                        value={data?.question_transcript}
                        onChange={onChangeTranscript}
                    />
                </div>
            ) : null}

            <p className="text-red-500 mt-2 text-sm font-medium italic">
                * Nếu muốn thay đổi đáp án vui lòng chọn
            </p>

            <div className="flex my-4">
                <TextOrderQuestion order={data?.question_order} />

                <Question
                    selectedId={data?.answers?.find((a) => a.answer_isCorrect === 1)?.answer_id}
                    onChangeAnswer={onChangeAnswer}
                    question={data?.question_text}
                    answers={data?.answers}
                />
            </div>

            <AnswerCorrect
                textAnswerCorrect={mapperAnswerToText(
                    data?.answers?.find((a) => a.answer_isCorrect === 1)?.answer_order
                )}
            />

            <ExplainQuestion explain={data.question_explain} />

            {data?.question_explain ? (
                <div className="mt-2">
                    <ReactQuill
                        theme="snow"
                        value={data?.question_explain}
                        onChange={onChangeExplain}
                    />
                </div>
            ) : null}
        </div>
    );
};

EditQuestion.displayName = "EditQuestion";

export default memo(EditQuestion);
