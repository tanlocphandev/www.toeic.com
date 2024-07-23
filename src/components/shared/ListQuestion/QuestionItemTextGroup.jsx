import QuestionItem from "@/components/shared/ListQuestion/QuestionItem";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";

const QuestionItemTextGroup = ({
    groupQuestionOrder,
    groupTextHtml,
    groupTranscript,
    groupQuestions,
    isResult = false,
    textAnswerCorrect,
}) => {
    return (
        <div className="w-full rounded-lg border mb-3">
            <div className="flex">
                <div className="flex flex-col w-[62%] px-3 py-4 bg-[#cfe2ff] rounded-lg m-3 h-[650px] overflow-y-auto">
                    <TextOrderQuestion orderGroup={groupQuestionOrder} />

                    <div
                        className="text-justify"
                        dangerouslySetInnerHTML={{
                            __html: groupTextHtml,
                        }}
                    />

                    {isResult && groupTranscript ? (
                        <Transcript transcript={groupTranscript} />
                    ) : null}
                </div>

                <div className="flex w-[38%] h-[650px] overflow-y-auto mt-3">
                    <div className="flex flex-col">
                        {groupQuestions.map((question, idx) => {
                            return (
                                <QuestionItem
                                    answer_id={isResult ? question?.answer_id : undefined}
                                    isResult={isResult}
                                    transcript={
                                        isResult ? question?.question_transcript : undefined
                                    }
                                    explain={isResult ? question?.question_explain : undefined}
                                    textAnswerCorrect={textAnswerCorrect}
                                    className={"border-none"}
                                    answers={question?.answers}
                                    textQuestion={question?.question_text}
                                    order={question.question_order}
                                    key={idx}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionItemTextGroup;
