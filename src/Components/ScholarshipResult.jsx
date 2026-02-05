import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Logo from "../assets/Logo/my_logo.png";
import StudentPhoto from "../assets/Logo/vinay.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobe, FaPhone } from "react-icons/fa";

const ScholarshipResult = () => {

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
        pdf.save("Scholarship-Result.pdf");
    };

    return (
        <Container className="my-4 scholarship-container">

            <Card className="scholarship-card shadow-lg p-3" id="print-area">

                {/* ===== HEADER ===== */}
                <Row className="text-center border-bottom pb-3 mb-3">
                    <Col>
                        <img src={Logo} alt="Logo" className="scholarship-logo mb-2" />
                        <h4 className="institute-title">VIJAY COMPUTER ACADEMY</h4>
                        <p className="mb-0"><FaLocationDot className="me-1" /> Firojpur Post Masoompur, Dist Ballia, UP - 277303</p>
                        <p className="mb-0"><FaPhone className="me-1" /> 8858381213 | <FaGlobe className="me-1" /> www.vijaycomputeracademy.in</p>
                    </Col>
                </Row>

                {/* ===== TITLE ===== */}
                <h5 className="scholarship-title bg-success text-white">SCHOLARSHIP RESULT</h5>

                {/* ===== STUDENT DETAILS + PHOTO ===== */}
                <Row>
                    <Col md={8}>
                        <Table bordered responsive className="scholarship-table">
                            <tbody>
                                <tr><td>Full Name</td><td>Vinay Kumar Verma</td></tr>
                                <tr><td>Father's Name</td><td>Amarnath Verma</td></tr>
                                <tr><td>Mother's Name</td><td>Soniya Devi</td></tr>
                                <tr><td>Class</td><td>12th</td></tr>
                                <tr><td>Gender</td><td>Male</td></tr>
                                <tr><td>DOB</td><td>15/06/2008</td></tr>
                                <tr><td>Scholarship Type</td><td>Merit-Based</td></tr>
                                <tr><td>Address</td><td>Firojpur, Ballia, Uttar Pradesh, 277303</td></tr>
                                <tr><td>Marks</td><td>480 / 500</td></tr>
                                <tr><td>Result</td><td>Qualified</td></tr>
                            </tbody>
                        </Table>
                    </Col>

                    <Col md={4} className="text-center">
                        <div className="photo-box">
                            <img src={StudentPhoto} alt="Student" className="student-photo" />
                        </div>
                    </Col>
                </Row>

            </Card>

            {/* ===== BUTTONS ===== */}
            <div className="d-flex justify-content-center gap-3 mt-4 no-print">
                <Button variant="danger" onClick={handleDownload}>Download PDF</Button>
                <Button variant="secondary" onClick={() => window.history.back()}>Back</Button>
            </div>
        </Container>
    );
};

export default ScholarshipResult;
