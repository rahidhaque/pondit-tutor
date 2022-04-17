import React from 'react';
import sleeping from '../../../Images/404.jpg'

const NotFound = () => {
    return (
        <div className='my-5'>
            <h2 className='text-secondary text-center'>OOPS! Page you are looking for is not Found!</h2>
            <div className='text-center mt-5'>
                <img className='img-fluid' style={{ height: '600px', width: '650px' }} src={sleeping} alt="" />
            </div>
        </div>
    );
};

export default NotFound;