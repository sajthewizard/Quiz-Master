import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quizdetails.css'

const Quizdetails = () => {

    const datas = useLoaderData();

    const { name, questions } = datas.data;
    return (
        <div>
            <h1>Quiz of {name}</h1>
            {
                questions.map(ques => <Question key={ques.id} ques={ques}></Question>)
            }

        </div>
    );
};

export default Quizdetails;