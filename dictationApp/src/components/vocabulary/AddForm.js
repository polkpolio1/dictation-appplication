import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'
import Button from '../libs/Button'

export default class WordList extends Component {
  constructor(props){
    super(props)
    this.onPress = this.onPress.bind(this)
    this.state = {
      word: '',
      translation: ''
    }
  }
  onPress(){
    this.props.onAddClick(this.state.word, this.state.translation)
    this.setState({
      word: '',
      translation: ''
    })
  }
  render() {
    return (
      <View>
        <TextInput
            underlineColorAndroid="transparent"
            selectTextOnFocus={true}
            style={styles.input}
            placeholder = 'Word to add'
            onChangeText={(text) => {this.setState({word: text})}}
            value={this.state.word}
          />
          <TextInput
            underlineColorAndroid="transparent"
            selectTextOnFocus={true}
            style={styles.input}
            placeholder = 'Translation'
            onChangeText={(text) => {this.setState({translation: text})}}
            value={this.state.translation}
          />
          <Button onPress={this.onPress} text="Add" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
  },
})