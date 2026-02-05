import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logo/my_logo.png";
import StudentPhoto from "../assets/Logo/vinay.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobe, FaPhone } from "react-icons/fa";
import QRCode from "react-qr-code";
import Signature from "../assets/sig/sig.jpeg";
const CheckMarksheet = () => {

    const qrData = `
    Full Name: Vinay Kumar Verma
    Father's Name: Amarnath Verma
    Mother's Name: Soniya Devi
    Course Name: Diploma in Computer Application (DCA)
    Course Duration: 12 Months
    Authorised Center: Vijay Computer Academy, Ballia
    Full Marks: 100
    Passing Marks: 35
    Marks Obtained: 78
    Date of Issue: 15 / 06 / 2026
    Verified By: www.vijaycomputeracademy.in
    `;

    return (
        <Container className="my-4 marksheet-container">

            <Card className="marksheet-card shadow-lg p-3">

                {/* ===== HEADER ===== */}
                <Row className="text-center border-bottom pb-3 mb-3">
                    <Col>
                        <img src={Logo} alt="Logo" className="marksheet-logo mb-2" />
                        <h4 className="institute-title">VIJAY COMPUTER ACADEMY</h4>

                        <p className="mb-0">
                            <FaLocationDot className="me-1" />
                            Firojpur Post Masoompur, Dist Ballia, UP - 277303
                        </p>
                        <p className="mb-0">
                            <FaPhone className="me-1" /> 8858381213 |{" "}
                            <FaGlobe className="me-1" /> www.vijaycomputeracademy.in
                        </p>
                    </Col>
                </Row>

                <h5 className="marksheet-title">MARKSHEET VERIFICATION</h5>

                {/* ===== DETAILS + PHOTO ===== */}
                <Row>
                    <Col md={8}>
                        <Table bordered responsive className="marksheet-table">
                            <tbody>
                                <tr><td>Full Name</td><td>Vinay Kumar Verma</td></tr>
                                <tr><td>Father's Name</td><td>Amarnath Verma</td></tr>
                                <tr><td>Mother's Name</td><td>Soniya Devi</td></tr>
                                <tr><td>Course Name</td><td>DCA</td></tr>
                                <tr><td>Course Duration</td><td>12 Months</td></tr>
                                <tr><td>Authorised Center</td><td>Vijay Computer Academy, Ballia</td></tr>
                            </tbody>
                        </Table>
                    </Col>

                    <Col md={4} className="text-center">
                        <div className="photo-box">
                            <img src={StudentPhoto} alt="Student" className="student-photo" />
                            <p className="photo-text">Student Photo</p>
                        </div>
                    </Col>
                </Row>

                {/* ===== MARKS ===== */}
                <Table bordered responsive className="marksheet-table mt-3">
                    <tbody>
                        <tr><td>Full Marks</td><td>100</td></tr>
                        <tr><td>Passing Marks</td><td>35</td></tr>
                        <tr><td>Marks Obtained</td><td>78</td></tr>
                        <tr><td>Date of Issue</td><td>15 / 06 / 2026</td></tr>
                    </tbody>
                </Table>

                {/* ===== FOOTER ===== */}
                <Row className="align-items-center mt-4">
                    <Col xs={6}>
                        <QRCode value={qrData} size={80} />
                        <p className="qr-text">Scan to Verify</p>
                    </Col>

                    <Col xs={6} className="text-end">
                        <div className="signature-box">
                            <img
                                src={Signature}
                                alt="Authorized Signature"
                                className="signature-img"
                            /> <br />
                            <p className="signature-text">Authorized Signature</p>
                        </div>
                    </Col>

                </Row>

            </Card>

            {/* ===== BUTTONS ===== */}
            <div className="d-flex justify-content-center gap-3 mt-4 no-print">
                <button className="btn btn-danger" onClick={() => window.print()}>
                    Print
                </button>

                <button className="btn btn-secondary" onClick={() => window.history.back("/marksheetvertification")}>
                    Back
                </button>
            </div>

        </Container>
    );
};

export default CheckMarksheet;
