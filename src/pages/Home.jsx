import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import '../styling/Home.css';
import bike from '../images/bike.png';
import FoodIcon from '../images/icon.png';
import FoodImg from '../images/Food.jpg';
import { Row, Col, Radio, BackTop } from 'antd';
import { PushpinFilled, ArrowRightOutlined, UpOutlined } from '@ant-design/icons';
import Feature from '../components/Feature';
import ReviewImg from '../images/Review.png';
import AppImg from '../images/GetApp.png';
import GStore from '../images/googlestore.png';
import AStore from '../images/appstore.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from '../components/SliderCard';
import Burger from '../icons/Burger.png'
import Chicken from '../icons/Chicken.png'
import Drinks from '../icons/Drinks.png'
import Pizza from '../icons/Pizza.png'
import Sandwich from '../icons/Sandwich.png'


const sliderData = [
    {
        id: 1,
        name: 'Burger',
        image: Burger,
    },
    {
        id: 2,
        name: 'Pizza',
        image: Pizza,
    },
    {
        id: 3,
        name: 'Chicken',
        image: Chicken,
    },
    {
        id: 4,
        name: 'Drinks',
        image: Drinks,
    },
    {
        id: 5,
        name: 'Sadwich',
        image: Sandwich,
    },
    {
        id: 6,
        name: 'Food',
        image: FoodIcon,
    }
]

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1560 },
        items: 5,
        slidesToSlide: 3 // optional, default to 1.
    },
    smallDeskyop: {
        breakpoint: { max: 1560, min: 1080 },
        items: 4,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 1080, min: 560 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 560, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Home() {
    return (
        <div>
            <Header />
            <div id='container'>
                <Row>
                    <Col xs={0} md={0} lg={12} order={2}>
                        <img src={bike} className="responsive landingImg" alt="" />
                    </Col>
                    <Col xs={24} lg={12} order={1}>
                        <div className="locationSec">
                            <h1>
                                Lorem ipsum dolor sit
                                amet, consetetur elitr.
                            </h1>
                            <Row>
                                <Col xs={24} md={18} lg={12}>
                                    <form className="inputContainer">
                                        <PushpinFilled style={{ padding: '0.5rem' }} />
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            name="location"
                                            placeholder="Location"
                                        />
                                        <button className="FormBtn">Find Food</button>
                                    </form>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

            <section style={{ textAlign: "center", marginTop: "2rem" }}>
                <h2>Our <span>Menus</span></h2>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {sliderData.map(obj => (
                        <SliderCard icon={obj.image} name={obj.name} key={obj.id} />
                    ))}
                </Carousel>;
            </section>

            <>
                <BackTop>
                    <div className="backTop">
                        <UpOutlined className="icon" />
                    </div>
                </BackTop>
            </>

            <div className="container" style={{ marginTop: "5rem" }}>
                <Row gutter={[48, 16]}>
                    <Col xs={24} lg={12}>
                        <div className="imageBox">
                            <img src={FoodImg} alt="" className="responsive roundedImg" />
                        </div>
                    </Col>
                    <Col xs={24} lg={12}>
                        <div className="contentBox">
                            <h2><span>About</span> Us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et.
                            </p>
                            <div>
                                <div className="aboutBox">
                                    <div id="iconHolder">
                                        <img src={FoodIcon} alt="" width={100} />
                                    </div>
                                    <div style={{ padding: '1rem', textAlign: 'left' }}>
                                        <h3>Lorem ipsum dolor</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur
                                            eirmod ut labore et.
                                        </p>
                                    </div>
                                </div>
                                <div className="aboutBox">
                                    <div id="iconHolder">
                                        <img src={FoodIcon} alt="" width={100} />
                                    </div>
                                    <div style={{ padding: '1rem', textAlign: 'left' }}>
                                        <h3>Lorem ipsum dolor</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur
                                            eirmod ut labore et.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ margin: "1rem 3rem" }}>
                                <button className="MainBtn">
                                    See More
                                    <div className="buttonSpan">
                                        <ArrowRightOutlined />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="featureSection" >
                <Row justify="space-around" gutter={[48, 48]}>
                    <Col xs={24} md={12} lg={10}>
                        <div className="CardSection">
                            <h2><span>Why We Ar</span>e the Best?</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et.
                            </p>
                            <Feature />
                            <div style={{ textAlign: "right" }}>
                                <button className="MainBtn">
                                    See More
                                    <div className="buttonSpan">
                                        <ArrowRightOutlined />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} lg={8}>
                        <div className="imageBox">
                            <img src={ReviewImg} alt="" className="responsive" />
                        </div>
                    </Col>
                </Row>
            </div>

            <section className="GetAppSection">
                <Row>
                    <Col xs={24} lg={14} order={2}>
                        <img src={AppImg} alt="" className="responsive" />
                    </Col>
                    <Col xs={24} lg={10} order={1}>
                        <div className="appBox">
                            <div>
                                <h2>Get The App</h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tempora reiciendis debitis similique repellendus obcaecati omnis architecto quisquam maiores molestiae.
                            </p>
                            </div>
                            <Row>
                                <Col xs={24} md={18} lg={12}>
                                    <Radio.Group style={{ margin: "0.5rem 1rem" }}>
                                        <Radio value={'Phone'}>Phone</Radio>
                                        <Radio value={'Email'}>Email</Radio>
                                    </Radio.Group>
                                    <form className="inputContainer">
                                        <input type="text" placeholder="Phone" />
                                        <button className="FormBtn">Get App Link</button>
                                    </form>
                                </Col>
                            </Row>

                            <div>
                                <p>Download app from</p>
                                <img src={AStore} alt="" width={165} />
                                <img src={GStore} alt="" width={150} style={{ marginLeft: "1rem" }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="container">
                <h2>What O<span>ur Customer</span> Says?</h2>
                <Row justify={'space-around'} gutter={[24, 24]}>
                    <Card />
                    <Card />
                    <Card />
                </Row>
            </section>

            <Footer isNewsletter={true} />
        </div >
    )
}
