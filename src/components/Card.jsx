import React from 'react'
import '../styling/Card.css'
import ClientImg from '../images/client.jpg'
import { Col } from 'antd'
import { CommentOutlined } from "@ant-design/icons"

function Card() {
    return (
        <Col xs={20} md={12} lg={8}>
            <div className="mainCard">
                <div className="card">
                    <img src={ClientImg} alt="" />
                    <div className="quote">
                        <CommentOutlined className="icon" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.
                </p>
                </div>
                <div className="horizantalLine"></div>
                <h3>Lorem ipsum dolor</h3>
                <p>
                    Lorem ipsum dolor sit amet, consetetur
                    eirmod ut labore et.
            </p>
            </div>
        </Col>
    )
}

export default Card;