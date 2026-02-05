import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// ✅ React Icons Import
import { BsTelephoneFill, BsEnvelopeFill, BsLockFill, BsBoxArrowInRight, BsXCircle } from "react-icons/bs";

const Login = () => {
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

    const handleReset = () => {
        setNumber('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!number || !email || !password) {
            Swal.fire("Incomplete Form", "Please fill in all fields.", "warning");
            return;
        }

        if (!validatePhoneNumber(number)) {
            Swal.fire("Invalid Number", "Please enter a valid 10-digit mobile number.", "error");
            return;
        }

        if (!validateEmail(email)) {
            Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
            return;
        }

        const allCenters = JSON.parse(localStorage.getItem("allCenters")) || [];

        const matchedUser = allCenters.find(
            (user) =>
                user.number === number &&
                user.email === email &&
                user.password === password
        );

        if (!matchedUser) {
            Swal.fire("Login Failed!", "Invalid credentials.", "error");
        } else if (matchedUser.status !== "active") {
            Swal.fire("Account Inactive", "Please contact administrator to activate your account. Mobile No. 8858381213", "warning");
        } else {
            Swal.fire({
                title: "Login Successful!",
                text: "Welcome back!",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });

            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="row min-vh-100 align-items-center">
                    <div className="col-md-6 d-none d-md-block">
                        <img
                            src="/images/logo.png"   // ✅ public folder से access
                            alt="Login"
                            className="img-fluid rounded-start"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="form-box CenterSignup p-4 bg-white rounded-4">
                            <h3 className="text-center text-primary fw-bold mb-4">Center Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="row">

                                    {/* Mobile Number */}
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <BsTelephoneFill />
                                            </span>
                                            <input
                                                type="tel"
                                                value={number}
                                                onChange={(e) => setNumber(e.target.value)}
                                                className="form-control"
                                                placeholder="Mobile Number"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <BsEnvelopeFill />
                                            </span>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control"
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className="col-12 mb-3">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <BsLockFill />
                                            </span>
                                            <input
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="form-control"
                                                placeholder="Password"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="col-6 mb-3">
                                        <button type="submit" className="btn btn-primary w-100 fw-semibold">
                                            <BsBoxArrowInRight className="me-2" /> Login
                                        </button>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <button type="button" className="btn btn-outline-secondary w-100" onClick={handleReset}>
                                            <BsXCircle className="me-2" /> Reset
                                        </button>
                                    </div>
                                </div>

                                <p className='text-center mt-2'>
                                    Don't have a Center account? <Link to="/signup">Center SignUp</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
