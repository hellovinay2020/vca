import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';




export default function ContactUs() {
    const [formData, setFormData] = useState({

        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        queryType: '',
        message: ''
    });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone, queryType, message } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!firstName || !lastName || !email || !phone || !queryType || !message) {
            Swal.fire('Error', 'All fields are required!', 'error');
            return false;
        }
        if (!emailRegex.test(email)) {
            Swal.fire('Error', 'Enter a valid email address.', 'error');
            return false;
        }
        if (!phoneRegex.test(phone)) {
            Swal.fire('Error', 'Enter a valid 10-digit phone number.', 'error');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        emailjs.send(
            'service_5deg647',
            'template_962qkod',
            formData,
            'zdBgsj0c3zaM02iOy'
        )
            .then(() => {
                Swal.fire('Success', 'Message Sent Successfully!', 'success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    queryType: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
            });
    };

    return (
        <section className="py-5 bg-light">
            <Container className="contact-container p-4 shadow rounded">
                <Row>
                    <Col md={6} className="mb-4 mb-md-0 border p-3 bg-white rounded" data-aos="fade-right">
                        <h5 className="text-center">-:- Registered Office -:-</h5>
                        <p className="text-center">
                            <FaMapMarkerAlt className="me-2 text-primary" />
                            Firojpur, Masoompur <br />
                            Dist Ballia Uttar Pradesh <br />
                            Pin Code - 277303
                        </p>
                        <h5 className="text-center">-:- Contact Us -:-</h5>
                        <p className="text-center">
                            <FaPhone className="me-2 text-primary" />
                            <FaWhatsapp className="me-2 text-success" />+91 8858381213, 9889747645
                        </p>
                        <h5 className="text-center">-:- Feedback & Queries -:-</h5>
                        <p className="text-center">
                            <FaEnvelope className="me-2 text-danger" />
                            <strong>vijaycomputeracademy25@gmail.com</strong>
                        </p>
                    </Col>
                    <Col md={6} data-aos="fade-left">
                        <h4 className="text-center fw-bold text-primary mb-4">Contact Us</h4>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Select
                                    name="queryType"
                                    value={formData.queryType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a query type</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Admission Query">Admission Query</option>
                                    <option value="Technical Support">Technical Support</option>
                                    <option value="Other">Other</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <div className="text-center">
                                <Button variant="danger" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
