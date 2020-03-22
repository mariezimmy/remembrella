import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const colors = {
	jet            : '#333333',
	dark_blue_gray : '#666A86',
	sky_blue       : '#95B8D1',
	dutch_white    : '#E8DDB5'
};

const styles = StyleSheet.create({
	container         : {
		flex           : 1,
		justifyContent : 'center',
		alignItems     : 'center',
		fontFamily     : 'PingFangHK-Regular'
	},
	content_container : {
		paddingTop : 50,
		flex       : 1
	},

	logo              : {
		width          : 400,
		height         : 150,
		justifyContent : 'center'
	},

	input             : {
		borderRadius : 20,
		borderColor  : colors.jet + '50',
		borderWidth  : 1,
		color        : colors.jet,
		textAlign    : 'center',
		margin       : 15,
		height       : 40,
		width        : 260
	},

	buttonContainer   : {
		paddingBottom : 140
	},

	loginButton       : {
		borderRadius    : 20,
		textAlign       : 'center',
		backgroundColor : colors.dark_blue_gray,
		color           : 'white',
		margin          : 15,
		height          : 40,
		width           : 260
	},

	loginText         : {
		textAlign : 'center',
		color     : 'white',
		height    : 40,
		width     : 260,
		marginTop : 12
	},

	createAccountText : {
		textAlign : 'center',
		color     : colors.sky_blue,
		fontSize  : 12,
		height    : 40,
		marginTop : 12
	}
});

class Login extends Component {
	state = {
		email    : '',
		password : ''
	};
	handleEmail = (text) => {
		this.setState({ email: text });
	};
	handlePassword = (text) => {
		this.setState({ password: text });
	};
	login = (email, pass) => {
		alert('email: ' + email + ' password: ' + pass);
	};
	render() {
		return (
			<View style={styles.container}>
				<Image source={require('./login.png')} style={styles.logo} />

				<View style={styles.content_container}>
					<TextInput
						style={styles.input}
						placeholder="e-mail"
						placeholderTextColor={colors.jet + '85'}
						autoCapitalize="none"
						onChangeText={this.handleEmail}
					/>

					<TextInput
						style={styles.input}
						placeholder="password"
						placeholderTextColor={colors.jet + '85'}
						autoCapitalize="none"
						onChangeText={this.handlePassword}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.loginButton}
						onPress={() => this.login(this.state.email, this.state.password)}
					>
						<Text style={styles.loginText}>login</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text style={styles.createAccountText}>don't have an account? create one here!</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
export default Login;
