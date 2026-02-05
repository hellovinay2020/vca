import React, { useState } from "react";
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// ✅ React Icons import
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaLock, FaShieldAlt, FaSignInAlt, FaTimesCircle } from "react-icons/fa";

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleReset = () => {
        setFullName('');
        setNumber('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            Swal.fire("Invalid Email!", "Please enter a valid email address.", "error");
        } else if (!validatePhoneNumber(number)) {
            Swal.fire("Invalid Mobile Number!", "Please enter a 10-digit mobile number.", "error");
        } else if (password.length < 6) {
            Swal.fire("Weak Password!", "Password must be at least 6 characters.", "error");
        } else if (password !== confirmPassword) {
            Swal.fire("Password Mismatch!", "Passwords do not match.", "error");
        } else {
            const allCenters = JSON.parse(localStorage.getItem("allCenters")) || [];

            // ✅ Check if this mobile number is already registered
            const existingUser = allCenters.find(user => user.number === number);
            if (existingUser) {
                Swal.fire("Number Already Registered", "This mobile number is already in use.", "error");
                return;
            }

            const newUser = {
                fullName,
                number,
                email,
                password,
                status: "inactive" // default inactive
            };

            allCenters.push(newUser);
            localStorage.setItem("allCenters", JSON.stringify(allCenters));

            Swal.fire("Registration Complete!", "Please wait for admin approval. Contact us 8858381213", "success");
            navigate("/Login");
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="container">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-md-6 d-none d-md-block logo">
                        <img
                            src="/images/logo.png"
                            alt="Signup"
                            className="img-fluid rounded-start"
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="form-box CenterSignup p-4 bg-white rounded-4">
                            <h3 className="text-center text-primary fs-2 fw-bold mb-4">Center SignUp</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    {/* Full Name */}
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <FaUserAlt />
                                            </span>
                                            <input
                                                type="text"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                className="form-control"
                                                placeholder="Full Name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile Number */}
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <FaPhoneAlt />
                                            </span>
                                            <input
                                                type="tel"
                                                value={number}
                                                onChange={(e) => setNumber(e.target.value)}
                                                className="form-control"
                                                placeholder="Mobile Number (10 digits)"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <FaEnvelope />
                                            </span>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <FaLock />
                                            </span>
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="form-control"
                                                placeholder="Password (min 6 characters)"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <FaShieldAlt />
                                            </span>
                                            <input
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="col-6 mb-3">
                                        <button type="submit" className="btn btn-primary w-100 fw-semibold">
                                            <FaSignInAlt className="me-2" /> Submit
                                        </button>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <button type="reset" onClick={handleReset} className="btn btn-outline-secondary w-100">
                                            <FaTimesCircle className="me-2" /> Reset
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <p className='text-center mt-3'>
                                Already have a Center account? <Link to="/Login">Center Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
