import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ServiceContext } from '../../App';
import auth from '../../firebase.init';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const [services] = useContext(ServiceContext);
    const { serviceId } = useParams();
    const navigate = useNavigate();
    const id = parseInt(serviceId);
    const service = services.find((service) => service.id === id);


    return (
        <div>
            <h2 className='text-center text-secondary mt-5'>Subject Overview</h2>
            <Col className='my-5 d-flex justify-content-center'>
                <Card className='text-center' style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={service?.img} />
                    <Card.Body>
                        <Card.Title>{service?.name}</Card.Title>
                        <Card.Text>
                            {service?.description}
                        </Card.Text>
                        <Card.Text className='fw-bold'>
                            {`Price: ${service?.price} Tk.`}
                        </Card.Text>
                        <Card.Text className='fw-bold text-xl'>
                            Thank you for choosing {service?.name}! Please Checkout to continue...
                        </Card.Text>
                        <Button onClick={() => navigate(`/checkout`)} className='' variant="dark">Checkout</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceDetail;