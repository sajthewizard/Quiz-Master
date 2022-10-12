import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizes = useLoaderData();
    console.log(quizes.data)
    return (
        <div >

            <div className='header'>
                <h3>“There are two kinds of people in this world: those who want to get things done and those who don’t want to make mistakes.”</h3>
            </div>
            <div className='quiz'>
                {
                    quizes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>






        </div>
    );
};

export default Home;