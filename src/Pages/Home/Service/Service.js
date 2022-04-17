import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
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
                        <Button onClick={() => navigate(`/service/${id}`)} className='' variant="secondary">Book {name}</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;