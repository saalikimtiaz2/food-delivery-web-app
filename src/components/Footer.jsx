import React, { Component } from 'react'
import '../styling/Footer.css';
import { Row, Col, Divider } from 'antd';
import { FacebookFilled, InstagramFilled, TwitterSquareFilled, RightOutlined } from '@ant-design/icons'
import BikeImg from '../images/bike.png'

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main-footer">
                {
                    this.props.isNewsletter && <>
                        <div className="freespace" >
                        </div>
                        <Row justify='center'>
                            <Col xs={24} md={18} lg={12}>
                                <div className="newsletter">
                                    <h2>Sign up for Our <span>Newsletter</span></h2>
                                    <Row justify="center">
                                        <Col span={14}>
                                            <form className="inputContainer">
                                                <input type="email" name="newsemail" id="newsemail" name="newsemail" placeholder="Enter Your Email" />
                                                <button className="FormBtn"><RightOutlined /></button>
                                            </form>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>

                    </>
                }

                <div className='footer'>
                    <Row justify="center" gutter={[24, 24]}>
                        <Col xs={24} lg={4} className="footer-links">
                            <img src={BikeImg} alt="Logo" width={70} />
                            <h3 className="Logo">FOOD<span>APP</span></h3>
                            <p id='footer-para'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam
                            </p>
                            <div>
                                <a href="http://www.facebook.com"><FacebookFilled className="icon" /></a>
                                <a href="http://www.instagram.com"><InstagramFilled className="icon" /></a>
                                <a href="http://www.twitter.com"><TwitterSquareFilled className="icon" /></a>


                            </div>
                        </Col>
                        <Col xs={24} lg={4} className="footer-links">
                            <ul>
                                <li><strong>Useful Links</strong></li>
                                <li>Menu</li>
                                <li>Popular Foods</li>
                                <li>New Items</li>
                                <li>Review</li>
                                <li>Category</li>
                            </ul>
                        </Col>
                        <Col xs={24} lg={4} className="footer-links">
                            <ul>
                                <li><strong>About</strong></li>
                                <li>About</li>
                                <li>How it Works?</li>
                                <li>Why choose us?</li>
                                <li>Contacts</li>
                                <li>Blog</li>
                            </ul>
                        </Col>
                        <Col xs={24} lg={4} className="footer-links">
                            <ul>
                                <li><strong>Terms</strong></li>
                                <li>Privacy</li>
                                <li>Terms and Conditions</li>
                                <li>Copyrights</li>
                                <li>Security</li>
                            </ul>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span={12} offset={6}>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quod deserunt illum, quas reprehenderit, dicta obcaecati qui dolorem, architecto tenetur at maxime.
                            </p>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

export default Footer;