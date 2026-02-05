import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Offcanvas, Nav } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './AdminPanel.css';

const AdminPanel = () => {
    const [centers, setCenters] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        const storedCenters = JSON.parse(localStorage.getItem("allCenters")) || [];
        setCenters(storedCenters);
    }, []);

    const updateCenterStatus = (index, status) => {
        Swal.fire({
            title: `Are you sure you want to mark this center as "${status}"?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, change it!",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCenters = [...centers];
                updatedCenters[index].status = status;
                localStorage.setItem("allCenters", JSON.stringify(updatedCenters));
                setCenters(updatedCenters);
                Swal.fire("Updated!", `Center status set to "${status}".`, "success");
            }
        });
    };

    const deleteCenter = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won’t be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCenters = centers.filter((_, i) => i !== index);
                localStorage.setItem("allCenters", JSON.stringify(updatedCenters));
                setCenters(updatedCenters);
                Swal.fire("Deleted!", "Center has been deleted.", "success");
            }
        });
    };

    const changePassword = (index) => {
        Swal.fire({
            title: 'Change Password',
            input: 'password',
            inputLabel: 'Enter new password',
            inputPlaceholder: 'New password',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                const updatedCenters = [...centers];
                updatedCenters[index].password = result.value;
                localStorage.setItem("allCenters", JSON.stringify(updatedCenters));
                setCenters(updatedCenters);
                Swal.fire("Success", "Password updated!", "success");
            }
        });
    };

    const changeMobile = (index) => {
        Swal.fire({
            title: 'Change Mobile Number',
            input: 'tel',
            inputLabel: 'Enter new mobile number (10 digits)',
            inputPlaceholder: 'New mobile number',
            showCancelButton: true
        }).then((result) => {
            const newMobile = result.value;

            if (result.isConfirmed) {
                const isValid = /^[0-9]{10}$/.test(newMobile);
                const isDuplicate = centers.some((c, i) => c.number === newMobile && i !== index);

                if (!isValid) {
                    Swal.fire("Invalid Number", "Please enter a valid 10-digit mobile number.", "error");
                } else if (isDuplicate) {
                    Swal.fire("Duplicate Number", "This number is already registered to another center.", "error");
                } else {
                    const updatedCenters = [...centers];
                    updatedCenters[index].number = newMobile;
                    localStorage.setItem("allCenters", JSON.stringify(updatedCenters));
                    setCenters(updatedCenters);
                    Swal.fire("Success", "Mobile number updated!", "success");
                }
            }
        });
    };

    // 🔹 NEW FUNCTION for Email Change
    const changeEmail = (index) => {
        Swal.fire({
            title: 'Change Email',
            input: 'email',
            inputLabel: 'Enter new email address',
            inputPlaceholder: 'New email',
            showCancelButton: true
        }).then((result) => {
            const newEmail = result.value;

            if (result.isConfirmed) {
                const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
                const isDuplicate = centers.some((c, i) => c.email === newEmail && i !== index);

                if (!isValid) {
                    Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
                } else if (isDuplicate) {
                    Swal.fire("Duplicate Email", "This email is already registered to another center.", "error");
                } else {
                    const updatedCenters = [...centers];
                    updatedCenters[index].email = newEmail;
                    localStorage.setItem("allCenters", JSON.stringify(updatedCenters));
                    setCenters(updatedCenters);
                    Swal.fire("Success", "Email updated!", "success");
                }
            }
        });
    };

    return (
        <div className="admin-responsive">
            <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} responsive="md">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Admin Panel</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Nav.Link>Center Management</Nav.Link>
                        <Nav.Link>Settings</Nav.Link>
                        <Nav.Link>Logout</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

            <div className="d-flex">
                <div className="sidebar d-none d-md-block">
                    <h4 className="text-white text-center mt-4">Admin Panel</h4>
                    <ul className="nav flex-column p-3">
                        <li className="nav-item mb-2"><span className="nav-link text-white">Center Management</span></li>
                        <li className="nav-item mb-2"><span className="nav-link text-white">Settings</span></li>
                        <li className="nav-item"><span className="nav-link text-white">Logout</span></li>
                    </ul>
                </div>

                <main className="content p-3 flex-grow-1">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h3 className="text-center flex-grow-1">Center Management</h3>
                        <Button variant="outline-dark" className="d-md-none" onClick={() => setShowSidebar(true)}>
                            ☰
                        </Button>
                    </div>

                    <p className="text-muted text-center d-md-none mb-2">
                        👉 Swipe left/right to view full table
                    </p>

                    <div className="table-responsive">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Full Name</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {centers.length > 0 ? (
                                    centers.map((center, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{center.fullName}</td>
                                            <td>{center.number}</td>
                                            <td>{center.email}</td>
                                            <td>{center.password}</td>
                                            <td>
                                                <Form.Select
                                                    value={center.status}
                                                    onChange={(e) => updateCenterStatus(index, e.target.value)}
                                                >
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Button variant="danger" size="sm" onClick={() => deleteCenter(index)}>Delete</Button>{' '}
                                                <Button variant="warning" size="sm" onClick={() => changePassword(index)}>Change Password</Button>{' '}
                                                <Button variant="info" size="sm" onClick={() => changeMobile(index)}>Change Mobile</Button>{' '}
                                                <Button variant="secondary" size="sm" onClick={() => changeEmail(index)}>Change Email</Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center">No center users found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;
