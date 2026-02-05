import { Container, Row, Col, Card } from "react-bootstrap";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import team4 from "../assets/Team/ceo_vijay.png";
import team1 from "../assets/Team/vinay.png";
import team2 from "../assets/Team/gufran.png";
import team3 from "../assets/Team/Abhishek.png";
export default function OurTeam() {
    const teamMembers = [
        {
            name: "Vijay Kumar Verma",
            role: "Director",
            position: "Teacher",
            photo: team4,
            insta: "#",
            linkedin: "#",
            facebook: "#",
        },
        {
            name: "Vinay Kumar Verma",
            role: "Manager",
            position: "Web Developer",
            photo: team1,
            insta: "#",
            linkedin: "#",
            facebook: "#",
        },
        {
            name: "Abhishek",
            role: "Backend Developer",
            photo: team3,
            insta: "#",
            linkedin: "#",
            facebook: "#",
        },
        {
            name: "Gufran",
            role: "Backend Developer",
            photo: team2,
            insta: "#",
            linkedin: "#",
            facebook: "#",
        },
    ];

    return (
        <section className="our-team-section py-5">
            <Container>
                <h2 className="text-center fw-bold mb-4">Our Team</h2>

                <Row className="justify-content-center">
                    {teamMembers.map((member, index) => (
                        <Col lg={3} md={4} sm={6} xs={12} key={index} className="mb-4">
                            <Card className="team-card-pro">
                                <div className="team-img-wrapper">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="team-img"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = team3;
                                        }}
                                    />

                                    <div className="team-social">
                                        <a href={member.insta} target="_blank" rel="noreferrer">
                                            <FaInstagram />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noreferrer">
                                            <FaLinkedinIn />
                                        </a>
                                        <a href={member.facebook} target="_blank" rel="noreferrer">
                                            <FaFacebookF />
                                        </a>
                                    </div>
                                </div>

                                <Card.Body className="text-center">
                                    <h6 className="fw-bold mb-1">{member.name}</h6>
                                    <small className="text-muted d-block">{member.role}</small>
                                    <small className="text-muted">{member.position}</small>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
