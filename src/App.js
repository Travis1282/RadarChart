import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from "nachos-ui";
import MainSlider from './components/MainSlider';
import { Slider } from 'nachos-ui'


export default class App extends React.Component {
  state = {
    sliderValue: 0,
  }

  handleSliderChange = (sliderValue) => {
    this.setState({ sliderValue })
  }

  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <MainSlider questions='How much do you like the color purple?'/> 
          <MainSlider questions='How would you rate Keanu Reeves as an actor?'/> 
          <MainSlider questions='What is the solution to 2 + 2?'/> 
          <MainSlider Questions='Given 3 hours how many unique jokes could you write?'/> 
        </View>
      </ThemeProvider>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
