import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { Button, Text, View, Image, StyleSheet } from 'react-native';

const key = 'b19ca9d2560306c28a0fdac6c12537ba'; // weather API
const zip = 30363; // hard coded for now

const styles = StyleSheet.create({
	home           : {
		flex           : 2,
		justifyContent : 'center',
		alignItems     : 'center',
		paddingBottom  : 120
	},

	logo           : {
		width          : 193,
		height         : 170,
		justifyContent : 'center'
	},

	welcome        : {
		textAlign  : 'center',
		paddingTop : 20
	},

	scheduleButton : {
		paddingTop : 40
	}
});

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isScheduleSet : false,
			isRaining     : false,
			text          : "It's not raining.\nNo need to bring an umbrella today!"
		};

		this.getWeather();
	}

	async getWeather() {
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`);
		const response = await api_call.json();
		var weather = response.weather[0].main;
		if (weather == 'Rain') {
			this.setState({ isRaining: true, text: "It is raining!\nDon't forget to bring your umbrella." });
		}
	}

	render() {
		let scheduleSet = this.state.isScheduleSet;
		if (!scheduleSet) {
			return (
				<View style={styles.home}>
					<Image source={require('../umbrella.png')} style={styles.logo} />
					<Button title="Set up your schedule!" style={styles.scheduleButton} />
				</View>
			);
		} else {
			return (
				<View style={styles.home}>
					<Image source={require('../umbrella.png')} style={styles.logo} />
					<Text style={styles.welcome}>{this.state.text}</Text>
				</View>
			);
		}
	}
}

export default Home;
