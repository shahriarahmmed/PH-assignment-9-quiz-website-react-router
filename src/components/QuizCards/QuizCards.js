import React, { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const QuizCards = (props) => {
    const {id, name, logo} = props.quiz;
    // useEffect( () => {
    //     fetch('https://openapi.programming-hero.com/api/quiz')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])

    return (
        <div className='container mt-5'>
            <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Quiz Name: {name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Start Quiz</Button>
                            </Card.Body>
                        </Card>

                    </Col>
            </Row>
        </div>
    );
};

export default QuizCards;