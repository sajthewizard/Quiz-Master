import React from 'react'; import './Quiz.css'

const Quiz = ({ quiz }) => {
    const { logo, name, total } = quiz;

    return (
        <div className='card'>

            <img src={logo} alt="" />
            <p>Name:  {name}</p>
            <p>Total Quizes: {total}</p>
            <button className='btn'> Start Quiz</button>

        </div>
    );
};

export default Quiz;