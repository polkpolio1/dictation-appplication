import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '../components/libs/Button';
import { setAnswer } from '../actions/dicationActions'
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
} from 'react-native';

class DictationContainer extends Component {
  static navigationOptions = {
    title: 'Dictation',
  };

  constructor(props) {
    super(props);

    this.next = this.next.bind(this)
    this.state = { 
      step: 0,
      maxStep: this.props.dictation.length,
      answer: '',
      result: false
    };
  }

  next() {
    let { step, maxStep, answer } = this.state
    this.props.setAnswer(parseInt(step), answer)
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

  render() {
    if(!this.state.result)
      return (
        <View style={styles.centered}>

          <Text style={styles.headerText}>
            Word {this.state.step+1}/{this.state.maxStep}
          </Text>

          <Text style={styles.resultHeader}>
            Translation: {this.props.dictation[this.state.step].translation}
          </Text>

          <TextInput
            underlineColorAndroid="transparent"
            selectTextOnFocus={true}
            style={styles.input}
            onChangeText={(text) => {this.setState({answer: text})}}
            value={this.state.answer}
          />

          <View style={styles.resultView}>
            <Button onPress={() => {
              this.next()
            }} text="Next" />
          </View>
        </View>
      );
    
    let result = 0;
    let resultTable = this.props.dictation.map((word) => {
      if(word.word.toLowerCase() != word.answer.toLowerCase()){
        return <Text key={word.id}>Translation: {word.translation} | Your: {word.answer} | right: {word.word}</Text>
      }
      result++
    })
    return (
      <View style={styles.centered}>

        <Text style={styles.headerText}>
          RESULT
        </Text>
        <Text style={styles.headerText}>
          Points: {result + '/' + this.state.maxStep}
        </Text>
        <Text style={styles.resultHeader}>
          Your errors:
        </Text>

        {resultTable}

        <View style={styles.resultView}>
          <Button onPress={() => {
            this.props.navigation.navigate('HomeContainer')
          }} text="Go Home" />
        </View>

      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    dictation: state.dictation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAnswer: (id, answer) => {
      dispatch(setAnswer(id, answer))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DictationContainer)


const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
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
  resultText: {
    fontSize: 20,
    color: '#000',
  },
});
