import React from 'react'
import '../styling/Feature.css'
import { CheckOutlined } from '@ant-design/icons';


function Feature() {
    return (
        <>
            <div className="featureCard">
                <div className="iconCard">
                    <CheckOutlined className="icon" />
                </div>
                <div style={{ textAlign: "left", padding: "0.5rem 1rem" }}>
                    <h3>Lorem ipsum dolor</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur
                        eirmod ut labore et.
                        </p>
                </div>
            </div>
            <div className="featureCard">
                <div className="iconCard">
                    <CheckOutlined className="icon" />
                </div>
                <div style={{ textAlign: "left", padding: "0.5rem 1rem" }}>
                    <h3>Lorem ipsum dolor</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur
                        eirmod ut labore et.
                        </p>
                </div>
            </div>
            <div className="featureCard">
                <div className="iconCard">
                    <CheckOutlined className="icon" />
                </div>
                <div style={{ textAlign: "left", padding: "0.5rem 1rem" }}>
                    <h3>Lorem ipsum dolor</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur
                        eirmod ut labore et.
                        </p>
                </div>
            </div>
        </>
    )
}

export default Feature;