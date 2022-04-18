import React from 'react';
import about from '../../Images/about.jpg'
import './About.css'
const About = () => {
    return (
        <div className='container about-container  my-5 d-flex justify-content-center'>
            <div className='w-100'>
                <img className='w-50' src={about} alt="" />
            </div>
            <div className='w-50'>
                <h2>About Me</h2>
                <p className='text-xl fw-bold'>My name is S M RAHID HAQUE</p>
                <small>My main aim right now is to become a junior web developer. It has been a tough  4 months and it taught me great deal of hardship. I also realized that there is no pain without any sweat and there is no proper learning without it. But still there is long way to go but I hope it is possible.</small>
            </div>
        </div>
    );
};

export default About;