import { Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function NavigationBar() {
    return (
        <div>
            {/* Navigation Bar with Right Offcanvas */}
            <Navbar bg="black" variant="dark" expand="lg" sticky="top" className="w-100 py-0 ">
                <Container fluid className="p-0 m-0">
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className="ms-auto border-0 text-primary" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                        className="bg-danger"
                    >
                        <Offcanvas.Header closeButton className="text-white">
                            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">Menu</Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-center justify-content-lg-between w-100">
                                <Nav.Link as={Link} to="/" className="text-white fw-bold"><span className='text-white'>HOME</span></Nav.Link>

                                <NavDropdown
                                    title={<span className="text-white fw-bold">ABOUT VCCA</span>}
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item as={Link} to="/AboutUs"><span className="text-white">About Us</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/OurMission"><span className="text-white">Our Mission</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/vision"><span className="text-white">Vision 2020</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/mddesk"><span className="text-white">MD Desk</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ourteam"><span className="text-white">Our Team</span></NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown
                                    title={<span className="text-white fw-bold">COURSE</span>}
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item as={Link} to="/LongCourses"><span className="text-white">Long Term Courses</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ShortCourses"><span className="text-white">Short Term Courses</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ClassGrid"><span className="text-white">1st To 8th Coaching</span></NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown
                                    title={<span className="text-white fw-bold">STUDENT ZONE</span>}
                                    menuVariant="dark"
                                >

                                    <NavDropdown.Item as={Link} to="/marksheetvertification"><span className="text-white">Marksheet Verification</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/checkscholarshipstatus"><span className="text-white">Scholarship Result</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/AdmitCardCheck"><span className="text-white">Admit Card Download</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ICardCheck"><span className="text-white">I Card Download</span></NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown
                                    title={<span className="text-white fw-bold">ADMISSION ZONE</span>}
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item as={Link} to="/admission"><span className="text-white">Computer Admission Form</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/competitionform"><span className="text-white">Competition Form</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/scholarshipsform"><span className="text-white">Scholarships Form</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/checkformstatus"><span className="text-white">Check Form Status</span></NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/resultcheck" className="text-white fw-bold"><span className='text-white'>RESULT</span></Nav.Link>
                                <NavDropdown
                                    title={<span className="text-white fw-bold">SERVICES</span>}
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item as={Link} to="/JanSewaServices"><span className="text-white">Jan Sewa Kendra</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/CscServices"><span className="text-white">CSC</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/BankingServices"><span className="text-white">Banking</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/LibraryServices"><span className="text-white">Smart Library</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/AcademyCourses"><span className="text-white">Computer Coaching</span></NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ClassGrid"><span className="text-white">1st To 8th Coaching</span></NavDropdown.Item>
                                </NavDropdown>


                                <Nav.Link as={Link} to="/FAQSection" className="text-white fw-bold"><span className='text-white'>FAQ</span></Nav.Link>
                                <Nav.Link as={Link} to="/ContactUs" className="text-white fw-bold"><span className='text-white'>CONTACT US</span></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
