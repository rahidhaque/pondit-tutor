import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Loading from '../../Shared/Loading/Loading';

import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Check Email Inbox for password reset!');
        }
        else {
            toast('Please Enter Your Email');
        }
    }

    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/registration');
    }
    return (
        <div className='container w-50 mx-auto m-auto'>
            <h2 className='text-secondary text-center mt-5'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="dark w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            <div className='mt-2 text-center'>
                {errorElement}
            </div>
            <p className='text-center mt-2'>New to Genius Car? <Link to="/registration" className='text-secondary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p className='text-center mt-2'>Forget Password?
                <button variant='dark' className='btn btn-link text-secondary pe-auto text-decoration-none' onClick={resetPassword}>Reset Now</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;