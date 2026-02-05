import React from 'react'
import { Carousel } from 'react-bootstrap'
import top_1 from '../assets/top_1.jpg';
import top_2 from '../assets/top_2.jpg';
import top_3 from '../assets/top_3.jpg';
import top_4 from '../assets/top_4.jpg';
import top_5 from '../assets/top_5.jpg';
import top_6 from '../assets/top_6.jpg';

export default function Slider() {
    return (
        <div>
            {/* Slider*/}
            <Carousel fade indicators={false} interval={3000} controls={true}>
                <Carousel.Item>
                    <img className="d-block w-100 slider-img" src={top_1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slider-img" src={top_2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slider-img" src={top_3} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slider-img" src={top_4} alt="Fourth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slider-img" src={top_5} alt="Fifth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 slider-img" src={top_6} alt="Sixth slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
