import AnswerItem from "./AnswerItem";

const Question = ({ question, answers = [] }) => {
    return (
        <div>
            {question ? <p className="mb-2">{question}</p> : null}

            {answers.map((answer, index) => {
                return <AnswerItem value={answer.answer_text} key={index} />;
            })}
        </div>
    );
};

export default Question;
