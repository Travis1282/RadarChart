import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from 'nachos-ui'

export default class MainSlider extends Component {
  state = {
    sliderValue: 0,
  }

  handleSliderChange = (sliderValue) => {
    this.setState({ sliderValue })
  }

  render() {
    return (
      <View>
        <H4>Example:</H4>
        <Slider
          value={this.state.sliderValue}
          onValueChange={this.handleSliderChange}
        />
        <P>
          Value: <B>{this.state.sliderValue.toFixed(2)}</B>
        </P>
      </View>
    )
  }
}