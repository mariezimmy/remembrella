import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

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
  }

  render() {
    return (
      <View style={styles.home}>
        <Image source={require("./umbrella.png")} style={styles.logo} />
        <Text style={styles.welcome}>
          Welcome, Marie!
        </Text>
      </View >
    );
  }
}