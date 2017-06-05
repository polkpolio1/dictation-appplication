import React, { Component } from 'react'
import Button from '../libs/Button'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'

export default class Translator extends Component {

  static navigationOptions = {
    title: 'Translator',
  }

  constructor(props) {
    super(props)

    this.state = { 
      text: ''
    }
  }

  render() {
    const { addWord, clearTranslation, fetchTranslation, translation } = this.props

    return (
      <View style={styles.centered}>

        <Text style={styles.resultHeader}>
          Enter your word:
        </Text>

        <TextInput
          underlineColorAndroid="transparent"
          selectTextOnFocus={true}
          style={styles.input}
          placeholder = 'Word to translate'
          onChangeText={(text) => {this.setState({text})}}
          value={this.state.text}
        />

        <View style={styles.resultView}>
          <Text style={styles.resultHeader}>
            Translation:
          </Text>
          <Text style={styles.resultText}>
            {this.props.translation}
          </Text>
        </View>

        <View style={styles.resultView}>
          <Button onPress={() => { fetchTranslation(this.state.text) }} text="Translate" />
        </View>

        <View style={styles.resultView}>
          <Button onPress={() => {
            addWord(this.state.text, translation)
            clearTranslation()
            this.setState({
              text: ''
            })
          }} text="Add word" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
  },
  resultView: {
    marginTop: 10,
  },
  resultHeader: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 20,
    color: '#000',
  },
})