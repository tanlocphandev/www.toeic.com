import { questionActions, useQuestionSlice } from "@/redux/slices/question.slice";
import { useDispatch } from "react-redux";
import AnswerItem from "./AnswerItem";

const Question = ({ question, order, answers = [], isResult = false, answer_id = null }) => {
    const dispatch = useDispatch();
    const { answerSelected } = useQuestionSlice();

    const handleSelectedAnswer = (answerId, questionId) => {
        dispatch(questionActions.setAnswerSelected({ answerId, questionId }));
        dispatch(questionActions.setPushOrderSelected(order));
    };

    return (
        <div>
            {question ? <p className="mb-2">{question}</p> : null}

            {answers.map((answer, index) => {
                return (
                    <AnswerItem
                        defaultValue={answer.answer_id}
                        isResult={isResult}
                        questionId={answer.question_id}
                        answerId={answer.answer_id}
                        value={answer.answer_text}
                        key={index}
                        name={answer.question_id}
                        selected={
                            isResult
                                ? answer.answer_id === answer_id
                                : answer.answer_id === answerSelected?.[answer.question_id]
                        }
                        isWrong={answer.answer_id === answer_id && !answer.answer_isCorrect}
                        isCorrect={answer.answer_id === answer_id && answer.answer_isCorrect}
                        onSelectedAnswer={handleSelectedAnswer}
                    />
                );
            })}
        </div>
    );
};

export default Question;
