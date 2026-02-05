import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import vijaylogopng from '../assets/vijay logo png.png';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChalkboardTeacher, FaSmile, FaBook, FaRegLightbulb } from 'react-icons/fa';

export default function WelcomeSection() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [ref, inView] = useInView({ triggerOnce: true });

    return (
        <div>
            {/* Welcome Section */}
            <Container className="my-5">
                <Row className="align-items-center">
                    <Col className='mb-5' md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="fw-bold" style={{ color: '#00ac24' }}>Welcome To Vijay Computer Academy</h2>
                            <div style={{ width: '90px', height: '3px', backgroundColor: '#100561', margin: '10px 0' }}></div>
                            <p className="text-secondary">
                                Vijay Computer Training Center एक अग्रणी शैक्षणिक संस्थान है, जो बेहद किफायती दरों पर उच्च गुणवत्ता वाली कंप्यूटर शिक्षा प्रदान करने के लिए समर्पित है। हमारा उद्देश्य ऐसे कुशल और दक्ष कंप्यूटर प्रोफेशनल तैयार करना है जो आने वाले समय में वैश्विक कंपनियों और बहुराष्ट्रीय संगठनों की मांगों को पूरा कर सकें।
                            </p>
                            <p className="text-secondary">
                                आज के प्रतिस्पर्धी दौर में कंप्यूटर शिक्षा किसी भी छात्र के करियर विकास में एक अहम भूमिका निभाती है। कंप्यूटर और इंटरनेट के माध्यम से छात्र न केवल अपने पाठ्यक्रम को बेहतर ढंग से समझ सकते हैं बल्कि नवीनतम तकनीकी कौशल भी सीख सकते हैं।
                            </p>
                            <p className="text-secondary">
                                हमारा पाठ्यक्रम विद्यार्थियों को वर्तमान इंडस्ट्री की मांगों के अनुरूप तैयार करता है। अनुभवी प्रशिक्षकों द्वारा सैद्धांतिक ज्ञान के साथ-साथ व्यावहारिक प्रशिक्षण भी दिया जाता है।
                            </p>
                            <p className="text-secondary">
                                आज के समय में लगभग हर व्यवसाय और संस्थान कंप्यूटर और सूचना प्रौद्योगिकी पर निर्भर हैं। हम अपने विद्यार्थियों को इन तकनीकों में दक्ष बनाते हैं ताकि वे हर क्षेत्र में आत्मविश्वास के साथ आगे बढ़ सकें।
                            </p>
                            <p className="text-secondary">
                                Vijay Computer Training Center का उद्देश्य है — "सस्ती, सुलभ और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान कर समाज के हर वर्ग को तकनीकी रूप से सशक्त बनाना।"
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Button variant="danger" className="fw-bold text-white fs-5">
                                    Read More &nbsp; →
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Col>

                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="position-relative">
                                <img
                                    src={vijaylogopng}
                                    alt="Welcome"
                                    className="img-fluid"
                                />
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>

            {/* Count Up Section */}
            <section>
                <div className="stats-section py-5" ref={ref}>
                    <Container>
                        <Row className="text-center">
                            <Col md={3} sm={6} className="stat-item" data-aos="fade-up">
                                <FaChalkboardTeacher className="stat-icon" />
                                <h2 className="stat-number">
                                    {inView && <CountUp end={5} duration={3} />}
                                </h2>
                                <p className='text-white fs-5 fw-bold'>Teachers</p>
                            </Col>

                            <Col md={3} sm={6} className="stat-item" data-aos="fade-up" data-aos-delay="200">
                                <FaSmile className="stat-icon" />
                                <h2 className="stat-number">
                                    {inView && <CountUp end={1020} duration={3} />}
                                </h2>
                                <p className='text-white fs-5 fw-bold'>Happy Student</p>
                            </Col>

                            <Col md={3} sm={6} className="stat-item" data-aos="fade-up" data-aos-delay="400">
                                <FaBook className="stat-icon" />
                                <h2 className="stat-number">
                                    {inView && <CountUp end={50} duration={3} />}
                                </h2>
                                <p className='text-white fs-5 fw-bold'>Courses</p>
                            </Col>

                            <Col md={3} sm={6} className="stat-item" data-aos="fade-up" data-aos-delay="600">
                                <FaRegLightbulb className="stat-icon" />
                                <h2 className="stat-number">
                                    {inView && <CountUp end={20} duration={3} />}
                                </h2>
                                <p className='text-white fs-5 fw-bold'>Creative Events</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    )
}

