import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/Banner1.png'
import banner2 from '../../../Images/banner/Banner2.png'
import banner3 from '../../../Images/banner/Banner3.png'
import './Banner.css'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="banner-img d-block w-100 h-50"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='fw-bold text-xl'>
                    <h3>Home Teaching</h3>
                    <p>I am readily available to teach 5 days a week during evening in Home.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="banner-img d-block w-100 h-50"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='fw-bold text-xl'>
                    <h3>Online Teaching</h3>
                    <p>If there is any concern due to Corona I will be avaiable to teach you online.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="banner-img d-block w-100 h-50"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='fw-bold text-xl'>
                    <h3>Full Support</h3>
                    <p>
                        Even during my off hours student can clear confusion by knocking in social media or by phone.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;