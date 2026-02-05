import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Competition.css";

function CompetitionForm() {
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        motherName: "",
        phone: "",
        email: "",
        dob: "",
        gender: "",
        className: "",
        schoolName: "",
        competition: "",
        otherCompetition: "",
        address: "",
        district: "",
        state: "",
        pincode: "",
        photo: null
    });

    const [errors, setErrors] = useState({});
    const [photoPreview, setPhotoPreview] = useState(null);

    // Photo Upload
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const isValidType = file.type === "image/jpeg" || file.type === "image/jpg";
            const isValidSize = file.size <= 1024 * 1024;

            if (!isValidType) {
                Swal.fire("Invalid Format", "Only JPG or JPEG files allowed!", "error");
                return;
            }
            if (!isValidSize) {
                Swal.fire("File Too Large", "Maximum size is 1MB!", "error");
                return;
            }

            setFormData(prev => ({ ...prev, photo: file }));
            setPhotoPreview(URL.createObjectURL(file));
        }
    };

    // Input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    // Validation
    const validate = () => {
        let temp = {};

        if (!formData.name.trim()) temp.name = "Full Name required";
        if (!formData.fatherName.trim()) temp.fatherName = "Father Name required";
        if (!formData.motherName.trim()) temp.motherName = "Mother Name required";

        if (!/^\d{10}$/.test(formData.phone)) temp.phone = "Phone must be 10 digits";

        if (!formData.email) temp.email = "Email required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) temp.email = "Invalid email";

        if (!formData.dob) temp.dob = "Date of Birth required";
        if (!formData.gender) temp.gender = "Gender required";
        if (!formData.className) temp.className = "Select class";

        if (!formData.schoolName.trim()) temp.schoolName = "School Name required";

        if (!formData.competition) temp.competition = "Select competition";

        if (formData.competition === "Other" && !formData.otherCompetition.trim()) {
            temp.otherCompetition = "Enter other competition name";
        }

        if (!formData.address.trim()) temp.address = "Address required";
        if (!formData.district.trim()) temp.district = "District required";
        if (!formData.state.trim()) temp.state = "State required";

        if (!/^\d{6}$/.test(formData.pincode)) temp.pincode = "Pincode must be 6 digits";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    // Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            Swal.fire("Error", "Please correct the errors!", "error");
            return;
        }

        Swal.fire({
            title: "Confirm Submission?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Submit"
        }).then(res => {
            if (res.isConfirmed) {

                const dataToSave = {
                    ...formData,
                    competition:
                        formData.competition === "Other"
                            ? formData.otherCompetition
                            : formData.competition
                };

                const existing = JSON.parse(localStorage.getItem("competitionStudents")) || [];
                existing.push(dataToSave);
                localStorage.setItem("competitionStudents", JSON.stringify(existing));

                Swal.fire("Success", "Competition Form Submitted!", "success");

                setFormData({
                    name: "",
                    fatherName: "",
                    motherName: "",
                    phone: "",
                    email: "",
                    dob: "",
                    gender: "",
                    className: "",
                    schoolName: "",
                    competition: "",
                    otherCompetition: "",
                    address: "",
                    district: "",
                    state: "",
                    pincode: "",
                    photo: null
                });
                setPhotoPreview(null);
            }
        });
    };

    // Reset
    const handleReset = () => {
        Swal.fire({
            title: "Reset Form?",
            icon: "warning",
            showCancelButton: true
        }).then(res => {
            if (res.isConfirmed) {
                setFormData({
                    name: "",
                    fatherName: "",
                    motherName: "",
                    phone: "",
                    email: "",
                    dob: "",
                    gender: "",
                    className: "",
                    schoolName: "",
                    competition: "",
                    otherCompetition: "",
                    address: "",
                    district: "",
                    state: "",
                    pincode: "",
                    photo: null
                });
                setPhotoPreview(null);
            }
        });
    };

    return (
        <Container className="competition-container" data-aos="fade-up">

            <h2 className="form-title text-center mb-4">Competition Registration Form</h2>

            <Form onSubmit={handleSubmit}>

                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Father Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fatherName"
                                value={formData.fatherName}
                                onChange={handleChange}
                                isInvalid={!!errors.fatherName}
                            />
                            <Form.Control.Feedback type="invalid">{errors.fatherName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Mother Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="motherName"
                                value={formData.motherName}
                                onChange={handleChange}
                                isInvalid={!!errors.motherName}
                            />
                            <Form.Control.Feedback type="invalid">{errors.motherName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                isInvalid={!!errors.phone}
                            />
                            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                isInvalid={!!errors.dob}
                            />
                            <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                isInvalid={!!errors.gender}
                            >
                                <option value="">-- Select --</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Class (1–12)</Form.Label>
                            <Form.Select
                                name="className"
                                value={formData.className}
                                onChange={handleChange}
                                isInvalid={!!errors.className}
                            >
                                <option value="">-- Select --</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i + 1} value={`${i + 1}`}>
                                        {i + 1}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.className}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>School Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="schoolName"
                                value={formData.schoolName}
                                onChange={handleChange}
                                isInvalid={!!errors.schoolName}
                            />
                            <Form.Control.Feedback type="invalid">{errors.schoolName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Competition Dropdown */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Competition Name</Form.Label>
                            <Form.Select
                                name="competition"
                                value={formData.competition}
                                onChange={handleChange}
                                isInvalid={!!errors.competition}
                            >
                                <option value="">-- Select Competition --</option>
                                <option value="General Knowledge Quiz">General Knowledge Quiz</option>
                                <option value="Maths Speed Test">Maths Speed Test</option>
                                <option value="English Grammar Challenge">English Grammar Challenge</option>
                                <option value="Spelling Bee">Spelling Bee</option>
                                <option value="Science Talent Search">Science Talent Search</option>
                                <option value="Reasoning & Aptitude">Reasoning & Aptitude</option>
                                <option value="Computer Knowledge Test">Computer Knowledge Test</option>
                                <option value="Current Affairs Quiz">Current Affairs Quiz</option>
                                <option value="Memory Test">Memory Test</option>
                                <option value="Reading & Comprehension">Reading & Comprehension</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.competition}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    {formData.competition === "Other" && (
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter Other Competition</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="otherCompetition"
                                    value={formData.otherCompetition}
                                    onChange={handleChange}
                                    isInvalid={!!errors.otherCompetition}
                                />
                                <Form.Control.Feedback type="invalid">{errors.otherCompetition}</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    )}
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                isInvalid={!!errors.address}
                            />
                            <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>District</Form.Label>
                            <Form.Control
                                type="text"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                isInvalid={!!errors.district}
                            />
                            <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                            />
                            <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Pincode</Form.Label>
                            <Form.Control
                                type="number"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                isInvalid={!!errors.pincode}
                            />
                            <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={8}>
                        <Form.Group>
                            <Form.Label>Upload Photo (JPG/JPEG, 1MB max)</Form.Label>
                            <Form.Control type="file" accept=".jpg,.jpeg" onChange={handlePhotoChange} />
                        </Form.Group>

                        {photoPreview && (
                            <div className="mt-2">
                                <img src={photoPreview} alt="Preview" className="img-thumbnail" style={{ maxHeight: "150px" }} />
                            </div>
                        )}
                    </Col>
                </Row>

                <div className="text-center mt-4">
                    <Button variant="danger" type="submit" className="me-3">
                        Submit
                    </Button>
                    <Button variant="secondary" type="button" onClick={handleReset}>
                        Reset
                    </Button>
                </div>

            </Form>
        </Container>
    );
}

export default CompetitionForm;
