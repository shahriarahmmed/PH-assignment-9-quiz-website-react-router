import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Options = () => {

    const [options, setOption] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/1`)
            .then(res => res.json())
            .then(data => setOption(data.data.questions.question))
    }, [])
    const quizData = useLoaderData();
    return (
        <div>
            <div className="d-grid gap-2">
                {
                    options.map(option =>
                        <Button variant="outline-primary" size="lg"
                            option={option}
                        ></Button>)
                }
            </div>
        </div>
    );
};

export default Options;