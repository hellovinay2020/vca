import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckSquare } from 'react-icons/fa';
import AOS from 'aos';

const services = [
    "आधार प्रिंट", "पासपोर्ट", "फोटो कॉपी",
    "DHT रिचार्ज", "मोबाइल रिचार्ज", "ऑन्लाइन फॉर्म",
    "बिजली बिल जमा/प्रिंट", "वोटर कार्ड", "किसान पंजीकरण",
    "ऑनलाइन फॉर्म", "सभी कंपनी का प्रीमियम जमा", "रेल, बस और एयर टिकट",
    "आयुष्मान कार्ड", "टेमिनेशन", "प्रिंट आउट, ई-मेल",
    "जीवन प्रमाण पत्र", "बिल भुगतान", "जीवन प्रमाण पत्र",
    "प्रधानमंत्री फसल बीमा योजना", "ड्राइविंग लाइसेंस", "शिक्षा"
];

export default function CscServices() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="py-5 bg-light">
            <Container className="shadow rounded p-4">
                <h4 className="text-center fw-bold mb-2" data-aos="fade-down">
                    Services Provided by <span className="text-success">CSC</span>
                </h4>
                <p className="text-center mb-4" data-aos="fade-up">
                    Common Service Centers (CSC) नागरिकों को अनेक प्रकार की सेवाएं प्रदान करते हैं, जिनमें सरकारी सेवाएं, ई-कॉमर्स, बिल भुगतान और अन्य सेवाएं शामिल हैं। CSC का उद्देश्य विशेष रूप से ग्रामीण क्षेत्रों में नागरिकों के लिए सेवाओं को सुलभ बनाना है।
                </p>
                <Row className="g-3 justify-content-center">
                    {services.map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={4} data-aos="zoom-in">
                            <Card className="service-card text-center">
                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                    <FaCheckSquare className="text-success fs-3 mb-2" />
                                    <span className="fw-bold">{item}</span>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
