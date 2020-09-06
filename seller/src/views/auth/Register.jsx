import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom'
import { Button, Container, Row, Col, Form, Alert } from 'react-bootstrap';
import myData from '../../assets/json/raw_database.json';
import AlertBox from '../../components/layouts/Alert'
import { registerSeller } from '../../redux/actions/user'

const RegisterPage = ({ registerSeller, status, isAuth }) => {

    const { register, handleSubmit, watch, errors } = useForm();

    const [province, setProvince] = useState();
    const [amphoe, setAmphoe] = useState();
    const [district, setDistrict] = useState();
    const [zipcode, setZipcode] = useState();

    useEffect(() => {
        getOptionAddress(myData)
    }, []);

    const getOptionAddress = (obj, index = 'กรุงเทพมหานคร') => {
        var prov = groupBy(obj, 'province');
        var amp = groupBy(prov[index], 'amphoe')
        var district = groupBy(amp[Object.keys(amp)[0]], 'district')
        setProvince(prov)
        setAmphoe(amp)
        setDistrict(district)
        setZipcode(groupBy(district[Object.keys(district)[0]], 'zipcode'))

    }

    const onChangeProv = (e) => {
        getOptionAddress(myData, e.target.options[e.target.selectedIndex].text)
    }

    const getOptionAmphoe = (index = 0) => {
        var district = groupBy(amphoe[index], 'district')
        setDistrict(district)
        setZipcode(groupBy(district[Object.keys(district)[0]], 'zipcode'))
    }

    const onChangeAmphoe = (e) => {
        getOptionAmphoe(e.target.options[e.target.selectedIndex].text)
    }

    const getOptionDistrict = (index = 0) => {
        setZipcode(groupBy(district[index], 'zipcode'))
    }

    const onChangeDistrict = (e) => {
        getOptionDistrict(e.target.options[e.target.selectedIndex].text)
    }

    const groupBy = (array, key) => {
        // Return the end result
        return array.reduce((result, currentValue) => {
            // If an array already present for key, push it to the array. Else create an array and push the object
            (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
            );
            // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
            return result;
        }, {}); // empty object is the initial value for result object
    };

    const onSubmit = async (data, e) => {
        e.preventDefault();
        registerSeller(data)
    };

    if (isAuth) {
        return <Redirect to='/dashboard' />;
    }

    return (
        <div>
            {status ?
                <Container>
                    <div className="login_container">
                        <Row className="justify-content-md-center">
                            <Col lg="5">
                                <h3>ลงทะเบียนเสร็จเรียบร้อย</h3>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col lg="5">
                                ยินดีต้อนรับสู่ระบบผู้ขาย<br />คลิ๊กปุ่มด้านล่างเพื่อเข้าสู่ระบบ
                    </Col>
                        </Row>
                        <Row className="justify-content-md-center mt-3">
                            <Col lg="5">
                                <Link to="/login">
                                    <Button className="w-50">เข้าสู่ระบบ</Button>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container> :
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Container>
                            <div className="register_container">
                                <Row className="justify-content-lg-center">
                                    <Col lg="10 mb-3"><h3>ลงทะเบียนผู้ขาย</h3></Col>
                                    <Col lg="12">
                                        <AlertBox />
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>อีเมล <span className="text-danger">*</span> </Form.Label>
                                            <Form.Control type="email" name="email" ref={register({ required: true })} />
                                            {errors.email && <Form.Text className="text-danger">
                                                ข้อมูลไม่ถูกต้อง
                                            </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>ชื่อร้านค้า <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" name="shopname" ref={register({ required: true })} />
                                            {errors.shopname && <Form.Text className="text-danger">
                                                ข้อมูลไม่ถูกต้อง
                                 </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>รหัสผ่าน <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="password" name="password" ref={register({ min: 6, max: 20 })} />
                                            {errors.password && <Form.Text className="text-danger">
                                                ข้อมูลไม่ถูกต้อง
                                 </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>ยืนยันรหัสผ่าน <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="password" name="password2"
                                                ref={register({
                                                    validate: (value) => {
                                                        return value === watch('password');
                                                    }
                                                })}
                                            />
                                            {errors.password2 && <Form.Text className="text-danger">
                                                รหัสผ่านไม่ตรงกัน
                                 </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mt-4 justify-content-lg-center">
                                    <Col lg="10 mb-3"><h5>ข้อมูลส่วนบุคคล</h5></Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>ชื่อ <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" name="fname" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
                                            {errors.fname && <Form.Text className="text-danger">
                                                ข้อมูลไม่ถูกต้อง
                                 </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>นามสกุล <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" name="lname" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
                                            {errors.lname && <Form.Text className="text-danger">
                                                ข้อมูลไม่ถูกต้อง
                                 </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>เบอร์โทรศัพท์ <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" name="phone" ref={register({
                                                required: true,
                                                pattern: /^[0-9]+$/i,
                                                minLength: 8,
                                                maxLength: 15
                                            })} />
                                            {errors.phone && <Form.Text className="text-danger">
                                                ข้อมูลไม่ถูกต้อง
                                 </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5"></Col>
                                </Row>
                                <Row className="justify-content-lg-center mt-4">
                                    <Col lg="10 mb-3"><h5>ข้อมูลที่อยู่</h5></Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>เลขที่ <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" name="address" ref={register({ required: true, pattern: /^[0-9]+$/i })} />
                                            {errors.address && <Form.Text className="text-danger">
                                                ข้อมูลไม่ถูกต้อง
                                 </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>ซอย</Form.Label>
                                            <Form.Control type="text" name="soi" ref={register()} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>ถนน </Form.Label>
                                            <Form.Control type="text" name="street" ref={register()} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>จังหวัด <span className="text-danger">*</span></Form.Label>
                                            <Form.Control as="select" onChange={onChangeProv} name="province" ref={register}>
                                                {
                                                    province ? Object.keys(province).map((prov, index) => (
                                                        <option value={province[prov][0].province_code} key={prov}>{prov}</option>
                                                    )) : ''
                                                }

                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>อำเภอ/เขต <span className="text-danger">*</span></Form.Label>
                                            <Form.Control as="select" onChange={onChangeAmphoe} name="district" ref={register}>
                                                {
                                                    amphoe ? Object.keys(amphoe).map((amp, index) => (
                                                        <option value={amp} key={amp}>{amp}</option>
                                                    )) : ''
                                                }
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>ตำบล/แขวง <span className="text-danger">*</span></Form.Label>
                                            <Form.Control as="select" onChange={onChangeDistrict} name="subdistrict" ref={register}>
                                                {
                                                    district ? Object.keys(district).map((dis, index) => (
                                                        <option value={dis} key={dis}>{dis}</option>
                                                    )) : ''
                                                }
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>รหัสไปรษณี <span className="text-danger">*</span></Form.Label>
                                            <Form.Control as="select" name="zipcode" ref={register}>
                                                {
                                                    zipcode ? Object.keys(zipcode).map((zip) => (
                                                        <option value={zip} key={zip}>{zip}</option>
                                                    )) : ''
                                                }
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>โทรศัพท์/FAX </Form.Label>
                                            <Form.Control type="text" name="fax" ref={register()} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>เบอร์โทรศัพท์มือถือ <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" name="contactphone" ref={register({
                                                required: true,
                                                pattern: /^[0-9]+$/i,
                                                minLength: 8,
                                                maxLength: 15
                                            })} />
                                            {errors.contactphone && <Form.Text className="text-danger">
                                                ข้อมูลไม่ถูกต้อง
                                 </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg="5">
                                        <Form.Group>
                                            <Form.Label>ชื่อผู้ติดต่อ <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" name="contactname" ref={register({ required: true, pattern: /^[A-Za-zก-๙]+$/i })} />
                                            {errors.contactname && <Form.Text className="text-danger">
                                                ข้อมูลไม่ถูกต้อง
                                 </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="justify-content-lg-center">
                                    <Col lg="2" className="text-center mt-4">
                                        <Button className="btn-block" type="submit">ลงทะเบียน</Button>
                                    </Col>
                                    <Col lg="12" className="text-center mt-3">
                                        <Link to="/login">กลับหน้าแรก</Link>
                                    </Col>
                                </Row>
                            </div>

                        </Container>
                    </form>
                </div>
            }
        </div>


    )
}

const mapStateToProps = (state) => ({
    status: state.user.status,
    isAuth: state.user.isAuth
})

export default connect(mapStateToProps, { registerSeller })(RegisterPage)
