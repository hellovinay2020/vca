import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "react-qr-code";
import logo from "../assets/Logo/my_logo.png";
import studentPhoto from "../assets/Team/vinay.png";

export default function IDCard() {
    const cardRef = useRef(null);

    // 🔽 Download ID Card on A4 PDF (actual ID size)
    const handleDownload = async () => {
        const element = cardRef.current;

        const canvas = await html2canvas(element, {
            scale: 3,
            backgroundColor: "#ffffff",
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("portrait", "mm", "a4");

        // A4 size = 210 x 297 mm
        // ID Card size = 86 x 54 mm

        const marginLeft = 5; // LEFT side gap
        const marginTop = 5;  // TOP gap

        pdf.addImage(
            imgData,
            "PNG",
            marginLeft,
            marginTop,
            86,
            54
        );

        pdf.save("VCA_ID_Card_A4.pdf");
    };

    const handleCancel = () => window.history.back();

    return (
        <>
            <div className="id-wrap">
                <div className="id-card premium" ref={cardRef}>
                    {/* Header */}
                    <div className="id-header">
                        <img src={logo} alt="VCA Logo" className="id-logo" />
                        <div className="id-head-text">
                            <h3>VIJAY COMPUTER ACADEMY</h3>
                            <span><b>Phone:</b> 8858381213</span>
                            <span><b>Add:</b> Firojpur, Masoompur, Dist - Ballia (UP) - 277303</span>
                            <span><b>Website:</b> www.vijaycomputeracademy.in</span>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="id-body">
                        <div className="id-photo">
                            <img src={studentPhoto} alt="Student" />
                        </div>

                        <div className="id-details">
                            <p><b>REG :</b> VCA/2026/101</p>
                            <p><b>NAME :</b> ANSH MAURYA</p>
                            <p><b>COURSE :</b> ADCA</p>
                            <p><b>DOB :</b> 15-07-2015</p>
                            <p><b>PHONE :</b> 9889747645</p>
                            <div className="id-dates">
                                <span><b>Issue :</b> 01-01-2025</span>
                                <span><b>Valid :</b> 31-12-2025</span>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="id-qr">
                            <QRCode value="VCA/2026/101 | ANSH MAURYA | ADCA" size={64} />
                            <small>Scan Me</small>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="id-footer">
                        <span>Authorised Sign</span>
                        <span className="footer-line"></span>
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="id-actions">
                <button className="btn btn-danger" onClick={handleDownload}>Download PDF</button>
                <button className="btn btn-dark" onClick={handleCancel}>Cancel</button>
            </div>
        </>
    );
}
