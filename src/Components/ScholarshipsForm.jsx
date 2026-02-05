import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./scholarship.css";
function ScholarshipForm() {

    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        motherName: "",
        phone: "",
        email: "",
        className: "",
        gender: "",
        dob: "",
        schoolName: "",
        scholarshipType: "",
        otherScholarship: "",
        annualIncome: "",
        address: "",
        district: "",
        state: "",
        pincode: "",
        photo: null
    });

    const [errors, setErrors] = useState({});
    const [photoPreview, setPhotoPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

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

    const validate = () => {
        let tempErrors = {};

        if (!formData.name.trim()) tempErrors.name = "Full Name is required";
        if (!formData.fatherName.trim()) tempErrors.fatherName = "Father's Name is required";
        if (!formData.motherName.trim()) tempErrors.motherName = "Mother's Name is required";
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Valid 10-digit Mobile No is required";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Valid Email is required";
        if (!formData.className) tempErrors.className = "Class is required";
        if (!formData.gender) tempErrors.gender = "Gender is required";
        if (!formData.dob) tempErrors.dob = "Date of Birth is required";
        if (!formData.schoolName.trim()) tempErrors.schoolName = "School Name is required";
        if (!formData.scholarshipType) tempErrors.scholarshipType = "Scholarship Type is required";
        if (formData.scholarshipType === "Other" && !formData.otherScholarship.trim()) tempErrors.otherScholarship = "Please specify other scholarship type";
        if (!formData.annualIncome.trim()) tempErrors.annualIncome = "Annual Family Income is required";
        if (!formData.address.trim()) tempErrors.address = "Address is required";
        if (!formData.district.trim()) tempErrors.district = "District is required";
        if (!formData.state.trim()) tempErrors.state = "State is required";
        if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) tempErrors.pincode = "Valid 6-digit Pin Code is required";
        if (!formData.photo) tempErrors.photo = "Photo is required";

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
            text: `Submit scholarship form for ${formData.name}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, Submit',
        }).then((result) => {
            if (result.isConfirmed) {
                // Save in localStorage
                const existingData = JSON.parse(localStorage.getItem("scholarshipApplicants")) || [];
                existingData.push(formData);
                localStorage.setItem("scholarshipApplicants", JSON.stringify(existingData));

                Swal.fire('Success', `Scholarship form submitted successfully!`, 'success');

                // Reset form
                setFormData({
                    name: "",
                    fatherName: "",
                    motherName: "",
                    phone: "",
                    email: "",
                    className: "",
                    gender: "",
                    dob: "",
                    schoolName: "",
                    scholarshipType: "",
                    otherScholarship: "",
                    annualIncome: "",
                    address: "",
                    district: "",
                    state: "",
                    pincode: "",
                    photo: null
                });
                setPhotoPreview(null);
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
                    phone: "",
                    email: "",
                    className: "",
                    gender: "",
                    dob: "",
                    schoolName: "",
                    scholarshipType: "",
                    otherScholarship: "",
                    annualIncome: "",
                    address: "",
                    district: "",
                    state: "",
                    pincode: "",
                    photo: null
                });
                setPhotoPreview(null);
                setErrors({});
            }
        });
    };

    return (
        <Container className="mt-5 mb-5 p-4 shadow rounded schoartship-container " data-aos="fade-up" >
            <h2 className="text-center mb-4 text-white fw-bold">Scholarship Application Form</h2>
            <Form onSubmit={handleSubmit} noValidate>

                {/* Full Name, Father, Mother */}
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
                                placeholder="Enter full name"
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
                                placeholder="Enter father's name"
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
                                placeholder="Enter mother's name"
                            />
                            <Form.Control.Feedback type="invalid">{errors.motherName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Mobile & Email */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                isInvalid={!!errors.phone}
                                placeholder="Enter mobile number"
                            />
                            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
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
                </Row>

                {/* Class & Gender */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Class</Form.Label>
                            <Form.Select
                                name="className"
                                value={formData.className}
                                onChange={handleChange}
                                isInvalid={!!errors.className}
                            >
                                <option value="">-- Select Class --</option>
                                {[...Array(12)].map((_, i) => (
                                    <option key={i + 1} value={`${i + 1}th`}>{i + 1}th</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.className}</Form.Control.Feedback>
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

                {/* DOB & School Name */}
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
                            <Form.Label>School Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="schoolName"
                                value={formData.schoolName}
                                onChange={handleChange}
                                isInvalid={!!errors.schoolName}
                                placeholder="Enter school name"
                            />
                            <Form.Control.Feedback type="invalid">{errors.schoolName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Scholarship Type & Annual Income */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Scholarship Type</Form.Label>
                            <Form.Select
                                name="scholarshipType"
                                value={formData.scholarshipType}
                                onChange={handleChange}
                                isInvalid={!!errors.scholarshipType}
                            >
                                <option value="">-- Select Scholarship --</option>
                                <option value="Merit-Based">Merit-Based Scholarship</option>
                                <option value="Need-Based">Need-Based Scholarship</option>
                                <option value="Sports">Sports Scholarship</option>
                                <option value="Other">Merit Scholarship</option>
                                <option value="Other">Subject-wise Scholarship</option>
                                <option value="Other">Olympiad Scholarship</option>
                                <option value="Other">School Topper Scholarship</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">{errors.scholarshipType}</Form.Control.Feedback>
                        </Form.Group>
                        {formData.scholarshipType === "Other" && (
                            <Form.Group className="mb-3">
                                <Form.Label>Specify Other Scholarship</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="otherScholarship"
                                    value={formData.otherScholarship}
                                    onChange={handleChange}
                                    isInvalid={!!errors.otherScholarship}
                                    placeholder="Enter scholarship name"
                                />
                                <Form.Control.Feedback type="invalid">{errors.otherScholarship}</Form.Control.Feedback>
                            </Form.Group>
                        )}
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Annual Family Income</Form.Label>
                            <Form.Control
                                type="text"
                                name="annualIncome"
                                value={formData.annualIncome}
                                onChange={handleChange}
                                isInvalid={!!errors.annualIncome}
                                placeholder="Enter annual income"
                            />
                            <Form.Control.Feedback type="invalid">{errors.annualIncome}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Address, District, State, Pin */}
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

                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                                placeholder="Enter state"
                                className="mt-2"
                            />
                            <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>

                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                type="number"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                isInvalid={!!errors.pincode}
                                placeholder="Enter 6-digit pin code"
                                className="mt-2"
                            />
                            <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Photo Upload */}
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Photo Upload (JPG/JPEG, 1MB max)</Form.Label>
                            <Form.Control
                                type="file"
                                accept=".jpg,.jpeg"
                                onChange={handlePhotoChange}
                                isInvalid={!!errors.photo}
                            />
                            <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>

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
                        </Form.Group>
                    </Col>
                </Row>

                {/* Buttons */}
                <div className="text-center">
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

export default ScholarshipForm;
