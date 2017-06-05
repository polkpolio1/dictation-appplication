import React, { Component } from 'react'
import Button from '../libs/Button'
import { shuffle } from '../../actions/dicationActions'
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
} from 'react-native'

export default class DictationSettings extends Component {

  static navigationOptions = {
    title: 'Dication settings',
  }

  constructor(props) {
    super(props)

    this.generateWords = this.generateWords.bind(this)
    this.changeFilter = this.changeFilter.bind(this)

    this.state = {
      wordsAmount: this.props.words.length,
      filter: "all",
      maxLength: this.props.words.length
    }
  }

  changeFilter(filter){
    let length = this.props.words.filter((word)=>{
      if(filter == "learned")
        return word.learned
      if(filter == "unlearned")
        return !word.learned
      if(filter == "all")
        return true
    }).length
    this.setState({
      filter: filter,
      maxLength: length
    })
  }

  generateWords(){
    let newArray = shuffle(this.props.words.reduce((prev, word)=>{
      if(word.learned && this.state.filter == "learned" 
        || !word.learned && this.state.filter == "unlearned"
        || this.state.filter == "all")
        return [
          ...prev,
          {
            ...word,
            answer: null
          }
        ]
      return prev
    }, []))
    this.props.generateDication(newArray.slice(0, this.state.wordsAmount))
    this.props.navigation.navigate('Dictation')
  }

  render() {
    return (
      <View style={styles.centered}>

        <Text style={styles.resultHeader}>
          How many words(max {this.state.maxLength}):
        </Text>

        <TextInput
          underlineColorAndroid="transparent"
          selectTextOnFocus={true}
          style={styles.input}
          onChangeText={(text) => {this.setState({wordsAmount: text })}}
          value={""+this.state.wordsAmount}
        />

        <Text style={styles.resultHeader}>
          Which words do you prefer?
        </Text>

        <Picker
          style={styles.picker}
          selectedValue={this.state.filter}
          onValueChange={(filter) => {this.changeFilter(filter)}}>
          <Picker.Item label="all" value="all" />
          <Picker.Item label="unlearned" value="unlearned" />
          <Picker.Item label="learned" value="learned" />
        </Picker>


        <View style={styles.resultView}>
          <Button onPress={this.generateWords} text="Generate It!" />
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
    textAlignVertical: 'center',
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
    marginBottom: 10,
  },
})