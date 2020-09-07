import React from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import AlertBox from '../../components/layouts/Alert'
import { loginSeller } from '../../redux/actions/user'

const Loginn = ({ loginSeller, isAuth, history }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        loginSeller(data, history)
    }

    if (isAuth) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <Container>
            <div className="login_container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="justify-content-md-center">
                        <Col lg="5">
                            <AlertBox />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg="5"><h3>เข้าสู่ระบบ</h3></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg="5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>อีเมล</Form.Label>
                                <Form.Control type="email" name="email" ref={register} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>รหัสผ่าน</Form.Label>
                                <Form.Control type="password" name="password" ref={register} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-4 btn-block">
                                เข้าสู่ระบบ
                        </Button>
                            <Row className="mt-3">
                                <Col lg="6">
                                    <span className="mt-2">สมาชิกใหม่ ? <Link to="/register">ลงทะเบียน</Link> ที่นี่</span>
                                </Col>
                                <Col lg="6" className="text-right">
                                    <Link to="/forgot-password">ลืมรหัสผ่าน</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </form>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.user.isAuth
})

export default connect(mapStateToProps, { loginSeller })(Loginn)
