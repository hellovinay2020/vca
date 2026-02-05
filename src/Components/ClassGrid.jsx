import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckSquare } from 'react-icons/fa';
import AOS from 'aos';


const classList = [
  "1st Class", "2nd Class", "3rd Class",
  "4th Class", "5th Class", "6th Class",
  "7th Class", "8th Class", "Coming Soon..."
];

export default function ClassGrid() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-5 bg-light ">
      <Container className='Classes shadow p-4 '>
        <h4 className="text-center fw-bold mb-4" data-aos="fade-down">
          Classes Provided by <span className="text-success">Academy</span>
        </h4>
        <p>Academy द्वारा प्रदान की जाने वाली कक्षाएं कक्षा 1 से 8 तक के छात्रों के लिए विशेष रूप से तैयार की गई हैं। इन कक्षाओं में प्रत्येक विषय को सरल, रोचक और व्यावहारिक तरीके से पढ़ाया जाता है ताकि छात्रों की नींव मजबूत हो और वे आगे की कक्षाओं के लिए पूरी तरह तैयार हो सकें। यहां अनुभवी शिक्षकों द्वारा आधुनिक शिक्षण विधियों के साथ गुणवत्तापूर्ण शिक्षा प्रदान की जाती है, जिससे शैक्षणिक विकास के साथ-साथ विद्यार्थियों में आत्मविश्वास और सोचने की क्षमता भी बढ़ती है।</p>
        <Row className="g-4 justify-content-center">
          {classList.map((cls, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} data-aos="zoom-in">
              <Card className="class-card shadow text-center">
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <FaCheckSquare className="text-success fs-2 mb-2" />
                  <span className="fw-bold">{cls}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
