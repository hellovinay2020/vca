import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckSquare } from 'react-icons/fa';
import AOS from 'aos';

const services = [
    "बैलेंस चेक करें",
    "पैसा भेजे",
    "जमा करें",
    "निकासी करें",
    "आधार कार्ड से किसी भी बैंक का पैसा प्राप्त करें",
    "आपका आधार कार्ड ही आपका ATM"
];

export default function BankingServices() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="py-5 bg-light">
            <Container className="bank-container shadow p-4">
                <h4 className="text-center fw-bold mb-3" data-aos="fade-down">
                    Services Provided by <span className="text-success">Banking</span>
                </h4>
                <p className="text-center mb-4" data-aos="fade-up">
                    "बैंकिंग सेवाओं में ग्राहकों को प्रदान की जाने वाली विभिन्न प्रकार की वित्तीय सुविधाएँ शामिल होती हैं। इनमें प्रमुख सेवाएं निम्नलिखित हैं:"
                </p>
                <Row className="g-4 justify-content-center">
                    {services.map((service, idx) => (
                        <Col xs={12} sm={6} md={4} lg={4} key={idx} data-aos="zoom-in">
                            <Card className="service-card text-center border border-dark">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <FaCheckSquare className="text-success fs-2 mb-2" />
                                    <span className="fw-bold">{service}</span>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
