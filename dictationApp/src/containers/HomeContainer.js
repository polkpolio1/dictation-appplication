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
        <View>
          <Text style={styles.headerText}>
            Dictation application
          </Text>

          <View style={styles.buttonsView}>
            <Button onPress={() => navigate('Dictation')} text={"Write a dictation"}/>
            <Button onPress={() => navigate('Vocabulary')} text={"Your words"}/>
            <Button onPress={() => navigate('Translator')} text={"Translator"} />
          </View>
        </View>

        <Button onPress={BackAndroid.exitApp} text={"Exit"}/>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 70
  },
  buttonsView: {
    alignSelf: 'stretch'
  },
  headerText: {
    fontSize: 28,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30
  },
});
