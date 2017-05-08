'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  PropTypes,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  } 
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }
  render(){
    return (
      <TouchableHighlight
        activeOpacity={1}
        style={ this.state.pressStatus ? styles.buttonContainerPress : styles.buttonContainer } 
        onHideUnderlay={this._onHideUnderlay.bind(this)}
        onShowUnderlay={this._onShowUnderlay.bind(this)}
        onPress={this.props.onPress}
      >
        <Text style={ this.state.pressStatus ? styles.buttonPress : styles.button }>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
// };

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 5,
    width: 240,
    padding:10,
    height:45,
    borderRadius:4,
    backgroundColor: '#000'
  },
  buttonContainerPress: {
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 5,
    width: 240,
    padding:10,
    height:45,
    borderRadius:4,
    backgroundColor: '#fff'
  },
  button: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  buttonPress: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center'
  },
});