import Audio from "@/components/shared/PartTest/AudioBase";
import Question from "@/components/shared/PartTest/Question";
import TextOrderQuestion from "@/components/shared/TextOrderQuestion";

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
    className = "w-full p-4 rounded-lg border mb-3",
}) => {
    return (
        <div className={className}>
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
                <div>
                    <TextOrderQuestion order={order} />
                </div>

                <Question order={order} question={textQuestion} answers={answers} />
            </div>

            {/* <AnswerCorrect textAnswerCorrect={row.is_correct_cap} /> */}

            {/* <ExplainQuestion explain={row.explain} /> */}
        </div>
    );
};

export default QuestionItem;
