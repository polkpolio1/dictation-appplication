import React, { Component } from 'react';
import Button from '../components/libs/Button';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  BackAndroid
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.centered}>
          <Text style={styles.headerText}>
            Dictation application
          </Text>

          <Button onPress={() => navigate('Dictation')} text={"Write a dictation"}/>
          <Button onPress={() => navigate('Vocabulary')} text={"Your words"}/>
          <Button onPress={() => navigate('Translator')} text={"Translator"} />

          <Text style={{height: 50}}></Text>

          <Button onPress={BackAndroid.exitApp} text={"Exit"}/>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10
  },
  centered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
