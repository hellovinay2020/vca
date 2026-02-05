import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admission.css';
import { Link } from 'react-router-dom';

function Admission() {
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        motherName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        nationality: "",
        admissionDate: "",
        qualification: "",
        course: "",
        state: "",
        district: "",
        address: "",
        pincode: ""
    });

    const [errors, setErrors] = useState({});
    const [photoPreview, setPhotoPreview] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const isValidType = file.type === 'image/jpeg' || file.type === 'image/jpg';
            const isValidSize = file.size <= 1024 * 1024;

            if (!isValidType) {
                Swal.fire("Invalid Format", "Only JPG or JPEG files allowed!", "error");
                return;
            }

            if (!isValidSize) {
                Swal.fire("File Too Large", "Maximum allowed size is 1MB.", "error");
                return;
            }

            setFormData(prev => ({ ...prev, photo: file }));
            setPhotoPreview(URL.createObjectURL(file));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const generateRegNo = () => {
        return 'VCA' + Date.now().toString().slice(-6);
    };

    // Validation
    const validate = () => {
        let tempErrors = {};

        if (!formData.name.trim()) tempErrors.name = "Full Name is required";
        if (!formData.fatherName.trim()) tempErrors.fatherName = "Father's Name is required";
        if (!formData.motherName.trim()) tempErrors.motherName = "Mother's Name is required"; // ⭐ ADDED

        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = "Phone must be 10 digits";
        }

        if (!formData.dob) tempErrors.dob = "Date of Birth is required";
        if (!formData.gender) tempErrors.gender = "Gender is required";
        if (!formData.nationality.trim()) tempErrors.nationality = "Nationality is required";
        if (!formData.admissionDate) tempErrors.admissionDate = "Admission Date is required";

        if (!formData.qualification) tempErrors.qualification = "Select Class"; // ⭐ UPDATED

        if (!formData.course) tempErrors.course = "Course is required";

        if (!formData.state.trim()) tempErrors.state = "State is required";
        if (!formData.district.trim()) tempErrors.district = "District is required";
        if (!formData.address.trim()) tempErrors.address = "Address is required";

        if (!/^\d{6}$/.test(formData.pincode)) {
            tempErrors.pincode = "Pin Code must be 6 digits";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            Swal.fire('Error', 'Please fix the errors before submitting.', 'error');
            return;
        }

        Swal.fire({
            title: 'Confirm Submission',
            text: `Submit admission form for ${formData.name}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Submit',
        }).then((result) => {
            if (result.isConfirmed) {
                const regNo = generateRegNo();
                const newStudent = { ...formData, regNo };

                const existingStudents = JSON.parse(localStorage.getItem("confirmedStudents")) || [];
                existingStudents.push(newStudent);
                localStorage.setItem("confirmedStudents", JSON.stringify(existingStudents));

                Swal.fire('Success', `Admission confirmed! Registration No: ${regNo}`, 'success');

                setFormData({
                    name: "",
                    fatherName: "",
                    motherName: "",
                    email: "",
                    phone: "",
                    dob: "",
                    gender: "",
                    nationality: "",
                    admissionDate: "",
                    qualification: "",
                    course: "",
                    state: "",
                    district: "",
                    address: "",
                    pincode: ""
                });
                setErrors({});
            }
        });
    };

    const handleReset = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will clear all the form fields!",
            icon: "warning",
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                setFormData({
                    name: "",
                    fatherName: "",
                    motherName: "",
                    email: "",
                    phone: "",
                    dob: "",
                    gender: "",
                    nationality: "",
                    admissionDate: "",
                    qualification: "",
                    course: "",
                    state: "",
                    district: "",
                    address: "",
                    pincode: ""
                });
                setErrors({});
            }
        });
    };

    return (
        <Container className="admission-container mt-5" data-aos="fade-up">
            <h2 className="form-title text-center mb-4">Computer Admission Form</h2>

            <Form onSubmit={handleSubmit} noValidate>

                {/* Name Fields */}
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
                                placeholder="Enter student full name"
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Father's Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fatherName"
                                value={formData.fatherName}
                                onChange={handleChange}
                                isInvalid={!!errors.fatherName}
                                placeholder="Enter father's name"
                            />
                            <Form.Control.Feedback type="invalid">{errors.fatherName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Mother's Name</Form.Label> {/* ⭐ ADDED */}
                            <Form.Control
                                type="text"
                                name="motherName"
                                value={formData.motherName}
                                onChange={handleChange}
                                isInvalid={!!errors.motherName}
                                placeholder="Enter mother's name"
                            />
                            <Form.Control.Feedback type="invalid">{errors.motherName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Email & Phone */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                                placeholder="Enter email"
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                isInvalid={!!errors.phone}
                                placeholder="Enter phone number"
                            />
                            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* DOB & Gender */}
                <Row>
                    <Col md={6}>
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

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                isInvalid={!!errors.gender}
                            >
                                <option value="">-- Select Gender --</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Nationality & Admission Date */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nationality</Form.Label>
                            <Form.Control
                                type="text"
                                name="nationality"
                                value={formData.nationality}
                                onChange={handleChange}
                                isInvalid={!!errors.nationality}
                                placeholder="Enter nationality"
                            />
                            <Form.Control.Feedback type="invalid">{errors.nationality}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Admission Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="admissionDate"
                                value={formData.admissionDate}
                                onChange={handleChange}
                                isInvalid={!!errors.admissionDate}
                            />
                            <Form.Control.Feedback type="invalid">{errors.admissionDate}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* ⭐ Qualification (Class 1–12) */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Select Class</Form.Label>
                            <Form.Select
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                isInvalid={!!errors.qualification}
                            >
                                <option value="">-- Select Class --</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i + 1} value={`${i + 1}th`}>{i + 1}th</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.qualification}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                isInvalid={!!errors.course}
                            >
                                <option value="">-- Select Course --</option>
                                <option value="Computer Basic">Computer Basic</option>
                                <option value="Typing">Typing</option>
                                <option value="MSCIT">MSCIT</option>
                                <option value="Tally">Tally</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.course}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Location */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                                placeholder="Enter state"
                            />
                            <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>District</Form.Label>
                            <Form.Control
                                type="text"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                isInvalid={!!errors.district}
                                placeholder="Enter district"
                            />
                            <Form.Control.Feedback type="invalid">{errors.district}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Address & Pincode */}
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
                                placeholder="Enter full address"
                            />
                            <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                type="number"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                isInvalid={!!errors.pincode}
                                placeholder="Enter 6 digit pin code"
                            />
                            <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    {/* Photo */}
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Upload Photo (JPG/JPEG, max 1MB)</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".jpg,.jpeg"
                                onChange={handlePhotoChange}
                            />
                        </Form.Group>

                        {photoPreview && (
                            <div className="mt-2 text-center">
                                <p><strong>Preview:</strong></p>
                                <img
                                    src={photoPreview}
                                    alt="Preview"
                                    className="img-thumbnail"
                                    style={{ maxHeight: '200px' }}
                                />
                            </div>
                        )}
                    </Col>
                </Row>

                {/* Buttons */}
                <div className="text-center">
                    <Button variant="danger" type="submit" className="me-3">
                        Submit Admission
                    </Button>

                    <Button variant="secondary" type="button" onClick={handleReset}>
                        Reset
                    </Button>
                </div>

            </Form>
        </Container>
    );
}

export default Admission;
