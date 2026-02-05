import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import aboutUs from '../assets/aboutUs.png';
import AOS from 'aos';
import { BsInfoCircle } from "react-icons/bs";

export default function AboutUs() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="AboutContainer">
            <section className="about-section py-5">
                <Container>
                    <h2
                        className="text-white bg-success p-2 rounded shadow-sm d-flex align-items-center"
                        data-aos="fade-up"
                    >
                        {/* React Bootstrap Icon */}
                        <BsInfoCircle className="me-2" /> VCA About Us
                    </h2>

                    <Card className="p-4 mt-3 shadow-lg" data-aos="fade-up">
                        <Row className="align-items-center">
                            <Col md={4} className="text-center mb-3 mb-md-0" data-aos="zoom-in">
                                <img
                                    src={aboutUs}
                                    alt="About VCCA"
                                    className="img-fluid about-img rounded shadow"
                                />
                            </Col>
                            <Col md={8} data-aos="fade-left">
                                <ul>
                                    <li>
                                        <strong>Vijay Computer Training Center</strong> बहुत कम लागत पर उच्च गुणवत्ता वाली कंप्यूटर शिक्षा उच्च स्तर पर प्रदान करता है।
                                    </li>
                                    <br />
                                    <li>
                                        <p>Vijay Computer Training Center का मिशन उच्च गुणवत्ता वाले कंप्यूटर आधारित पेशेवरों का एक पूल बनाना है जो कल की चुनौतियों के लिए बहुराष्ट्रीय संगठनों की मांग की जरूरतों को पूरा करेगा।</p>
                                    </li>
                                    <li>
                                        <p>स्कूलों में कंप्यूटर शिक्षा छात्रों के करियर के विकास में महत्वपूर्ण भूमिका निभाती है। इंटरनेट के साथ कंप्यूटर सबसे शक्तिशाली उपकरण है जिसका उपयोग छात्र नए कौशल और वर्तमान पाठों के अधिक गहन संदर्भ को सीखने के लिए कर सकते हैं।</p>
                                    </li>
                                    <li>
                                        <p>स्कूल दुनिया भर में कंप्यूटर और इंटरनेट के छात्रों को मूल बातें सिखा रहे हैं। कंप्यूटर और इंटरनेट का उपयोग दिन-प्रतिदिन तेजी से बढ़ रहा है। लगभग सभी व्यवसाय, कंपनियां, विभिन्न आधिकारिक कार्यों के लिए कंप्यूटर का उपयोग करने वाले स्कूल नए तकनीकी उपकरण अपना रहे हैं जो छात्रों को बेहतर सीखने में मदद कर रहे हैं।</p>
                                    </li>
                                    <li>
                                        <p><strong>Vijay Computer Training Center</strong> सूचना प्रौद्योगिकी के लिए सबसे अच्छा प्रशिक्षण संस्थान है, जो आज के छात्रों को गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने का लक्ष्य रखता है।</p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>
        </div>
    );
}
