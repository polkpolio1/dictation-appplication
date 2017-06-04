import React, { Component } from 'react';
import Button from '../components/libs/Button';
import { connect } from 'react-redux'
import { fetchTranslation } from '../actions/translationActions'
import { addWord } from '../actions/wordsActions'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';


class TranslatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: ''
    };
  }
  static navigationOptions = {
    title: 'Translator',
  };

  render() {
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
          <Button onPress={() => {
            this.props.dispatch(fetchTranslation(this.state.text))
          }} text="Translate" />
        </View>

        <View style={styles.resultView}>
          <Button onPress={() => {
            this.props.dispatch(addWord(this.state.text, this.props.translation))
            this.setState({
              text: ''
            })
          }} text="Add word" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    translation: state.translation.translation
  }
}
export default connect(mapStateToProps)(TranslatorContainer)

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
});