import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import all images from assets
import img1 from '../assets/MarqueSlider/v-1.jpg';
import img2 from '../assets/MarqueSlider/v-2.jpg';
import img3 from '../assets/MarqueSlider/v-3.jpg';
import img4 from '../assets/MarqueSlider/v-4.jpg';
import img5 from '../assets/MarqueSlider/v-5.jpg';
import img6 from '../assets/MarqueSlider/v-6.jpg';
// import img7 from '../assets/MarqueSlider/v-7.png';
import img8 from '../assets/MarqueSlider/v-8.jpg';

const imagePaths = [img1, img2, img3, img4, img5, img6, img8];

export default function ImageMarquee() {
    return (
        <div className="image-marquee-wrapper py-4 bg-light">
            <Container fluid>
                <Row>
                    <Col>
                        <div className="marquee">
                            <div className="marquee-content">
                                {[...imagePaths, ...imagePaths].map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`marquee-${idx}`}
                                        className="marquee-img"
                                    />
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
