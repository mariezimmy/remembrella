import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const key = "b19ca9d2560306c28a0fdac6c12537ba";
const zip = 30363;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 100,
    paddingBottom: 120
  },

  logo: {
    width: 193,
    height: 170,
    justifyContent: "center"
  },

  welcome: {
    paddingLeft: 33,
    paddingTop: 15
  }
})

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRaining: false,
      text: "It's not raining. No need for an umbrella today."
    };

    this.getWeather();
  }

  async getWeather() {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`);
    const response = await api_call.json();
    // main rain
    var weather = response.weather[0].main;
    if (weather == "Rain") {
      this.setState({ isRaining: false, text: "It is raining! Don't forget to bring your umbrella." });
    }
  }

  render() {
    return (
      <View style={styles.home}>
        <Image source={require("./umbrella.png")} style={styles.logo} />
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
      </View >
    );
  }
}