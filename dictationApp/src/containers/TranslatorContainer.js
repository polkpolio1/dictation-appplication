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
    this.state = { text: 'Useless Placeholder' };
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
          selectTextOnFocus={true}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  centered: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  buttonContainer: {
    width: 240,
    padding:10,
    height:45,
    borderRadius:4,
    backgroundColor: '#000'
  },
  button: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
});