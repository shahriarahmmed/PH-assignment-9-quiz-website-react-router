import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [quizes, setTotalQuiz] = useState([]);

    // useEffect( () => {
    //     fetch('https://openapi.programming-hero.com/api/quiz')
    //     .then(res => res.json())
    //     .then(data => setTotalQuiz(data))
    // }, [])

    return (
        <div className='container mt-5'>
            
            <h1>This is statistics page</h1>
            <LineChart width={730} height={250} 
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;