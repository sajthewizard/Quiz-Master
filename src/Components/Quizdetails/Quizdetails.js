import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizdetails = () => {

    const datas = useLoaderData();
    console.log(datas);
    const { name, questions } = datas.data;
    return (
        <div>
            <h1>Quiz of {name}</h1>

        </div>
    );
};

export default Quizdetails;