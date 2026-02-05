import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import missionIcon from '../assets/missionIcon.png';
import AOS from 'aos';
import { BsBullseye } from "react-icons/bs";


export default function OurMission() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="AboutContainer">
            <section className="about-section py-5">

                <Container>
                    <h2
                        className="text-white bg-success p-2 rounded shadow-sm"
                        data-aos="fade-up"
                    >
                        <BsBullseye className="me-2" />
                        VCA Our Mission
                    </h2>

                    <Card className="p-4 mt-3 shadow-lg" data-aos="fade-up">
                        <Row className="align-items-center">
                            <Col md={4} className="text-center mb-3 mb-md-0" data-aos="zoom-in">
                                <img
                                    src={missionIcon}
                                    alt="About VCCA"
                                    className="img-fluid about-img rounded shadow"
                                />
                            </Col>
                            <Col md={8} data-aos="fade-left">
                                <ul>
                                    <li>हमारा मिशन एक मजबूत शोध और शिक्षण वातावरण का निर्माण करना है जो भविष्य की चुनौतियों का जवाब दे सके। हमारा मिशन कंप्यूटर विज्ञान की सैद्धांतिक और व्यावहारिक दोनों नींवों में गुणवत्तापूर्ण कंप्यूटर शिक्षा प्रदान करना और छात्रों को प्रभावी ढंग से प्रशिक्षित करना है। वास्तविक दुनिया की समस्याओं को हल करने के लिए इस शोध आधारित और मौलिकता उन्मुख शिक्षा को लागू करें। इस प्रकार उच्च गुणवत्ता वाले करियर के लिए उनकी क्षमता और पारस्परिक संबंधों को बढ़ाना और उन्हें हर चुनौतीपूर्ण वैश्विक कार्य वातावरण में प्रतिस्पर्धात्मक लाभ देना।</li> <br />

                                    <li>उच्च गुणवत्ता और शिक्षार्थी केंद्रित कंप्यूटर साक्षरता कार्यक्रम के लिए एक सक्रिय रोल मॉडल के रूप में संबद्ध शिक्षण केंद्र के विकास को मजबूत करना।</li><br />

                                    <li>पूरी दुनिया में कंप्यूटर शिक्षा के मानकों को बेहतर बनाने के लिए पेशेवर क्षमताओं और संसाधनों को साझा करें।</li><br />

                                    <li>पहुंच और समानता की चुनौतियों का सामना करने और ज्ञान आधारित समाज के विकास की दिशा में काम करने के लिए शिक्षा की एक बुद्धिमान लचीली प्रणाली प्रदान करें।</li><br />

                                    <li> सबसे अधिक वंचित लोगों को कंप्यूटर शिक्षा प्रदान करें और स्थानीय विकास के लिए सामुदायिक भागीदारी को बढ़ावा दें।</li> <br />

                                    <li>
                                        सेवारत पेशेवरों को निरंतर व्यावसायिक विकास और कौशल उन्नयन के लिए विशिष्ट आवश्यकता-आधारित कंप्यूटर शिक्षा और प्रशिक्षण के अवसर प्रदान करें।
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
