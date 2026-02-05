import { Container, Row, Col, Button } from "react-bootstrap";

// Icons
import { Book, People, Cpu } from "react-bootstrap-icons";

// Images
import GirlImg from "../assets/learning-section/reading2.jpg";
import BoyImg from "../assets/learning-section/reading1.png";
import Student1 from "../assets/student/meraj.jpg";
import Student2 from "../assets/student/rajat.jpg";
import Student3 from "../assets/student/suraj.png";

export default function LearningSection() {
    return (
        <section className="learning-wrapper py-5">
            <Container>
                <Row className="align-items-center">

                    {/* LEFT CONTENT */}
                    <Col md={6} className="left-content">
                        <p className="top-label">विजय कंप्यूटर अकादमी</p>

                        <h1 className="main-heading">
                            हर विद्यार्थी के लिए सीख
                        </h1>

                        <p className="description">
                            हम सभी छात्रों के लिए कंप्यूटर और तकनीकी शिक्षा को आसान और रोचक बनाते हैं।
                        </p>

                        {/* Feature List */}
                        <div className="feature-item">
                            <div className="icon-box purple"><Book /></div>
                            <div>
                                <h5>कहीं से भी सीखें</h5>
                                <p>आज के समय में कहीं से भी सीखना आधुनिक शिक्षा का एक महत्वपूर्ण हिस्सा बन गया है।</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="icon-box pink"><People /></div>
                            <div>
                                <h5>विशेषज्ञ मार्गदर्शक</h5>
                                <p>हमारे अनुभवी मेंटर्स छात्रों को सही दिशा और व्यावहारिक ज्ञान प्रदान करते हैं।</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="icon-box blue"><Cpu /></div>
                            <div>
                                <h5>प्रचलित कौशल सीखें</h5>
                                <p>आज की नौकरी और करियर में आगे बढ़ने के लिए जरूरी कौशल सीखना बेहद महत्वपूर्ण है।</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 ">
                            <Button className="btn btn-danger m-2 p-2 ">Enroll as Student</Button>
                            <Button className="btn btn-danger p-2 ">Apply as Tutor</Button>
                        </div>
                    </Col>

                    {/* RIGHT SIDE IMAGES */}
                    <Col md={6} className="right-images">
                        <div className="top-image-box">
                            <img src={GirlImg} className="girl-img" alt="Girl" />

                            <div className="students-info shadow">
                                <img src={Student1} className="mini-profile" alt="Student" />
                                <img src={Student2} className="mini-profile" alt="Student" />
                                <img src={Student3} className="mini-profile" alt="Student" />
                                <span>1K+ Students Enrolled</span>
                            </div>
                        </div>

                        <img src={BoyImg} className="boy-img" alt="Boy" />
                    </Col>

                </Row>
            </Container>
        </section>
    );
}
