import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import Home from './components/Home';

const Stack = createStackNavigator();

// Initialize Firebase
const firebaseConfig = {
	// AIzaSyAOwvIqZPYo66HlvFd0QEOvZBhR5cUevLw from iOS
	// AIzaSyAk0EvvIdkIatoaHJvrgEeKwzdLzR1peDU from web app
	apiKey        : 'AIzaSyAk0EvvIdkIatoaHJvrgEeKwzdLzR1peDU',
	authDomain    : '"remembrella.firebaseapp.com"',
	databaseURL   : 'https://remembrella.firebaseio.com',
	storageBucket : 'remembrella.appspot.com'
};

firebase.initializeApp(firebaseConfig);

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
