import React, { useEffect } from 'react';
import { Container, Table, Card } from 'react-bootstrap';
import AOS from 'aos';

export default function LongCourses() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const courses = [
        { no: 1, code: "LT-01", short: "DCA", name: "Diploma in Computer Application", duration: "Six Months" },
        { no: 2, code: "LT-02", short: "CCA", name: "Certificate in Computer Application", duration: "Three Months" },
        { no: 3, code: "LT-03", short: "CFA", name: "Certification In Financial Accounting", duration: "Three Months" },
        { no: 4, code: "LT-04", short: "DAA", name: "Diploma In Advance Accountancy", duration: "Six Months" },
        { no: 5, code: "LT-05", short: "DFA", name: "Diploma In Financial Accounting", duration: "Nine Months" },
        { no: 6, code: "LT-06", short: "DDTP", name: "Diploma In Desktop Publishing", duration: "Six Months" },
        { no: 7, code: "LT-07", short: "PDDTP", name: "Professional Diploma In Desktop Publishing", duration: "One Year" },
        { no: 8, code: "LT-08", short: "DCP", name: "Diploma In Computer Programming", duration: "Six Months" },
        { no: 9, code: "LT-09", short: "DAP", name: "Diploma In Advanced Programming", duration: "Six Months" },
        { no: 10, code: "LT-10", short: "DWD", name: "Diploma in Web Designing", duration: "Six Months" },
        { no: 11, code: "LT-11", short: "DHN", name: "Diploma In Hardware and Networking", duration: "Six Months" },
        { no: 12, code: "LT-12", short: "ADHN", name: "Advance Diploma In Hardware and Networking", duration: "One Year" },
        { no: 13, code: "LT-13", short: "ADCA", name: "Advance Diploma In Computer Application", duration: "One Year" },
        { no: 14, code: "LT-14", short: "DG", name: "Diploma In Graphics", duration: "Six Months" },
        { no: 15, code: "LT-15", short: "PDDTP", name: "Professional Diploma In Desktop Publishing", duration: "One Year" },
        { no: 16, code: "LT-16", short: "DIT", name: "Diploma In Information Technology", duration: "Six Months" },
        { no: 17, code: "LT-17", short: "ADIT", name: "Advance Diploma In Information Technology", duration: "One Year" },
        { no: 18, code: "LT-18", short: "DCOM", name: "Diploma in Computer & Office Management", duration: "One Year" },
        { no: 19, code: "LT-19", short: "DMM", name: "Diploma In Multimedia", duration: "Six Months" },
        { no: 20, code: "LT-20", short: "DIT", name: "Certificate in Mobile Repairing", duration: "Three Months" },
        { no: 21, code: "LT-21", short: "DIT", name: "Diploma in Mobile Repairing", duration: "Six Month" },
        { no: 22, code: "LT-22", short: "CEL", name: "Certificate in English Lingua", duration: "Three Months" },
        { no: 23, code: "LT-23", short: "DEL", name: "Diploma in English Lingua", duration: "Six Months" },
        { no: 24, code: "LT-24", short: "DIT", name: "Diploma In Information Technology", duration: "One Year" },
        { no: 25, code: "LT-25", short: "CTTC", name: "Computer Teacher Training Course", duration: "One Year" },
        { no: 26, code: "NC-01", short: "BKC", name: "Basic Knowledge in Computer (Age : 4 To 8 Years)", duration: "Three Months" },
        { no: 27, code: "NC-02", short: "KCA", name: "Knowledge in Computer Application (Age : 8 To 12 Years)", duration: "Six Months" },
        { no: 28, code: "NC-03", short: "TSA", name: "Typing Speed and Accuracy (Typing Course)", duration: "Three Month" },
    ];

    return (
        <section className="py-4">
            <Container>
                <h4
                    className="bg-success text-white fw-bold p-2 mb-3"
                    data-aos="fade-right"
                >
                    <i className="fa-solid fa-book me-2"></i> VCA Long Term Courses
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
                                    <th>Course</th>
                                    <th>Course Code</th>
                                    <th>Course Full Name</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.no.toString().padStart(2, '0')}</td>
                                        <td>{item.short}</td>
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
