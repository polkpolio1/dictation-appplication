import React, { Component } from 'react'
import Steps from './Steps'
import Result from './Result'
import {
  Text,
} from 'react-native'

export default class Dictation extends Component {

  static navigationOptions = {
    title: 'Dictation',
  }

  constructor(props) {
    super(props)

    this.next = this.next.bind(this)
    this.goHome = this.goHome.bind(this)
    
    this.state = { 
      step: 0,
      maxStep: this.props.dictation.length,
      answer: '',
      result: false
    }
  }

  next() {
    let { step, maxStep, answer } = this.state
    this.props.setAnswer(parseInt(step), answer.length ? answer : "-")
    if( step < maxStep-1){
      this.setState({
        step: ++step,
        answer: ''
      })
    }else{
      this.setState({
        result: true,
        step: 0
      })
    }
  }

  goHome() {
    this.setState({
      result: false,
    })
    this.props.navigation.navigate('Home')
  }

  render() {
    if(!this.state.result)
      return <Steps
        step={this.state.step+1}
        maxStep={this.state.maxStep}
        translation={this.props.dictation[this.state.step].translation}
        answer={this.state.answer}
        onChangeText={(text) => {this.setState({ answer: text })}}
        next={this.next}
      />

    let result = 0
    let resultTable = this.props.dictation.reduce((prev, word) => {
      if(word.word.toLowerCase() != word.answer.toLowerCase()){
        return [
          ...prev,
          <Text key={word.id}>Translation: {word.translation} | Your: {word.answer} | right: {word.word}</Text>
        ]
      }
      result++
      return prev
    }, [])
    
    if(!resultTable.length)
      resultTable = <Text>No errors</Text>

    return <Result 
      maxStep={this.state.maxStep}
      result={result}
      resultTable={resultTable}
      goHome={this.goHome}
    />

  }
}

