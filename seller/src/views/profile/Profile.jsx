import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Layout from '../../components/layouts/Layout'
import { Row, Col } from 'react-bootstrap'
import { getProfile } from '../../redux/actions/user'

const Profile = ({ getProfile, user }) => {

    useEffect(() => {
        getProfile()
    }, [getProfile])

    return (
        <Layout>
            <div className="block-content">
                <h3>ข้อมูลผู้ใช้</h3>
                <hr />
                <Row>
                    <Col lg="8">
                        <Row>
                            <Col lg="2" className="text-right">
                                ชื่อร้านค้า
                            </Col>
                            <Col lg="10" className="text-left">
                                {user.shopname}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="2" className="text-right">
                                ชื่อร้านค้า
                            </Col>
                            <Col lg="10" className="text-left">
                                {user.shopname}
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="4">
                        2
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

export default connect(mapStateToProps, { getProfile })(Profile)
