import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import missionIcon from '../assets/missionIcon.png';
import AOS from 'aos';
import { BsPersonWorkspace } from "react-icons/bs";



export default function Mddesk() {
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
                        <BsPersonWorkspace className="me-2" />
                        VCA Our MD Desk
                    </h2>

                    <Card className="p-4 mt-3 shadow-lg" data-aos="fade-up">
                        <Row className="align-items-center">
                            <Col md={12} data-aos="fade-left">
                                <h2>From</h2>
                                <h2>The Desk of Managing Director</h2>
                                <h3>प्रिय छात्रगण, अभिभावक, और समर्पित टीम सदस्यों,</h3>
                                <p>मुझे यह कहते हुए गर्व हो रहा है कि हमारा संस्थान अपने स्थापित मूल्यों और उद्देश्य के साथ सतत प्रगति कर रहा है। हम यहां सिर्फ शिक्षा प्रदान करने के लिए नहीं हैं, बल्कि व्यक्तित्व, कौशल और नैतिकता का समग्र विकास सुनिश्चित करने के लिए प्रतिबद्ध हैं।</p>
                                <p>हमारा मिशन है – "गुणवत्तापूर्ण शिक्षा के माध्यम से छात्रों को सशक्त बनाना और उन्हें एक उज्जवल भविष्य के लिए तैयार करना।" इसी उद्देश्य को ध्यान में रखते हुए हमने अपने पाठ्यक्रम, शिक्षण पद्धतियों और अवसंरचना को निरंतर बेहतर बनाने का प्रयास किया है।</p>
                                <p>पिछले वर्षों में, हमने न केवल शैक्षणिक क्षेत्रों में उत्कृष्टता प्राप्त की है, बल्कि सांस्कृतिक, खेलकूद और सामाजिक योगदान के माध्यम से समाज में अपनी पहचान बनाई है। यह हमारे छात्रों, शिक्षकों, और टीम के सदस्यों के अथक प्रयासों का परिणाम है।</p>
                                <p>आधुनिक युग की चुनौतियों को ध्यान में रखते हुए, हमारा ध्यान नवाचार, प्रौद्योगिकी और अनुसंधान पर केंद्रित है। हमारा मानना है कि शिक्षा केवल डिग्री अर्जित करने तक सीमित नहीं है, बल्कि यह एक ऐसा माध्यम है, जो छात्रों को आत्मनिर्भर, जिम्मेदार और समाज के प्रति जागरूक नागरिक बनने में मदद करती है।</p>
                                <p>मैं उन सभी का धन्यवाद करता हूं, जो हमारे संस्थान की यात्रा में हमारे साथ जुड़े हैं। आपकी मेहनत, सहयोग और विश्वास ने हमें हमेशा आगे बढ़ने के लिए प्रेरित किया है। आइए, हम सब मिलकर भविष्य की संभावनाओं को साकार करने और समाज के प्रति सकारात्मक योगदान देने के लिए प्रयासरत रहें।</p>
                                <strong>सादर,</strong>
                                <p>Vijay Kumar Verma <br />
                                    Managing Director <br />
                                    Vijay Computer Academy</p>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>

        </div>
    );
}
