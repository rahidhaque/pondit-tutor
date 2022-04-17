import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import PrettyRating from 'pretty-rating-react';


const Review = ({ review }) => {
    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt
        }
    };
    const colors = {
        star: ['#d9ad26', '#d9ad26', '#434b4d']
    };
    const { name, img, description, rating } = review;



    return (
        <div className="g-4 col-sm-12 col-md-12 col-lg-4 position-relative mb-5">
            <Col>
                <Card className='text-center mx-auto rounded-3' style={{ width: '14rem' }}>
                    <Card.Img className='rounded-2' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <span className='fw-bold'>
                            {`Rating:`}  <PrettyRating value={rating} icons={icons.star} colors={colors.star} />
                        </span>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;