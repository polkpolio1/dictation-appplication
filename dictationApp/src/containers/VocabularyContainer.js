import React, { Component } from 'react';
import Button from '../components/libs/Button';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class VocabularyContainer extends Component {
  static navigationOptions = {
    title: 'Your words',
  };
  render() {
    return (
      <View>
        <Text>
          Vocabulary!
        </Text>
      </View>
    );
  }
}