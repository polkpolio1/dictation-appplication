import React, { Component } from 'react';
import Button from '../components/libs/Button';
import { connect } from 'react-redux'
import { generateDication, shuffle } from '../actions/dicationActions'
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
} from 'react-native';


class DictationSettingsContainer extends Component {
  static navigationOptions = {
    title: 'Dication settings',
  };
  
  constructor(props) {
    super(props);

    this.generateWords = this.generateWords.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.state = {
      wordsAmount: 4,
      filter: "all",
      maxLength: this.props.words.length
    };
  }

  changeFilter(filter){
    console.log(filter)
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
    });
  }

  generateWords(){
    let newArray = shuffle(this.props.words.reduce((prev, word)=>{
      if(word.learned && this.state.filter == "learned" 
        || !word.learned && this.state.filter == "unlearned"
        || this.state.filter == "all")
        return [
          ...prev,
          Object.assign({
            answer: null
          }, word)
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
          onChangeText={(text) => {this.setState({wordsAmount: text})}}
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generateDication: (words) => {
      dispatch(generateDication(words))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DictationSettingsContainer)

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    color: '#000',
    marginBottom: 20,
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
