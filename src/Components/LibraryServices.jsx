import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckSquare } from 'react-icons/fa';
import AOS from 'aos';

const libraryServices = [
    "24 घंटे सुविधा", "फ्री वाई फाई सुविधा", "बुक सुविधा",
    "वाहन पार्किंग सुविधा", "शुद्ध पानी की सुविधा", "मैगज़ीन/न्यूज़पेपर",
    "शांतिपूर्ण वातावरण", "मोबाइल लैपटॉप चार्ज की सुविधा"
];

export default function LibraryServices() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="py-5 bg-light">
            <Container className="shadow rounded p-4">
                <h4 className="text-center fw-bold mb-2" data-aos="fade-down">
                    Services Provided by <span className="text-success">Library</span>
                </h4>
                <p>लाइब्रेरी विभिन्न प्रकार की सुविधाएं प्रदान करती है जो छात्रों, शोधकर्ताओं और आम नागरिकों की शैक्षणिक और ज्ञान संबंधी आवश्यकताओं को पूरा करने में मदद करती हैं। यहाँ 24 घंटे की सुविधा, वाई-फाई, पुस्तकें, पत्रिकाएँ, शांतिपूर्ण वातावरण, वाहन पार्किंग, शुद्ध पेयजल और मोबाइल-लैपटॉप चार्जिंग जैसी आधुनिक सुविधाएं उपलब्ध कराई जाती हैं ताकि उपयोगकर्ता एक सुविधाजनक और अनुकूल वातावरण में अध्ययन कर सकें।</p>
                <Row className="g-3 justify-content-center">
                    {libraryServices.map((item, index) => (
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
