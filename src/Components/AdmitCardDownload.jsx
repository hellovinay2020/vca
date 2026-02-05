import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Logo from "../assets/Logo/my_logo.png";
import StudentPhoto from "../assets/Logo/vinay.png";
import Signature from "../assets/sig/sig.jpeg";



const AdmitCardDownload = () => {

    // ================= PRINT =================
    const handlePrint = () => {
        window.print();
    };

    // ================= DOWNLOAD PDF =================
    const handleDownload = async () => {
        const input = document.getElementById("print-area");

        const canvas = await html2canvas(input, {
            scale: 2,
            useCORS: true,
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("VCA-Admit-Card.pdf");
    };

    return (
        <Container className="my-4 admit-container">

            {/* ================= ADMIT CARD ================= */}
            <Card className="admit-card shadow-lg p-3" id="print-area">

                {/* ================= HEADER ================= */}
                <Row className="border-bottom pb-3 mb-3">
                    <Col xs={12} className="text-center">
                        <img src={Logo} alt="VCA Logo" className="admit-logo mb-2" />

                        <h4 className="academy-title fw-bold text-danger">
                            VIJAY COMPUTER ACADEMY
                        </h4>

                        <p className="header-text">
                            <strong>Phone :</strong> 8858381213 <br />
                            <strong>Add :</strong> Firojpur Post Masoompur Dist Ballia UP - 277303 <br />
                            <strong>Website :</strong>   www.vijaycomputeracademy.in <br />
                        </p>
                    </Col>
                </Row>

                {/* ================= TITLE ================= */}
                <h5 className="admit-title text-center bg-success p-2 text-white">ADMIT CARD</h5>

                {/* ================= STUDENT DETAILS ================= */}
                <Row>
                    <Col md={9}>
                        <Table bordered className="admit-table">
                            <tbody>
                                <tr>
                                    <td>Registration No</td>
                                    <td>VCA/2026/101</td>
                                    <td>Exam Type</td>
                                    <td>Written Examination</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Vinay Kumar Verma</td>
                                    <td>Father's Name</td>
                                    <td>Amarnath Verma</td>
                                </tr>
                                <tr>
                                    <td>Mother's Name</td>
                                    <td>Soniya Devi</td>
                                    <td>Contact No</td>
                                    <td>1234567890</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>Male</td>
                                    <td>Class</td>
                                    <td>12th</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td colSpan={3}>Vill Firojpur Post Masoompur Dist Ballia Uttar Pradesh Pin Code 277303</td>
                                </tr>
                                <tr>
                                    <td>Subject</td>
                                    <td colSpan={3}>MS Word</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                    {/* ================= PHOTO ================= */}
                    <Col md={3} className="text-center">
                        <div className="student-photo-box">
                            <img
                                src={StudentPhoto}
                                alt="Student"
                                className="student-photos"
                            />
                        </div>
                    </Col>
                </Row>

                {/* ================= EXAM DETAILS ================= */}
                <Table bordered className="admit-table mt-3">
                    <tbody>
                        <tr>
                            <td>Exam Date</td>
                            <td>__/__/2026</td>
                            <td>Exam Time</td>
                            <td>10:00 AM – 01:00 PM</td>
                        </tr>
                        <tr>
                            <td>Exam Center</td>
                            <td colSpan={3}>
                                Vijay Computer Academy, Firojpur Post Masoompur,
                                Dist Ballia UP - 277303
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {/* ================= SIGNATURE ================= */}
                <Row className="signature-section justify-content-end">
                    <Col xs="auto">
                        <img
                            src={Signature}
                            alt="Authorized Signature"
                            className="signature-img"
                        />
                        <p className="signature-line">Director Signature</p>
                    </Col>
                </Row>

            </Card>

            {/* ================= BUTTONS ================= */}
            <div className="text-center mt-4 no-print">
                <Button variant="danger fs-5" className="me-3" onClick={handlePrint}>
                    Print Admit Card
                </Button>

                <Button variant="secondary" onClick={handleDownload}>
                    Download PDF
                </Button>
            </div>

        </Container>
    );
};

export default AdmitCardDownload;
