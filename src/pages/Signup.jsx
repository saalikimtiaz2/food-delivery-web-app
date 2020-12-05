import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styling/Signup.css'
import SignupImg from '../images/landingSignup.png'
import { Row, Col } from 'antd'

function Signup() {
    return (
        <div>
            <Header />
            <Row>
                <Col xs={0} lg={12} style={{ textAlign: 'right', backgroundColor: "#EBF9FC" }} >
                    <img src={SignupImg} alt="" className="responsive" />
                </Col>
                <Col xs={24} lg={12}>
                    <form className="SignupForm">
                        <div>
                            <h3>Sign <span>Up</span></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing  dolor sit amet
                                elitr, sed diam nonumy.
                            </p>
                        </div>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Phone Number" />
                        <div style={{ textAlign: 'center' }}>
                            <button className="MainBtn">Send OTP</button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing  dolor sit amet
                            elitr, sed diam nonumy.
                        </p>
                    </form>
                </Col>
            </Row>
            <Footer isNewsletter={false} />
        </div>
    )
}

export default Signup;