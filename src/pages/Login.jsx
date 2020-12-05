import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styling/Login.css'
import LoginImg from '../images/landingLogin.png'
import { Row, Col } from 'antd'

function Login() {
    return (
        <div>
            <Header />
            <Row>
                <Col xs={0} lg={12} style={{ backgroundColor: "#EBF9FC" }} >
                    <img src={LoginImg} alt="" className="responsive" />
                </Col>
                <Col xs={24} lg={12}>
                    <form className="LoginForm">
                        <div>
                            <h3>Log<span>in</span></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing  dolor sit amet
                                elitr, sed diam nonumy.
                                    </p>
                        </div>
                        <input type='email' placeholder="Email" />
                        <div style={{ textAlign: "center" }}>
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

export default Login;