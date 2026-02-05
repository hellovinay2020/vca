import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import faqImg from "../assets/faq_image/faq.PNG";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function FAQSection() {
    return (
        <section className="py-5 bg-light">
            <Container>
                <Row className="align-items-center" data-aos="fade-up">
                    {/* Left Image Section */}
                    <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
                        <div className="faq-image-wrapper p-3 rounded ">
                            <img
                                src={faqImg}
                                alt="Students Discussing"
                                className="img-fluid rounded"
                            />
                        </div>
                    </Col>

                    {/* Right FAQ Section */}
                    <Col md={6} data-aos="fade-left">
                        <h6 className="text-danger mb-1">Your Questions are Answered</h6>
                        <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
                        <p className="text-muted mb-4">
                            Explore detailed answers to the most common questions about our platform.
                        </p>

                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>1. आपका कंप्यूटर कोचिंग सेंटर कहाँ स्थित है?</Accordion.Header>
                                <Accordion.Body>
                                    हमारा कोचिंग सेंटर Firojpur, Masoompur, Dist Ballia, Uttar Pradesh - 277303 पर स्थित है। आप हमें Google Maps पर भी खोज सकते हैं।
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>2. कौन-कौन से कोर्स उपलब्ध हैं?</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>DCA, ADCA, CCC, CFA, HTML, CSS, JavaScript, etc.</li>
                                        <li>Web Designing & Development</li>
                                        <li>Typing & Competitive Courses</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>3. कंप्यूटर कोर्स करने के लिए न्यूनतम योग्यता क्या होनी चाहिए?</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Basic Course: 10वीं या 12वीं पास</li>
                                        <li>Diploma Courses: 10वीं/12वीं</li>
                                        <li>Programming: Basic Computer Knowledge</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>4. आपके संस्थान से कोर्स करने के क्या लाभ हैं?</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>अनुभवी शिक्षक और प्रैक्टिकल लैब</li>
                                        <li>सर्टिफिकेट और करियर गाइडेंस</li>
                                        <li>फ्रीलांसिंग / जॉब असिस्टेंस</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>5. क्या कोर्स पूरा करने के बाद सर्टिफिकेट मिलेगा?</Accordion.Header>
                                <Accordion.Body>
                                    हाँ, सभी कोर्स पूरे करने पर मान्यता प्राप्त सर्टिफिकेट दिया जाएगा।
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header>6. एडमिशन कैसे लें और क्लास कब शुरू होती हैं?</Accordion.Header>
                                <Accordion.Body>
                                    आप हमारे सेंटर आकर या कॉल/व्हाट्सएप के जरिए एडमिशन ले सकते हैं। क्लास हर 1 और 15 तारीख से शुरू होती है।
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header>7. अधिक जानकारी के लिए संपर्क करें:</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>📞 +91 8858381213</li>
                                        <li>📧 vijaycomputeracademy25@gmail.com</li>
                                        <li>🌐 www.vijaycomputeracademy.in</li>
                                        <li>🏢 Firojpur, Masoompur, Ballia, UP - 277303</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
