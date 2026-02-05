import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import missionIcon from '../assets/missionIcon.png';
import AOS from 'aos';
import { BsBullseye } from "react-icons/bs";



export default function Vision() {
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
                        <BsBullseye className="me-2" /> VCA Our Vision
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
                                    <li>शिक्षा पर आधारित संस्थान के लिए
                                        समाज के हर वर्ग के लिए गुणवत्तापूर्ण और सुलभ शिक्षा प्रदान करना।
                                        वैश्विक मानकों के अनुरूप शिक्षण और अनुसंधान के माध्यम से उत्कृष्टता की ओर अग्रसर।
                                        ऐसी शिक्षा प्रणाली विकसित करना जो ज्ञान, कौशल और नैतिकता को समान रूप से बढ़ावा दे।</li> <br />

                                    <li>स्वास्थ्य से जुड़े संस्थान के लिए
                                        हर व्यक्ति को स्वास्थ्य और कल्याण की दिशा में सशक्त बनाना।
                                        नवाचार और उत्कृष्टता के साथ गुणवत्तापूर्ण स्वास्थ्य सेवाएं प्रदान करना।
                                        स्वस्थ समाज का निर्माण करना, जहां हर कोई बेहतर जीवन जी सके।</li><br />

                                    <li>प्रौद्योगिकी आधारित संस्थान के लिए
                                        नवाचार और तकनीकी उत्कृष्टता के माध्यम से समाज को सशक्त बनाना।
                                        ऐसे समाधान विकसित करना जो विज्ञान और तकनीक के माध्यम से मानवता की भलाई में योगदान दें।
                                        भविष्य की चुनौतियों के लिए तैयार कुशल और सशक्त तकनीकी विशेषज्ञ तैयार करना।</li><br />

                                    <li>सामाजिक संस्थान के लिए
                                        समानता, समावेशिता और सामाजिक सशक्तिकरण के लिए कार्य करना।
                                        समाज के कमजोर वर्गों के उत्थान के लिए निरंतर प्रयास करना।
                                        सामाजिक परिवर्तन के लिए नेतृत्व और नवाचार को बढ़ावा देना।</li><br />

                                    <li>पर्यावरण और स्थिरता पर केंद्रित संस्थान के लिए
                                        सतत विकास और हरित भविष्य के लिए जागरूकता और कार्यों को बढ़ावा देना।
                                        प्रकृति के साथ संतुलन बनाते हुए एक टिकाऊ समाज का निर्माण करना।
                                        पर्यावरणीय संरक्षण और अनुसंधान में उत्कृष्टता प्राप्त करना।</li> <br />

                                </ul>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>

        </div>
    );
}
