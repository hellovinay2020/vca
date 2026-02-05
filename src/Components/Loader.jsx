import React from 'react';
import logo from '../assets/vijay logo png.png'; // Make sure the path is correct

export default function Loader() {
    return (
        <div className="loader-overlay d-flex justify-content-center align-items-center">
            <div className="text-center">
                <img src={logo} alt="Loading..." className="rotating-logo mb-3" />
                <p className="mt-3 text-white ">Vijay Computer Academy</p>
            </div>
        </div>
    );
}
