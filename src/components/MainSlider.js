import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from 'nachos-ui';

export default class MainSlider extends Component {
  state = {
    sliderValue: 0,
    computedValue: 0 
  }

  handleSliderChange = (sliderValue) => {
    this.setState({ sliderValue })
    this.setState({ computedValue: (sliderValue * 5).toFixed(0) });

  }

  render() {
    return (
      <View>
        <Text>Example:</Text>
        <Slider
          value={this.state.sliderValue}
          onValueChange={this.handleSliderChange}
        />
        <Text>
          Value: <Text>{this.state.computedValue}</Text>
        </Text>
      </View>
    )
  }
}