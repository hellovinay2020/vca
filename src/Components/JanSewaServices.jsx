import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckSquare } from 'react-icons/fa';
import AOS from 'aos';


const services = [
    "आय प्रमाण पत्र", "जाति प्रमाण पत्र", "निवास प्रमाण पत्र",
    "जन्म प्रमाण पत्र", "मृत्यु प्रमाण पत्र", "हैसियत प्रमाण पत्र",
    "खतोनी की नकल", "कुंडली रजिस्टर", "पंचायती राज विभाग",
    "छात्रवृत्ति के लिए आवेदन", "शादी अनुदान", "वृद्धा पेंशन",
    "विधवा पेंशन", "विकलांग पेंशन", "विवाह पंजीकरण",
    "प्रधानमंत्री आयुष्मान भारत योजना", "राशन कार्ड नया एवं सुधार", "ड्राइविंग लाइसेंस"
];

export default function JanSewaServices() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="py-5 bg-light">
            <div className="jansewa-container shadow p-4">
                <Container>
                    <h4 className="text-center fw-bold mb-2" data-aos="fade-down">
                        Services Provided by <span className="text-success">Jan Sewa Kendra</span>
                    </h4>
                    <p className="text-center text-muted mb-4" data-aos="fade-up">
                        "जन सेवा केंद्र जाति, आय, निवास प्रमाण पत्र आदि से संबंधित विभिन्न सेवाएं प्रदान करता है, साथ ही और भी कई सेवाएं उपलब्ध हैं जो शहरी और ग्रामीण दोनों लोगों के लिए जीवन को आसान और परेशानी मुक्त बनाने में मदद करती हैं। जन सेवा केंद्र द्वारा प्रदान की जाने वाली कुछ प्रमुख सेवाएं निम्नलिखित हैं:"
                    </p>
                    <Row className="g-3 justify-content-center">
                        {services.map((service, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={4} xl={3} data-aos="zoom-in">
                                <Card className="service-card text-center">
                                    <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                        <FaCheckSquare className="text-success fs-3 mb-2" />
                                        <span className="fw-bold small">{service}</span>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    );
}
