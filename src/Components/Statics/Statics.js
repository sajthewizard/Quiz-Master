import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'; import "./Statics.css"

const Statics = () => {
    const [questions, setQuestions] = useState([]); useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const questionsFind = data.data.data;
                const num = questionsFind.map(que => {
                    const id = que.id;
                    const total = que.total; const queData = {
                        id: id,
                        total: total
                    }
                    return queData;
                })
                setQuestions(num);
            })
    }, [])
    return (
        <BarChart className='bar' width={550} height={400} data={questions}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis datakey="Total"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </BarChart>

    );
};

export default Statics;