import React from 'react'; import './Quiz.css'; import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { logo, id, name, total } = quiz;

    return (
        <div className='card'>

            <img src={logo} alt="" />
            <p>Name:  {name}</p>
            <p>Total Quizes: {total}</p>
            <button className='btn'> <Link to={`/quiz/${id}`}>Start Quiz</Link></button>

        </div>
    );
};

export default Quiz;