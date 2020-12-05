import React, { Component } from 'react';
import '../styling/SliderCard.css';


export default class SliderCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="SliderCard">
                    <div className="iconContainer">
                        <img src={this.props.icon} alt="icon" />
                    </div>
                    <h3>{this.props.name}</h3>
                </div>
            </div>
        )
    }
}
