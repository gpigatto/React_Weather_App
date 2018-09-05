import React, { Component } from 'react';

import Text from './Component/Text';

const API_KEY = "cb30dc0d8ffa196da9dade8c7c686ce1";

class App extends Component {

  state = {
    lati: "",
    long: "",
    city: "",
    temp: "",
    desc: ""
  }

  componentWillMount () {
    navigator.geolocation.getCurrentPosition ((Position) => {
      this.setState ({
        lati: Position.coords.latitude,
        long: Position.coords.longitude
      }, () => {
        if(this.state.lati !== ""){
          this.getWeather ();
        }
      })
    })
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lati}&lon=${this.state.long}&APPID=${API_KEY}&units=metric`
    );
    
    const data = await api_call.json();

    this.setState ({
      city: data.name,
      temp: data.main.temp,
      desc: data.weather[0].description
    })
  }

  render() {
    return (
      <div>
        <Text
          city = {this.state.city}
          temp = {this.state.temp}
          desc = {this.state.desc}
        />
      </div>
    );
  }
}

export default App;
