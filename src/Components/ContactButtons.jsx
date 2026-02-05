import React from "react";
import { Button } from "react-bootstrap";
import { Back, TelephoneFill, Whatsapp } from "react-bootstrap-icons";
import { FaArrowUp } from "react-icons/fa";


const ContactButtons = () => {
    return (
        <div>
            {/* Floating Buttons Left Side */}
            <div className="floating-buttons">
                <a href="tel:+918858381213" className="mb-3">
                    <Button variant="success" className="rounded-circle shadow">
                        <TelephoneFill size={22} />
                    </Button>
                </a>
                <a
                    href="https://wa.me/918858381213"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="danger" className="rounded-circle shadow">
                        <Whatsapp size={22} />
                    </Button>
                </a>
                <a href="#">
                    <Button variant="warning" className="bottom-right-btn rounded-circle shadow text-white">
                        <FaArrowUp size={22} />
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default ContactButtons;
