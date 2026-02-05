import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhone, FaHandshake } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const TopHeading = () => {
    const navigate = useNavigate();

    const HandleChange = () => {
        // yaha aap login validation bhi laga sakte ho
        navigate("/Login");
    };

    return (
        <div>
            {/* Top Contact Strip */}
            <div style={{ backgroundImage: 'linear-gradient(to right top, #051937, #002a45, #00393e, #004426, #354b04)', }}>
                <Container>
                    <Row className="align-items-center text-center text-lg-start text-white">
                        <Col xs={12} lg={8} className="mb-2 mb-lg-0">
                            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                                <div className="d-flex align-items-center ">
                                    <FaHandshake className="me-2" />
                                    <span>Contact Enquiry</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FaPhone className="me-2" />
                                    <a href="tel:+918858381213" className="text-white text-decoration-none">
                                        +91 8858381213
                                    </a>
                                </div>

                                <div className="d-flex align-items-center">
                                    <FaPhone className="me-2" />
                                    <a href="tel:+919889747645" className="text-white text-decoration-none">
                                        +91 9889747645
                                    </a>
                                </div>

                            </div>
                        </Col>

                        <Col xs={12} lg={4} className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-2 ">
                            <Button variant="danger" className="fs-6" >Admin Login</Button>
                            <Button variant="success" onClick={HandleChange}>Center Login</Button>
                            <Button variant="primary" className="fs-6 text-white">Student Login</Button>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default TopHeading;
