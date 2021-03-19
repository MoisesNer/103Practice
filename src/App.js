import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import Header from './Header'
import Modal from './Modal'

class App extends Component{
  constructor(){
    super()
    this.state = {
      cityName: 'Localizing',
      temp: 'Calculating',
      weather: 'Fetching',
      low: '-4.0',
      high: '4.0',
      icon:'',
      showModal: false,

      wind: 'Measuring',
      speed: 'Measuring'
    }
  }

  //funcion de react, que se ejecuta despues de haber montado render
   componentDidMount(){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
         axios.get(url).then((response) => {
         console.log(response);
         this.setState({
           cityName: response.data.name,
           temp: response.data.main.temp,
           weather: response.data.weather[0].description,
           low: response.data.main.temp_min,
           high: response.data.main.temp_max,
           icon: response.data.weather[0].icon,
           wind: response.data.wind.deg,
           speed: response.data.wind.speed
        })
      })
      var elems = document.querySelectorAll('.modal');
      var instances = window.M.Modal.init(elems);
  }
  
   componentWillUnmount(){
  }

   render(){
       const iconUrl = `https://openweathermap.org/img/w/${this.state.icon}.png`
    return(

      <div className='App'>
         <Header 
         cityName={this.state.cityName} 
         temp={this.state.temp} />


        <Modal 
        cityName={this.state.cityName}
        temp={this.state.temp}
        low={this.state.low}
        high={this.state.high}
        speed={this.state.speed}
        wind={this.state.wind}
        iconUrl={iconUrl}
        />

      </div>
     

    )
  }

}
export default App

