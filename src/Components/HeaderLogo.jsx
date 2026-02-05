import headerlogo from '../assets/headerlogo.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HeaderLogo = () => {
    return (
        <div>
            {/* Header Logo */}
            <header className="bg-white shadow-lg py-2">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} xs={12} className="text-lg-start text-center">
                            <Link to="/">
                                <img src={headerlogo} alt="logo" width="80%" />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    )
}

export default HeaderLogo
