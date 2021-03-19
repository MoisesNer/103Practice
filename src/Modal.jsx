import React, { Component } from 'react'

export class Modal extends Component {
    render() {

        return (
            <div>
                 <a class="waves-effect waves-light btn modal-trigger" href="#modal1">DETAILS</a>

                 <div id="modal1" class="modal">

                    <div class="modal-content">
                        <h1>City: {this.props.cityName}</h1>
                        <h6>Temperature: {this.props.temp}</h6>
                        <h5>Min: {this.props.low} Max:{this.props.high}</h5>
                        <p>Weather: {this.props.weather} <img src={this.props.iconUrl} alt=""/></p>
                        <p>Speed: {this.props.speed }km/hr. Wind: {this.props.wind }deg.</p>
                    </div>

                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">CLOSE</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
