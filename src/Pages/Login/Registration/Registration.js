import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Registration.css'
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Registration = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigateLogin = event => {
        navigate('/login');
    }



    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    if (user) {
        navigate('/');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>
    }


    return (
        <div className='mt-32 register-form'>
            <h2 className='register-text text-secondary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='your name' required />
                <br />
                <input type="email" name="email" id="email" placeholder='your email' required />
                <br />
                <input type="password" name="password" id="password" placeholder='your password' required />
                <div className='mt-2 text-center'>
                    {errorElement}
                </div>
                <div className='text-center mb-2'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept terms and Conditions</label> */}
                    <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Accept terms and Conditions</label>
                </div>
                <div>
                    <input disabled={!agree} className='btn btn-dark' type="submit" value="Register" />
                </div>
            </form>
            <p className='mt-2 text-center'>Already have an account? <Link to={'/login'} className='text-secondary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration; 