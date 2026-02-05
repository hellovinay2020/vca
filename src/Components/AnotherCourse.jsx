import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import img1 from '../assets/coding/coding1.png';
import img2 from '../assets/coding/coding2.png';
import img3 from '../assets/coding/coding3.png';
import img4 from '../assets/coding/coding4.png';
import img5 from '../assets/coding/coding5.png';
import img6 from '../assets/coding/coding6.png';



const courses = [
    { price: "₹ 2000", title: "C PROGRAMMING", desc: "Course Fees :  ₹ 2000/- Duration: 1 MONTH", seats: 20, img: img1 },
    { price: "₹ 1500", title: "HTML", desc: "Course Fees :  ₹ 1500/- Duration: 1 MONTH", seats: 24, img: img2 },
    { price: "₹ 1500", title: "CSS", desc: "Course Fees :  ₹ 1500/- Duration: 1 MONTH", seats: 30, img: img3 },
    { price: "₹ 1500", title: "TAILWIND", desc: "Course Fees :  ₹ 1500/- Duration: 1 MONTH", seats: 40, img: img4 },
    { price: "₹ 2000", title: "JAVASCRIPT", desc: "Course Fees :  ₹ 2000/- Duration: 2 MONTH", seats: 30, img: img5 },
    { price: "₹ 2000 ", title: "BOOTSTRAP", desc: "Course Fees :  ₹ 2000/- Duration: 2 MONTH", seats: 25, img: img6 },
];

const groupedCourses = [];
for (let i = 0; i < courses.length; i += 3) {
    groupedCourses.push(courses.slice(i, i + 3));
}

export default function AnotherCourse() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        const newIndex = index === 0 ? groupedCourses.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (index + 1) % groupedCourses.length;
        setIndex(newIndex);
    };

    return (
        <section className="my-5">
            <Container>
                <h2 className="text-center fw-bold mb-4" style={{ color: "#00ac24" }}>
                    Another Course
                </h2>

                <div className="feature-course-container position-relative">
                    {/* Left Arrow */}
                    <Button
                        className="carousel-control-custom position-absolute top-50 start-0 translate-middle-y"
                        onClick={handlePrev}
                    >
                        &lt;
                    </Button>

                    <Carousel
                        indicators={false}
                        controls={false}
                        interval={3000}
                        pause={false}
                        activeIndex={index}
                        onSelect={(selectedIndex) => setIndex(selectedIndex)}
                    >
                        {groupedCourses.map((group, idx) => (
                            <Carousel.Item key={idx}>
                                <Row className="justify-content-center">
                                    {group.map((course, i) => (
                                        <Col md={4} key={i} className="mb-4">
                                            <div className="course-card-wrapper">
                                                <Card className="shadow course-card">
                                                    <Card.Img variant="top" src={course.img} className="img-hover" />
                                                    <Card.Body>
                                                        <h5>{course.price}</h5>
                                                        <h6 className="fw-bold">{course.title}</h6>
                                                        <div className="rating text-warning mb-2">
                                                            {[...Array(5)].map((_, idx) => (
                                                                <FaStar key={idx} />
                                                            ))}
                                                        </div>

                                                        <p>{course.desc}</p>
                                                        <div className="d-flex justify-content-between text-muted">
                                                            <span>{course.seats} Seats</span>
                                                            <span>❤️ Save</span>
                                                        </div>
                                                        <center>
                                                            <button className='btn btn-danger'>Registration Open </button>
                                                        </center>

                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    {/* Right Arrow */}
                    <Button
                        className="carousel-control-custom position-absolute top-50 end-0 translate-middle-y"
                        onClick={handleNext}
                    >
                        &gt;
                    </Button>
                </div>
            </Container>
        </section>
    );
}
