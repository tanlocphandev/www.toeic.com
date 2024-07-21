import { questionActions, useQuestionSlice } from "@/redux/slices/question.slice";
import { useDispatch } from "react-redux";
import AnswerItem from "./AnswerItem";

const Question = ({ question, order, answers = [] }) => {
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
                        questionId={answer.question_id}
                        answerId={answer.answer_id}
                        value={answer.answer_text}
                        key={index}
                        name={answer.question_id}
                        selected={answer.answer_id === answerSelected?.[answer.question_id]}
                        onSelectedAnswer={handleSelectedAnswer}
                    />
                );
            })}
        </div>
    );
};

export default Question;
