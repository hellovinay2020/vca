import React, { useEffect } from 'react';
import { Container, Table, Card } from 'react-bootstrap';
import AOS from 'aos';

export default function ShortCourses() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const courses = [
        { no: 1, code: "ST-01", name: "Computer Fundamental", duration: "15 Days" },
        { no: 2, code: "ST-02", name: "MS-Dos", duration: "15 Days" },
        { no: 3, code: "ST-03", name: "MS-Windows (Latest Version)", duration: "15 Days" },
        { no: 4, code: "ST-04", name: "Photoshop (Latest Version)", duration: "15 Days" },
        { no: 5, code: "ST-05", name: "Pagemaker (Latest Version)", duration: "15 Days" },
        { no: 6, code: "ST-06", name: "Coral Draw (Latest Version)", duration: "15 Days" },
        { no: 7, code: "ST-07", name: "MS-Word (Latest Version)", duration: "15 Days" },
        { no: 8, code: "ST-08", name: "MS-Excel (Latest Version)", duration: "15 Days" },
        { no: 9, code: "ST-09", name: "MS-Power Point (Latest Version)", duration: "15 Days" },
        { no: 10, code: "ST-10", name: "MS-Access (Latest Version)", duration: "15 Days" },
        { no: 11, code: "ST-11", name: "In Design", duration: "60 Days" },
        { no: 12, code: "ST-12", name: "Unix / Linux", duration: "30 Days" },
        { no: 13, code: "ST-12", name: "Oracle 8i", duration: "45 Days" },
        { no: 14, code: "ST-14", name: "Dot Net", duration: "45 Days" },
        { no: 15, code: "ST-15", name: "PHP", duration: "45 Days" },
        { no: 16, code: "ST-16", name: "Foxprow Programming", duration: "30 Days" },
        { no: 17, code: "ST-17", name: "C Programming", duration: "30 Days" },
        { no: 18, code: "ST-18", name: "Visual Basics (Latest Version)", duration: "30 Days" },
        { no: 19, code: "ST-19", name: "JAVA", duration: "45 Days" },
        { no: 20, code: "ST-20", name: "HTML", duration: "30 Days" },
        { no: 21, code: "ST-21", name: "Digital Photography", duration: "30 Days" },
        { no: 22, code: "ST-22", name: "C++", duration: "45 Days" },
        { no: 23, code: "ST-23", name: "Tally 9.0 With GST", duration: "30 Days" },
    ];

    return (
        <section className="py-4">
            <Container>
                <h4
                    className="bg-success text-white fw-bold p-2 mb-3"
                    data-aos="fade-right"
                >
                    <i className="fa-solid fa-book me-2"></i> VCA Short Term Courses
                </h4>

                <Card className="shadow-lg" data-aos="zoom-in">
                    <Card.Body>
                        <Table
                            responsive
                            bordered
                            hover
                            className="text-center align-middle table-sm"
                            data-aos="fade-up"
                        >
                            <thead className="table-dark">
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>Course Code</th>
                                    <th>Course Full Name</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.no.toString().padStart(2, '0')}</td>
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
            <hr className="my-4" />
        </section>
    );
}
