import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';

const courses = [
    "Diploma in Computer Application",
    "Advance Diploma In Computer Application",
    "Course on Computer Concepts",
    "Basic Computer Course",
    "Certificate in Computer Application",
    "Typing Speed and Accuracy (Typing Course)",
    "Diploma In Computer Programming",
    "Diploma In Advanced Programming",
    "Diploma in Web Designing",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "JAVA",
    "BOOTSTRAP",
    "TAILWIND"
];

export default function AcademyCourses() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="py-5 bg-light">
            <Container className="shadow rounded p-4">
                <h4 className="text-center fw-bold mb-2" data-aos="fade-down">
                    Courses Provided by <span className="text-success">Academy</span>
                </h4>
                <p className="text-center mb-4" data-aos="fade-up">
                    "कंप्यूटर कोचिंग" का उद्देश्य छात्रों और सामान्य लोगों को कंप्यूटर के विविध पहलुओं की संपूर्ण जानकारी देना है। इसमें बुनियादी संचालन, सॉफ्टवेयर का उपयोग, प्रोग्रामिंग, हार्डवेयर ज्ञान के साथ-साथ कोडिंग बूटकैंप्स, आई.टी. सर्टिफिकेशन और डिजिटल साक्षरता जैसे विशेष पाठ्यक्रम भी शामिल हैं। यह प्रशिक्षण आधुनिक तकनीक को समझने और डिजिटल युग में आत्मनिर्भर बनने की दिशा में एक महत्वपूर्ण कदम है।
                </p>
                <Row className="g-3 justify-content-center">
                    {courses.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={4} data-aos="zoom-in">
                            <Card className="service-card text-center">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <FaGraduationCap className="text-success fs-3 mb-2" />
                                    <span className="fw-bold text-capitalize">{item}</span>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
