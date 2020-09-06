import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

const ForgotPassword = () => {
    return (
        <Container>
            <div className="login_container">
                <Row className="justify-content-md-center">
                    <Col lg="5"><h3>ลืมรหัสผ่านหรือไม่?</h3></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="5">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>อีเมล</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-4 btn-block">
                            รีเซ็ตรหัสผ่าน
                        </Button>
                        <Row className="mt-3">
                            <Col lg="6">
                                <Link to="/login">ย้อนกลับ</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default ForgotPassword
