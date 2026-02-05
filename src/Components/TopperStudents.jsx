import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import topper1 from "../assets/topper/vinay.png";
import topper2 from "../assets/topper/rajender.png";
import topper3 from "../assets/topper/riya.png";

export default function TopperNoticeSection() {
    const toppers = [
        { rank: "1st", name: "Vinay Kumar Verma", course: "ADCA", photo: topper1 },
        { rank: "2nd", name: "Rajender Verma", course: "DCA", photo: topper2 },
        { rank: "3rd", name: "Riya", course: "CCC", photo: topper3 },
    ];

    const notices = [
        "ADCA New Batch Starting from 5th January.",
        "Scholarship Exam Registration Open!",
        "CCC Exam Form Last Date: 28th December.",
        "New Computer Lab Installed with 10 PCs.",
        "Winter Vacation Holiday: 31 Dec - 2 Jan."
    ];

    return (
        <section className="topper-section py-5">
            <Container>
                <Row className="align-items-center">

                    {/* LEFT NOTICE BOARD */}
                    <Col md={6} className="mb-4">
                        <div className="notice-board">
                            <h3 className="notice-title">Notice Board</h3>
                            <div className="notice-list">
                                <ul className="scrolling">
                                    {notices.map((notice, index) => (
                                        <li key={index}>{notice}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Col>

                    {/* RIGHT TOPPER SECTION */}
                    <Col md={6}>
                        <h2 className="fw-bold text-center text-white mb-4">Topper Students</h2>

                        <Carousel interval={2500} indicators={false}>
                            {toppers.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <div className="d-flex justify-content-center">
                                        <Card className="text-center topper-card shadow-lg p-4">
                                            <div className="topper-img-wrapper mx-auto mb-3">
                                                <img
                                                    src={item.photo}
                                                    alt={item.name}
                                                    className="img-fluid rounded-circle topper-img"
                                                />
                                            </div>
                                            <h5 className="rank-badge">Rank: {item.rank}</h5>
                                            <h3 className="fw-bold mt-2">{item.name}</h3>
                                            <p className="text-info mb-0">Course: {item.course}</p>
                                        </Card>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}
