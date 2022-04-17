import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Registration.css'


const Registration = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);



    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/');
    }

    return (
        <div className='register-form'>
            <h2 className='register-text text-secondary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='your name' required />
                <br />
                <input type="email" name="email" id="email" placeholder='your email' required />
                <br />
                <input type="password" name="password" id="password" placeholder='your password' required />
                <div className='text-center mb-2'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept terms and Conditions</label> */}
                    <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Accept terms and Conditions</label>
                </div>
                <div>
                    <input disabled={!agree} className='btn btn-secondary ' type="submit" value="Register" />
                </div>
            </form>
            <p className='mt-2 text-center'>Already have an account? <Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Registration; 