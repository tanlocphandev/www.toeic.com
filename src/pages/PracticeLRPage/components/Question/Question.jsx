import React, { useState } from 'react'
import AnswerItem from './AnswerItem';

const Question = ({ question }) => {


    return (

        <div>
            <p className="mb-2">{question.question}</p>
            <AnswerItem value={question.answerA} />
            <AnswerItem value={question.answerB} />
            <AnswerItem value={question.answerC} />
            {
                question.answerD ?
                    <AnswerItem value={question.answerD} />
                    : null
            }
        </div>
    )
}

export default Question