import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux'
import Layout from '../components/layouts/Layout'
import myData from '../assets/json/raw_database.json';
import { getProfile, updateProfile } from '../redux/actions/user'
import { Row, Col, Form } from 'react-bootstrap'

const initialState = {
    email: '',
    shopname: '',
    fname: '',
    lname: '',
    phone: '',
    address: '',
    soi: '',
    street: '',
    province: '',
    district: '',
    subdistrict: '',
    fax: '',
    contactphone: '',
    contactname: ''
};

const Profile = ({ getProfile, updateProfile, user, loading }) => {

    const { register, handleSubmit, errors } = useForm();
    const [formData, setFormData] = useState(initialState);

    const [province2, setProvince] = useState();
    const [amphoe2, setAmphoe] = useState();
    const [district2, setDistrict] = useState();
    const [zipcode2, setZipcode] = useState();

    useEffect(() => {
        if (!user) getProfile();
        if (!loading && user) {
            const userData = { ...initialState };
            for (const key in user) {
                if (key in userData) userData[key] = user[key];
            }
            setFormData(userData);

            activeSelect(myData, userData.province)
        }

    }, [loading, getProfile, user]);

    const onSubmit = async (data, e) => {
        e.preventDefault();
        console.log(data)
        updateProfile(data)
    };

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const { email, shopname, fname, lname, phone, address, soi, street, province, district, subdistrict, fax, contactphone, contactname } = formData

    const activeSelect = (obj, index) => {
        var prov = groupBy(obj, 'province');
        var amp = groupBy(prov[index], 'amphoe')
        var district = groupBy(amp[Object.keys(amp)[Object.keys(amp).findIndex((a) => a == user.district)]], 'district')
        setProvince(prov)
        setAmphoe(amp)
        setDistrict(district)
        setZipcode(groupBy(district[Object.keys(district)[Object.keys(district).findIndex((a) => a == user.subdistrict)]], 'zipcode'))
    }

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
        setFormData({ ...formData, [e.target.name]: e.target.value });
        getOptionAddress(myData, e.target.options[e.target.selectedIndex].text)
    }

    const getOptionAmphoe = (index = 0) => {
        var district = groupBy(amphoe2[index], 'district')
        setDistrict(district)
        setZipcode(groupBy(district[Object.keys(district)[0]], 'zipcode'))
    }

    const onChangeAmphoe = (e) => {
        getOptionAmphoe(e.target.options[e.target.selectedIndex].text)
    }

    const getOptionDistrict = (index = 0) => {
        setZipcode(groupBy(district2[index], 'zipcode'))
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

    return (
        <Layout>
            <div className="block-content">
                <h3>ข้อมูลผู้ใช้</h3>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col lg="8">
                            <Row>
                                <Col lg="12 mb-1"><h5>ข้อมูลร้านค้า</h5></Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>อีเมล <span className="text-danger">*</span> </Form.Label>
                                        <Form.Control type="email" name="email" value={email} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>ชื่อร้านค้า <span className="text-danger">*</span> </Form.Label>
                                        <Form.Control type="text" name="shopname" value={shopname} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12 mb-1"><h5>ข้อมูลส่วนบุคคล</h5></Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>ชื่อ <span className="text-danger">*</span> </Form.Label>
                                        <Form.Control type="text" name="fname" value={fname} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>นามสกุล <span className="text-danger">*</span> </Form.Label>
                                        <Form.Control type="text" name="lname" value={lname} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>เบอร์โทรศัพท์ <span className="text-danger">*</span> </Form.Label>
                                        <Form.Control type="text" name="phone" value={phone} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12 mb-1"><h5>ข้อมูลที่อยู่</h5></Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>เลขที่ <span className="text-danger">*</span> </Form.Label>
                                        <Form.Control type="text" name="address" value={address} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>ซอย </Form.Label>
                                        <Form.Control type="text" name="soi" value={soi} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>ถนน </Form.Label>
                                        <Form.Control type="text" name="street" value={street} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>จังหวัด <span className="text-danger">*</span></Form.Label>
                                        <Form.Control as="select" onChange={onChangeProv} name="province" defaultValue={province} ref={register}>
                                            {
                                                province2 ? Object.keys(province2).map((prov, index) => (
                                                    <option value={prov} key={prov} selected={prov == province} >{prov}</option>
                                                )) : ''
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>อำเภอ/เขต <span className="text-danger">*</span></Form.Label>
                                        <Form.Control as="select" onChange={onChangeAmphoe} name="district" defaultValue={district} ref={register}>
                                            {
                                                amphoe2 ? Object.keys(amphoe2).map((amp, index) => (
                                                    <option value={amp} key={amp} selected={amp == district} >{amp}</option>
                                                )) : ''
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>ตำบล/แขวง <span className="text-danger">*</span></Form.Label>
                                        <Form.Control as="select" onChange={onChangeDistrict} name="subdistrict" defaultValue={subdistrict} ref={register}>
                                            {
                                                district2 ? Object.keys(district2).map((dis, index) => (
                                                    <option value={dis} key={dis} selected={dis == subdistrict} >{dis}</option>
                                                )) : ''
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>รหัสไปรษณี <span className="text-danger">*</span></Form.Label>
                                        <Form.Control as="select" onChange={onChange} name="zipcode" ref={register} defaultValue={subdistrict}>
                                            {
                                                zipcode2 ? Object.keys(zipcode2).map((zip) => (
                                                    <option value={zip} key={zip}>{zip}</option>
                                                )) : ''
                                            }
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>โทรศัพท์/FAX <span className="text-danger">*</span> </Form.Label>
                                        <Form.Control type="text" name="fax" value={fax} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>เบอร์โทรศัพท์มือถือ <span className="text-danger">*</span> </Form.Label>
                                        <Form.Control type="text" name="contactphone" value={contactphone} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                                <Col lg="6">
                                    <Form.Group>
                                        <Form.Label>ชื่อผู้ติดต่อ <span className="text-danger">*</span> </Form.Label>
                                        <Form.Control type="text" name="contactname" value={contactname} ref={register} onChange={onChange} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4">1</Col>
                        <button type="submit">Save</button>
                    </Row>
                </form>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

export default connect(mapStateToProps, { getProfile, updateProfile })(Profile)
