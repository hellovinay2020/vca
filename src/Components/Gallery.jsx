import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import AOS from 'aos';
import { BsImages } from "react-icons/bs";

// Images
import Gallery1 from '../assets/Gallery/Gallery_images (1).jpg';
import Gallery2 from '../assets/Gallery/Gallery_images (2).jpg';
import Gallery3 from '../assets/Gallery/Gallery_images (3).jpg';
import Gallery4 from '../assets/Gallery/Gallery_images (4).jpg';
import Gallery5 from '../assets/Gallery/Gallery_images (5).jpg';
import Gallery6 from '../assets/Gallery/Gallery_images (6).jpg';
import Gallery7 from '../assets/Gallery/Gallery_images (7).jpg';
import Gallery8 from '../assets/Gallery/Gallery_images (8).jpg';
import Gallery9 from '../assets/Gallery/Gallery_images (9).jpg';
import Gallery10 from '../assets/Gallery/Gallery_images (10).jpg';
import Gallery11 from '../assets/Gallery/Gallery_images (11).jpg';
import Gallery12 from '../assets/Gallery/Gallery_images (12).jpg';
import Gallery13 from '../assets/Gallery/Gallery_images (13).jpg';
import Gallery14 from '../assets/Gallery/Gallery_images (14).jpg';
import Gallery15 from '../assets/Gallery/Gallery_images (15).jpg';
import Gallery16 from '../assets/Gallery/Gallery_images (16).jpg';
import Gallery17 from '../assets/Gallery/Gallery_images (17).jpg';
import Gallery18 from '../assets/Gallery/Gallery_images (18).jpg';
import Gallery19 from '../assets/Gallery/Gallery_images (19).jpg';
import Gallery20 from '../assets/Gallery/Gallery_images (20).jpg';
import Gallery21 from '../assets/Gallery/Gallery_images (21).jpg';
import Gallery22 from '../assets/Gallery/Gallery_images (22).jpg';
import Gallery23 from '../assets/Gallery/Gallery_images (23).jpg';
import Gallery24 from '../assets/Gallery/Gallery_images (24).jpg';
import Gallery25 from '../assets/Gallery/Gallery_images (25).jpg';
import Gallery26 from '../assets/Gallery/Gallery_images (26).jpg';
import Gallery27 from '../assets/Gallery/Gallery_images (27).jpg';
import Gallery28 from '../assets/Gallery/Gallery_images (28).jpg';
import Gallery29 from '../assets/Gallery/Gallery_images (29).jpg';
import Gallery30 from '../assets/Gallery/Gallery_images (30).jpg';
import Gallery31 from '../assets/Gallery/Gallery_images (31).jpg';
import Gallery32 from '../assets/Gallery/Gallery_images (32).jpg';
import Gallery33 from '../assets/Gallery/Gallery_images (33).jpg';




export default function Gallery() {
    const [show, setShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const galleryImages = [
        { src: Gallery1, title: 'Exams Day' },
        { src: Gallery2, title: 'Exam Day' },
        { src: Gallery3, title: 'Exam Day' },
        { src: Gallery4, title: '26 january 2025' },
        { src: Gallery5, title: '26 january 2025' },
        { src: Gallery6, title: 'Complete Course ' },
        { src: Gallery7, title: 'Complete Course ' },
        { src: Gallery8, title: 'Complete Course' },
        { src: Gallery9, title: 'Pooja Ceremony 2025' },
        { src: Gallery10, title: 'Complete Course' },
        { src: Gallery11, title: 'Pooja Ceremony 2025' },
        { src: Gallery12, title: 'VCA Proudly Congratulates Its Toppers' },
        { src: Gallery13, title: 'VCA Proudly Congratulates Its Toppers' },
        { src: Gallery14, title: 'VCA Proudly Congratulates Its Toppers' },
        { src: Gallery15, title: 'VCA Proudly Congratulates Its Toppers' },
        { src: Gallery16, title: 'VCA Proudly Congratulates Its Toppers' },
        { src: Gallery17, title: 'VCA Proudly Congratulates Its Toppers' },
        { src: Gallery18, title: 'VCA Proudly Congratulates Its Toppers' },
        { src: Gallery19, title: 'VCA Proudly Congratulates Its Toppers' },
        { src: Gallery20, title: 'Teachers Day' },
        { src: Gallery21, title: '15 aug 2025' },
        { src: Gallery22, title: '15 aug 2025' },
        { src: Gallery23, title: '15 aug 2025' },
        { src: Gallery24, title: '15 aug 2025' },
        { src: Gallery25, title: '15 aug 2025' },
        { src: Gallery26, title: '15 aug 2025' },
        { src: Gallery27, title: '15 aug 2025' },
        { src: Gallery28, title: '15 aug 2025' },
        { src: Gallery29, title: '15 aug 2025' },
        { src: Gallery30, title: '15 aug 2025' },
        { src: Gallery31, title: '15 aug 2025' },
        { src: Gallery32, title: '15 aug 2025' },
        { src: Gallery33, title: '15 aug 2025' }


    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedImage(null);
    };

    return (
        <div className="GalleryContainer py-5">
            <Container>
                <h2
                    className="text-white bg-success p-2 rounded shadow-sm text-center"
                    data-aos="fade-up"
                >
                    <BsImages className="me-2" /> VCA Gallery
                </h2>

                <Row className="mt-4 g-4">
                    {galleryImages.map((img, index) => (
                        <Col key={index} xs={12} sm={6} md={4} data-aos="zoom-in">
                            <Card
                                className="gallery-card shadow-sm border-0"
                                onClick={() => handleImageClick(img)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="gallery-image-wrapper">
                                    <Card.Img variant="top" src={img.src} alt={img.title} className="gallery-img" />
                                </div>
                                <Card.Body className="text-center">
                                    <Card.Title>{img.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Modal for Image View */}
                <Modal show={show} onHide={handleClose} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedImage?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        {selectedImage && (
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="img-fluid rounded"
                            />
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
}
