import React, { Component } from 'react';
import Button from '../components/libs/Button';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';


export default class TranslatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  static navigationOptions = {
    title: 'Translator',
  };
  render() {
    return (
      <View style={styles.centered}>

        <Text style={styles.headerText}>
          Enter your word:
        </Text>

        <TextInput
          underlineColorAndroid="transparent"
          selectTextOnFocus={true}
          style={styles.input}
          placeholder = 'Word to translate'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <View style={styles.resultView}>
          <Text style={styles.resultHeader}>
            Translation:
          </Text>
          <Text style={styles.resultText}>
            Привет, здравствуй
          </Text>
        </View>

        <View style={styles.resultView}>
          <Text style={styles.resultHeader}>
            Defenition:
          </Text>
          <Text style={styles.resultText}>
            An expression or gesture of greeting
          </Text>
        </View>

        <View style={styles.resultView}>
          <Text style={styles.resultHeader}>
            Synonyms:
          </Text>
          <Text style={styles.resultText}>
            Hi, hello
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    color: '#000',
    marginBottom: 10,
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
    height: 50,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
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