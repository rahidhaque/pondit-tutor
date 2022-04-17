import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';



const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className="g-4 col-sm-12 col-md-6 col-lg-4 position-relative">
            <Col>
                <Card className='text-center'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text className='fw-bold'>
                            {`Price: ${price} Tk.`}
                        </Card.Text>
                        <Button className='' variant="secondary">Book {name}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;