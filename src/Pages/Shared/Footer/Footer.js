import React from 'react';

const Footer = () => {
    return (
        <div className='fixed-bottom'>

            <footer className="bg-light text-center mt-auto">
                <div className="fw-bold text-center text-xl p-3 bg-secondary">
                    <p className='text-white'> &copy; {new Date().getFullYear()} Copyright: Pondit Tutor</p>
                </div>
            </footer >

        </div >
    );
};

export default Footer;