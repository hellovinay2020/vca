import { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';

const testimonials = [
    {
        name: "KM NEELAM KUMARI",
        role: "DCA",
        image: "https://www.acsmindia.com/Photos/neelam_1701SS.jpg",
        quote: "मैंने यहाँ से DCA कोर्स किया है। टीचर्स बहुत हेल्पफुल हैं और हर टॉपिक को आसानी से समझाया जाता है। धन्यवाद विजय कंप्यूटर अकैडमी!",
        rating: 5
    },
    {
        name: "RAJAT RAJBHAR",
        role: "DCA",
        image: "https://www.acsmindia.com/Photos/rajat_1701SS.jpg",
        quote: "कोचिंग का माहौल बहुत अच्छा है। कंप्यूटर की बेसिक जानकारी से लेकर एडवांस तक सब कुछ अच्छी तरह सिखाया जाता है।",
        rating: 4.5
    },
    {
        name: "ALPANA SAKSHI",
        role: "ADCA",
        image: "https://www.acsmindia.com/Photos/ALPANA._0904SS.jpeg",
        quote: "मैंने पहले कभी कंप्यूटर नहीं चलाई थी, लेकिन अब Excel, MS Word, और इंटरनेट अच्छे से सीख गई हूँ।",
        rating: 4
    },
    {
        name: "AMIT KUMAR",
        role: "DCA",
        image: "https://www.acsmindia.com/Photos/f6e43e78-0bf9-4d6e-b287-06e2db8efc7b_0904SS.jpg",
        quote: "विजय कंप्यूटर अकैडमी में पढ़ाई के साथ-साथ प्रैक्टिकल पर भी पूरा ध्यान दिया जाता है। इससे चीजें जल्दी समझ में आती हैं।",
        rating: 4.5
    },
    {
        name: "AMRITA RAJBHAR",
        role: "DCA",
        image: "https://www.acsmindia.com/Photos/AMRITA._1004SS.jpeg",
        quote: "यहाँ के टीचर्स बहुत फ्रेंडली हैं। मुझे यहाँ का कोर्स स्ट्रक्चर और टाइम मैनेजमेंट सबसे अच्छा लगा।",
        rating: 5
    },
    {
        name: "MANISH KUMAR VERMA",
        role: "DCA",
        image: "https://www.acsmindia.com/Photos/manish_1801SS.jpg",
        quote: "मैंने यहाँ से DCA कोर्स किया और अब एक कंपनी में कंप्यूटर ऑपरेटर की नौकरी कर रहा हूँ। थैंक यू सर!",
        rating: 4
    },
    {
        name: "SANDHYA",
        role: "ADCA",
        image: "https://www.acsmindia.com/Photos/SANDHYA_0904SS.jpg",
        quote: "यहाँ की फीस बहुत कम है और पढ़ाई बहुत ही प्रोफेशनल लेवल की होती है। सही मायने में पैसा वसूल!",
        rating: 4.5
    },
    {
        name: "SURAJ RAJBHAR",
        role: "DCA",
        image: "https://www.acsmindia.com/Photos/suraj-removebg-preview_1701SS.png",
        quote: "मुझे सबसे ज़्यादा अच्छा ये लगा कि यहाँ सिर्फ किताबी ज्ञान नहीं बल्कि असली प्रैक्टिकल ट्रेनिंग मिलती है।",
        rating: 4
    },
    {
        name: "NAGMA",
        role: "DCA",
        image: "https://www.acsmindia.com/Photos/nagma_1701SS.jpg",
        quote: "यहाँ लाइब्रेरी, फ्री वाई-फाई और शांत माहौल जैसी सुविधाएं पढ़ाई को और आसान बना देती हैं।",
        rating: 5
    },
];

function getStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) stars.push(<FaStar key={i} className="text-warning" />);
        else if (rating + 0.5 === i) stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
        else stars.push(<FaRegStar key={i} className="text-warning" />);
    }
    return stars;
}

export default function TestimonialCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const groupedTestimonials = [];
    for (let i = 0; i < testimonials.length; i += 3) {
        groupedTestimonials.push(testimonials.slice(i, i + 3));
    }

    return (
        <section className="my-5" style={{
            background: "linear-gradient(to right top, rgb(5, 25, 55), rgb(0, 42, 69), rgb(0, 57, 62), rgb(0, 68, 38), rgb(53, 75, 4))"
        }}>
            <Container>
                <h2 className="text-center text-white fw-bold mb-1" >
                    Students Feedback
                </h2>
                <div className="testimonial-wrapper p-4 position-relative rounded">
                    {/* Left Arrow */}
                    <Button
                        className="carousel-control-custom position-absolute top-50 start-0 translate-middle-y z-3"
                        variant="warning"
                        onClick={() => setIndex(index === 0 ? groupedTestimonials.length - 1 : index - 1)}
                    >
                        &lt;
                    </Button>

                    <Carousel
                        activeIndex={index}
                        onSelect={(selectedIndex) => setIndex(selectedIndex)}
                        controls={false}
                        indicators={false}
                        interval={3000}
                        pause="hover"
                    >
                        {groupedTestimonials.map((group, groupIndex) => (
                            <Carousel.Item key={groupIndex}>
                                <Row className="text-center">
                                    {group.map((person, idx) => (
                                        <Col
                                            lg={4}
                                            md={6}
                                            sm={12}
                                            key={idx}
                                            className="mb-4"
                                            data-aos="fade-up"
                                            data-aos-delay={idx * 100}
                                        >
                                            <Card className="shadow-sm h-100 testimonial-card">
                                                <Card.Body>
                                                    <img
                                                        src={person.image}
                                                        alt={person.name}
                                                        className="rounded-circle mb-3 shadow"
                                                        width="100"
                                                        height="100"
                                                    />
                                                    <Card.Title>{person.name}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-primary">{person.role}</Card.Subtitle>
                                                    <Card.Text>
                                                        <FaQuoteLeft className="me-2 text-muted" />
                                                        {person.quote}
                                                    </Card.Text>
                                                    <div className="d-flex justify-content-center">
                                                        {getStars(person.rating)}
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    {/* Right Arrow */}
                    <Button
                        className="carousel-control-custom position-absolute top-50 end-0 translate-middle-y z-3"
                        variant="warning"
                        onClick={() => setIndex((index + 1) % groupedTestimonials.length)}
                    >
                        &gt;
                    </Button>
                </div>
            </Container>
        </section>
    );
}
