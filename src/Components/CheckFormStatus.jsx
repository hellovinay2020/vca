import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import sideImage from "../assets/check_form/checkform.png";
export default function CheckFormStatus() {
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    const [form, setForm] = useState({
        registration: "",
        mobile: "",
        email: "",
        formType: "Computer Admission form",
    });

    const handleChange = (e) => {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    };

    const validateMobile = (m) => {
        // Indian mobile validation (10 digits, optional +91)
        const cleaned = m.replace(/\s+/g, "");
        return /^(\+91)?[6-9]\d{9}$/.test(cleaned);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Required checks
        if (!form.registration.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Registration Number Required",
                text: "Please enter your registration number.",
                confirmButtonText: "OK"
            });
        }

        if (!form.mobile.trim()) {
            return Swal.fire({
                icon: "error",
                title: "Mobile Number Required",
                text: "Please enter your mobile number.",
                confirmButtonText: "OK"
            });
        }

        if (!validateMobile(form.mobile)) {
            return Swal.fire({
                icon: "error",
                title: "Invalid Mobile Number",
                text: "Please enter a valid 10-digit mobile number (e.g., 98XXXXXXXX).",
                confirmButtonText: "Got it"
            });
        }

        if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email)) {
            return Swal.fire({
                icon: "error",
                title: "Invalid Email Address",
                text: "Please enter a valid email address or leave this field empty.",
                confirmButtonText: "OK"
            });
        }

        // Simulated lookup logic (demo)
        const lastDigit = parseInt(form.registration.trim().slice(-1)) || 0;
        const status = lastDigit % 2 === 0 ? "Approved" : "Pending";
        const color = status === "Approved" ? "#28a745" : "#ffc107";
        const title = `Status : ${status}`;

        Swal.fire({
            title,
            html: `
            <p><strong>Form Type:</strong> ${form.formType}</p>
            <p><strong>Registration Number:</strong> ${form.registration}</p>
            <p><strong>Mobile Number:</strong> ${form.mobile}</p>
            <p><strong>Email Address:</strong> ${form.email || "Not Available"}</p>
            <hr/>
            <p>Please contact the institute for further information.</p>
        `,
            icon: status === "Approved" ? "success" : "info",
            confirmButtonText: "OK",
            background: "#ffffff",
            didOpen: () => {
                const b = document.querySelector(".swal2-popup");
                if (b) b.style.border = `4px solid ${color}`;
            },
        });
    };

    const handleReset = () => {
        setForm({
            registration: "",
            mobile: "",
            email: "",
            formType: "Computer Admission form",
        });
    };

    return (
        <section className="checkform-section py-5" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    {/* Left - Image */}
                    <Col md={6} data-aos="fade-right">
                        <div className="checkform-image-wrap">
                            <img
                                src={sideImage}
                                alt="check form"
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                    </Col>

                    {/* Right - Form */}
                    <Col md={6} data-aos="fade-left">
                        <div className="checkform-box p-4 rounded">
                            <h3 className="mb-3">Check Form Status</h3>
                            <Form onSubmit={handleSubmit} noValidate>
                                <Form.Group className="mb-3" controlId="registration">
                                    <Form.Label>Registration Number <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="registration"
                                        value={form.registration}
                                        onChange={handleChange}
                                        placeholder="Enter registration number"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="mobile">
                                    <Form.Label>Mobile Number <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="mobile"
                                        value={form.mobile}
                                        onChange={handleChange}
                                        placeholder="Enter mobile number (10 digits)"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email ID</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Enter email (optional)"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formType">
                                    <Form.Label>Form Type</Form.Label>
                                    <Form.Select name="formType" value={form.formType} onChange={handleChange}>
                                        <option>Computer Admission form</option>
                                        <option>Competition form</option>
                                        <option>Scholarship Form</option>
                                    </Form.Select>
                                </Form.Group>

                                <div className="d-flex gap-2">
                                    <Button variant="danger" type="submit">Check Status</Button>
                                    <Button variant="outline-secondary" type="button" onClick={handleReset}>Reset</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
