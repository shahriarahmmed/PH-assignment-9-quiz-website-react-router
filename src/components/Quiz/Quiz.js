import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Options from '../Options/Options';

const Quiz = (props) => {
    
    return (
        <div className='container mt-5'>
            <h2 className='text-center fw-bold mb-5'>Quiz Name: {}</h2>
            <Card className="text-center">
                <Card.Header><h3>Featured</h3></Card.Header>
                <Card.Body>
                    {/* <Options></Options> */}
                </Card.Body>

            </Card>
        </div >
    );
};

export default Quiz;