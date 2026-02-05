import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h1 className="display-3 text-danger fw-bold">404</h1>
            <h2 className="mb-3">Oops! Page Not Found</h2>
            <p className="text-muted">
                The page you are looking for does not exist or has been moved.
            </p>
            <Button as={Link} to="/" variant="danger" className="mt-3">
                ⬅ Back to Home
            </Button>
        </Container>
    );
};

export default NotFound;
