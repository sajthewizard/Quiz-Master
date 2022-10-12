import React from 'react'; import './Option.css'

const Option = ({ option, checkAnswer }) => {
    return (
        <div className='option'>
            <input onClick={() => checkAnswer(option)} type="radio" value="option" name="option" /> {option}
        </div>
    );
};

export default Option;