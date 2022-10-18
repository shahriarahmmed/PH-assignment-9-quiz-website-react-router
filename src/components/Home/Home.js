import React, { useEffect, useState } from 'react';
import Cards from '../Card/Cards';
import QuizCards from '../QuizCards/QuizCards';



const Home = () => {
    const [quizes, setQuiz] = useState([]);


    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setQuiz(data.data))
    }, [])

    return (
        <div>
            <Cards></Cards>
            {
                quizes.map(quiz => 
                    <QuizCards
                        // key={id}
                        quiz={quiz}
                    ></QuizCards>)
            }
        </div>
    );
};

export default Home;