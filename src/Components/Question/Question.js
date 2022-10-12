import React from 'react'; import './Question.css'

const Question = ({ ques }) => {
    console.log(ques);
    const { question, correctAnswer, options } = ques;

    return (
        <div>
            <div className='ques'>
                <h4>Question:{question}</h4>
            </div>



        </div>
    );
};

export default Question;