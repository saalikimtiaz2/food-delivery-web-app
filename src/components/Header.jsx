import React, { Component } from 'react'
import { Row, Col, Drawer, Affix } from "antd";
import { MenuOutlined, ShoppingFilled } from '@ant-design/icons'
import '../styling/Header.css'
import BikeImg from "../images/bike.png";
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: false
        }
        this.handleSidebarClose = this.handleSidebarClose.bind(this);
    }

    handleSidebarOpen = () => {
        this.setState({ sidebar: true })
    }

    handleSidebarClose() {
        this.setState({ sidebar: false })
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector(".header").className = "header scroll";
        } else {
            document.querySelector(".header").className = "header";
        }
    };

    render() {
        return (
            <>
                <Affix offsetTop={1}>
                    <div className='header'>
                        <div className="containerfluid">
                            <Row align="middle">
                                <Col xs={12} lg={4}>

                                    <h3 className="Logo"> FOOD<span>APP</span></h3>

                                </Col>
                                <Col xs={0} lg={20} style={{ textAlign: "right" }}>
                                    <NavLink className='NavBtn' to='/' >Home</NavLink>
                                    <button className='NavBtn'>About</button>
                                    <button className='NavBtn'>About</button>
                                    <button className='NavBtn'>About</button>
                                    <button className='HeaderBtn'><ShoppingFilled style={{ fontSize: "1.5rem" }} /></button>
                                    <NavLink className="NavBtn" to="/login">Login</NavLink>
                                    <NavLink className="HeaderBtn" to="/signup">Create Account</NavLink>
                                </Col>
                                <Col xs={12} lg={0} style={{ textAlign: "right", padding: "0.5rem 1rem" }}>
                                    <MenuOutlined style={{ fontSize: "1.5rem" }} onClick={this.handleSidebarOpen} />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Affix>
                <Drawer placement="right" visible={this.state.sidebar} maskClosable={this.handleSidebarClose} onClose={this.handleSidebarClose}>
                    <ul>
                        <li><NavLink className='NavBtn' to='/' >Home</NavLink></li>
                        <li><button className='NavBtn'>About</button></li>
                        <li><button className='NavBtn'>About</button></li>
                        <li><button className='NavBtn'>About</button></li>
                        <li><button className='HeaderBtn'><ShoppingFilled style={{ fontSize: "1.5rem" }} /></button></li>
                        <li><NavLink className="NavBtn" to="/login">Login</NavLink></li>
                        <li><NavLink className="NavBtn" to="/signup">Create Account</NavLink></li>
                    </ul>
                </Drawer>

            </>

        )
    }
}

export default Header;