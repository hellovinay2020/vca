import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import verifyImg from "../assets/check_form/checkform.png";
import { Link } from "react-router-dom";

export default function ResultCheck() {

    const [regNo, setRegNo] = useState("");

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!regNo.trim()) {
            Swal.fire({
                icon: "error",
                title: "Missing Information",
                text: "Please enter your registration number.",
                confirmButtonText: "OK"
            });
            return;
        }

        if (regNo.length < 5) {
            Swal.fire({
                icon: "warning",
                title: "Invalid Registration Number",
                text: "The registration number must be at least 5 characters long.",
                confirmButtonText: "Got it"
            });
            return;
        }

        // Demo status logic
        const status =
            parseInt(regNo.slice(-1)) % 2 === 0 ? "Approved" : "Pending";

        Swal.fire({
            icon: status === "Approved" ? "success" : "info",
            title: "Admission Status",
            html: `
            <p><strong>Registration Number:</strong> ${regNo}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p>Please contact the institute for further details.</p>
        `,
            confirmButtonText: "OK"
        });
    };


    const handleReset = () => {
        setRegNo("");
    };

    return (
        <section className="admission-section py-5" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">

                    {/* LEFT IMAGE */}
                    <Col md={6} className="mb-4 mb-md-0 d-none d-md-block" data-aos="fade-right">
                        <img
                            src={verifyImg}
                            alt="Result Check"
                            className="img-fluid rounded shadow"
                        />
                    </Col>

                    {/* RIGHT FORM CARD */}
                    <Col md={6} data-aos="fade-left">
                        <div className="verify-card">
                            <div className="verify-header">
                                Result Check
                            </div>

                            <div className="verify-body">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-4">
                                        <Form.Label>
                                            Enter Your Registration No.:
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Example: VCA/2026/101"
                                            value={regNo}
                                            onChange={(e) => setRegNo(e.target.value)}
                                        />
                                    </Form.Group>

                                    <div className="d-flex justify-content-center gap-4">
                                        <Link to="/resultshow">
                                            <Button type="submit" className="btn btn-danger">
                                                Submit
                                            </Button>
                                        </Link>
                                        <Button
                                            type="button"
                                            onClick={handleReset}
                                        >
                                            Reset
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}
