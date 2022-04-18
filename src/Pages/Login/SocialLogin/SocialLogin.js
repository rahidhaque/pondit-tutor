import React, { useEffect } from 'react';
import googleLogo from '../../../Images/social/google.png'
import githubLogo from '../../../Images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    let loadingElement;

    useEffect(() => {
        if (user || user1) {
            navigate('/');
        }
    })

    if (error || error1) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }


    return (
        <div className='container mb-5'>
            {errorElement} {loadingElement}
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={googleLogo} alt="" />
                    <span className='px-2 text-white'>Google Sign In</span></button>
            </div >

            <div>
                <button onClick={() => signInWithGithub()} className='btn btn-dark w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={githubLogo} alt="" />
                    <span className='px-2 text-white'>GitHub Sign In</span></button>
            </div>
        </div >
    );
};

export default SocialLogin;