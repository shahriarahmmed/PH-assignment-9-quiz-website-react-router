import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [quizes, setTotalQuiz] = useState([]);
    
    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data => setTotalQuiz(data.data))
    }, [])

    return (
        <div className='container mt-5'>
            <h1 className='text-center mt-5 mb-5 text-success'>Quiz name and number of quiz given show in chart</h1>
            <LineChart width={730} height={250} data={quizes}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total"/>
                <Tooltip dataKey="total"/>
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />

            </LineChart>
        </div>
    );
};

export default Statistics;