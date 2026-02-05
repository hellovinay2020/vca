import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';
import AOS from 'aos';
import vijaylogopng from '../assets/vijay logo png.png'; // Ensure this path is correct
import { Link } from 'react-router-dom';

export default function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <footer className="footer-section text-white pt-1">
            <div className="footer-content bg-dark-blue text-white py-5">
                <Container>
                    <Row className="gy-4 text-center text-md-start" data-aos="fade-up">
                        <Col xs={12} md={4} data-aos="fade-up">
                            <img
                                src={vijaylogopng}
                                alt="VCA Logo"
                                className="footer-logo mb-3"
                                style={{ height: '60px', width: 'auto' }}
                            />
                            <h5 className="fw-bold">VIJAY COMPUTER ACADEMY</h5>
                            <p className="text-danger small">INSTITUTE OF COMPUTER EDUCATION</p>
                            <div className="d-flex justify-content-center justify-content-md-start gap-2 mt-3 flex-wrap social-icons">
                                <a href="https://www.facebook.com/"><FaFacebookF /></a>
                                <a href="https://x.com/?lang=en-in"><FaTwitter /></a>
                                <a href="https://www.google.com/"><FaGoogle /></a>
                                <a href="https://www.instagram.com/"><FaInstagram /></a>
                                <a href="https://in.linkedin.com/"><FaLinkedin /></a>
                            </div>
                        </Col>

                        <Col xs={6} sm={4} md={2} data-aos="fade-up">
                            <h6 className="fw-bold mb-3">QUICK LINKS</h6>
                            <ul className="list-unstyled footer-link-list">
                                <li><Link to="/Gallery">Image Gallery</Link></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </Col>

                        <Col xs={6} sm={4} md={2} data-aos="fade-up">
                            <h6 className="fw-bold mb-3">STUDENTS</h6>
                            <ul className="list-unstyled footer-link-list">
                                <li><a href="#">Students List</a></li>
                                <li><a href="#">Verification</a></li>
                                <li><a href="#">Admission</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </Col>

                        <Col xs={12} sm={12} md={4} data-aos="fade-up">
                            <h6 className="fw-bold mb-3">CONTACT</h6>
                            <ul className="list-unstyled contact-list">
                                <li><FaHome className="me-2" /> Firojpur, Masoompur, Ballia, UP - 277303</li>
                                <li><FaEnvelope className="me-2" /> vijaycomputeracademy25@gmail.com</li>
                                <li><FaPhone className="me-2" /> +91 8858381213</li>
                                <li><FaPhone className="me-2" /> +91 9889747645</li>
                            </ul>
                        </Col>
                    </Row>

                    <hr className="text-white my-3" />
                    <p className="text-center small text-light mb-1" data-aos="fade-up">
                        “आओ मिलकर कदम बढ़ाएँ! | ‘ज्योत से ज्योत जागते चलो, ज्ञान की गंगा बहाते चलो |’”
                    </p>
                    <p className="text-center small mb-0" data-aos="fade-up">
                        © 2025 Vijay Computer Academy | Developed By: Vinay Verma | All rights reserved.
                    </p>
                </Container>
            </div>
        </footer>
    );
}
