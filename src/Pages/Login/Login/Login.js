import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h2 className='text-primary text-center mt-5'>Please Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="secondary w-50 mx-auto d-block" type="submit">
                        Submit
                    </Button>
                </Form>

                <p className='text-center mt-2'>New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
                <p className='text-center mt-2'>Forget Password?
                    <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Now</button> </p>
            </div>
        </div>
    );
};

export default Login;