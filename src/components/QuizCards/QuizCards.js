import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const QuizCards = (props) => {
    const { name, logo, total} = props.quiz;
    const [quizId, setQuizId] = useState([]);
    useEffect( () => {
        fetch(`https://openapi.programming-hero.com/api/quiz/1`)
        .then(res => res.json())
        .then(data => console.log(data.data))
    }, [])

    return (
        <div className='container mt-5'>
            <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img className='bg-dark' variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title className='display-6 fw-bold'> {name}</Card.Title>
                                <Card.Text>
                                    Total Quiz: {total}
                                </Card.Text>
                                <Link to='/quiz'><Button variant="primary" onClick={() => props.handleQuizStartBtn(props.quiz)}>Start Quiz</Button></Link>
                            </Card.Body>
                        </Card>

                    </Col>
            </Row>
        </div>
    );
};

export default QuizCards;