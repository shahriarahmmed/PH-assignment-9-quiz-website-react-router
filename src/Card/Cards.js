import React from 'react';

import Card from 'react-bootstrap/Card';
import './web-banner.png';


const Cards = () => {
    return (
        <div className='container mt-5'>
            <Card>
                <Card.Img variant="top" src="https://chkskills.com/wp-content/uploads/2020/04/PNC-Animated-Banners.gif" />
                <Card.Body>
                    <Card.Text>
                        <h3><span className='text-primary'>Dev Skill Test</span> is platform for test your web development skill.</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;