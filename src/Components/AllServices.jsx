import React, { useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';

const services = [
    {
        key: 'jan-sewa-kendra',
        title: 'जन सेवा केन्द्र',
        servicesLeft: [
            'आय प्रमाण पत्र', 'जाति प्रमाण पत्र', 'निवास प्रमाण पत्र',
            'जन्म प्रमाण पत्र', 'मृत्यु प्रमाण पत्र', 'हैसियत प्रमाण पत्र',
            'खतौनी की नकल', 'कुटुंब रजिस्टर', 'पंचायती राज विभाग'
        ],
        servicesRight: [
            'छात्रवृत्ति के लिए आवेदन', 'शादी अनुदान', 'बृद्धा पेंशन',
            'विधवा पेंशन', 'विकलांग पेंशन', 'विवाह पंजीकरण',
            'प्रधानमंत्री आयुष्मान भारत योजना', 'राशन कार्ड नया एवं सुधार', 'ड्राइविंग लाइसेंस'
        ]
    },
    {
        key: 'csc',
        title: 'सी० एस० सी',
        servicesLeft: [
            'आधार प्रिन्ट', 'पासपोर्ट', 'फोटो कॉपी', 'DHT रिचार्ज', 'मोबाईल रिचार्ज',
            'ऑनलाईन फॉर्म', 'बिजली बिल जमा/प्रिन्ट', 'वोटर कार्ड', 'किसान पंजीकरण', 'ऑनलाईन फॉर्म'
        ],
        servicesRight: [
            'LIC एवं सभी कंपनी का प्रीमियम जमा', 'रेल,बस एवं एयर टिकट', 'आयुष्मान कार्ड',
            'लेमिनेशन', 'प्रिन्ट आउट,ई-मेल', 'जीवन प्रमाण पत्र',
            'बिल भुगतान', 'जीवन प्रमाण पत्र', 'प्रधानमंत्री फसल बीमा योजना', 'ड्राइविंग लाइसेंस'
        ]
    },
    {
        key: 'banking',
        title: 'बैंकिंग',
        servicesLeft: ['बैलेंस चेक करें', 'पैसा भेजे', 'जमा करें', 'निकासी करें'],
        servicesRight: [
            'आधार कार्ड से किसी भी बैंक का पैसा प्राप्त करे', 'आपका आधार कार्ड ही आपका ATM'
        ]
    },
    {
        key: 'library',
        title: 'लाइब्रेरी',
        servicesLeft: [
            '24 घंटे सुबिधा', 'फ्री वाई फाई सुबिधा', 'बुक सुबिधा', 'वाहन पार्किंग सुबिधा'
        ],
        servicesRight: [
            'शुद्ध पानी की सुबिधा', 'मैगज़ीन/न्यूज़ पेपर', 'शांतिपूर्ण वातावरण', 'मोबाईल लैपटॉप चार्ज की सुबिधा'
        ]
    }
];

export default function AllServices() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="all-services my-5 py-4">
            <Container>
                <Row className="justify-content-center mb-4" data-aos="fade-up">
                    <Col md={8} className="text-center">
                        <h2 className="fw-bold section-title" style={{ color: "#00ac24" }}>Our Services</h2>
                        <p className="section-subtitle fw-bold">
                            हमारे केंद्र में उपलब्ध सभी सेवाओं की जानकारी यहाँ देखें।
                        </p>
                    </Col>
                </Row>

                <Tab.Container defaultActiveKey="jan-sewa-kendra">
                    <Nav variant="pills" className="mb-4 justify-content-center service-tabs-wrapper">
                        <div className="d-flex flex-wrap justify-content-center gap-2" data-aos="fade-up">
                            {services.map((tab) => (
                                <Nav.Item key={tab.key}>
                                    <Nav.Link eventKey={tab.key} className="service-tab-btn">
                                        {tab.title}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </div>
                    </Nav>

                    <Tab.Content>
                        {services.map((tab) => (
                            <Tab.Pane eventKey={tab.key} key={tab.key}>
                                <div className="service-content shadow-lg p-4 rounded" data-aos="fade-up">
                                    <Row>
                                        <Col lg={6}>
                                            <h4 className="fw-bold text-success service-title">
                                                {tab.title} द्वारा सभी सेवाएँ उपलब्ध हैं
                                            </h4>
                                            <ul className="list-unstyled mt-3 service-list">
                                                {tab.servicesLeft.map((item, idx) => (
                                                    <li className="mb-3" key={`left-${idx}`}>
                                                        <FaCheckCircle className="text-success me-2" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Col>
                                        <Col lg={6}>
                                            <ul className="list-unstyled mt-3 mt-lg-4 service-list">
                                                {tab.servicesRight.map((item, idx) => (
                                                    <li className="mb-3" key={`right-${idx}`}>
                                                        <FaCheckCircle className="text-success me-2" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Tab.Container>
            </Container>
        </section>
    );
}
