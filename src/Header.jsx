import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
             <div className="row">
                <h1>City: {this.props.cityName}</h1>
                <h6>Temperature: {this.props.temp}</h6>
                {/* <h5>Min: {this.state.low} Max:{this.state.high}</h5>
                <h3>Weather: {this.state.weather}</h3> */}
                {/* <img src={iconUrl} alt=""/> */}
             </div>
        )
    }
}

export default Header
