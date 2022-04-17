import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div id='reviews'>
            <div className='container mt-5'>
                <h2 className='text-secondary text-center'>See What Other Peoples are Saying</h2>
                <div className='row mt-5'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        >

                        </Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;