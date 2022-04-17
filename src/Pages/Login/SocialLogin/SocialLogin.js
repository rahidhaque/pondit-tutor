import React from 'react';
import googleLogo from '../../../Images/social/google.png'
import facebookLogo from '../../../Images/social/facebook.png'
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

    if (error || error1) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (user || user1) {
        navigate('/');
    }
    return (
        <div className='container mb-5'>
            {errorElement} {loadingElement}
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-secondary w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={googleLogo} alt="" />
                    <span className='px-2 text-white'>Google Sign In</span></button>
            </div >
            <div>
                <button className='btn btn-secondary w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebookLogo} alt="" />
                    <span className='px-2 text-white'>Facebook Sign In</span></button>
            </div>
            <div>
                <button onClick={() => signInWithGithub()} className='btn btn-secondary w-100 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={githubLogo} alt="" />
                    <span className='px-2 text-white'>GitHub Sign In</span></button>
            </div>
        </div >
    );
};

export default SocialLogin;