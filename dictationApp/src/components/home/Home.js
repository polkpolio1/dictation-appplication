import React, { Component } from 'react'
import Button from '../libs/Button'
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  AsyncStorage
} from 'react-native'

export default class Home extends Component {

  static navigationOptions = {
    title: 'Welcome',
  }

  componentDidMount(){
    this.props.fetchWords()
  }

  componentDidUpdate(){
    AsyncStorage.setItem("words", JSON.stringify(this.props.words))
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.centered}>

        <View style={styles.buttonsView}>
          <Text style={styles.headerText}>
            Dictation application
          </Text>

          <Button onPress={() => navigate('DictationSettings')} text={"Write a dictation"}/>
          <Button onPress={() => navigate('Vocabulary')} text={"Your words"}/>
          <Button onPress={() => navigate('Translator')} text={"Translator"} />
        </View>

        <Button onPress={BackHandler.exitApp} text={"Exit"}/>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50
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
})
