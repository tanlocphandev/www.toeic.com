import AnswerCorrect from "@/components/shared/PartTest/AnswerCorrect";
import AudioBase from "@/components/shared/PartTest/AudioBase";
import ExplainQuestion from "@/components/shared/PartTest/ExplainQuestion";
import Question from "@/components/shared/PartTest/Question";
import Transcript from "@/components/shared/PartTest/Transcript";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";

const QuestionItem = ({
    imageSrc,
    order,
    textQuestion,
    answers,
    textAnswerCorrect,
    explain,
    tags,
    audioSrc,
    transcript,
    className = "w-full p-4 rounded-lg border mb-3",
    isResult = false,
    answer_id = null,
}) => {
    return (
        <div className={className}>
            {/* <ListTag tags={row.tags} /> */}

            {audioSrc ? <AudioBase option={audioSrc} /> : null}

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

            {transcript ? <Transcript transcript={transcript} /> : null}

            <div className="flex my-4">
                <div>
                    <TextOrderQuestion order={order} />
                </div>

                <Question
                    answer_id={answer_id}
                    isResult={isResult}
                    order={order}
                    question={textQuestion}
                    answers={answers}
                />
            </div>

            {isResult &&
            textAnswerCorrect &&
            !answers?.find((t) => t.answer_id === answer_id)?.answer_isCorrect ? (
                <AnswerCorrect textAnswerCorrect={textAnswerCorrect} />
            ) : null}

            {explain ? <ExplainQuestion explain={explain} /> : null}
        </div>
    );
};

export default QuestionItem;
