import React from 'react'; import Option from '../option/Option';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Question = ({ ques }) => {

    const checkAnswer = option => {
        if (option === correctAnswer) {
            toast("Shabbash !!!!  Correct answer!");


        }
        else {
            toast('Kire Bhai!!! Pick the right answer')
        }
    }
    const { question, correctAnswer, options } = ques;

    return (
        <div>
            <div className='ques'>
                <h4>Question:{question}</h4>

                {
                    options.map(option => <Option key={option.id} option={option} checkAnswer={checkAnswer}></Option>)
                }
                <ToastContainer />
            </div>



        </div>
    );
};

export default Question;