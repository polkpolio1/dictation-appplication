import React, { Component } from 'react';
import Button from '../libs/Button';
import WordList from './WordList';
import Filter from './Filter';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';


export default class Vocabulary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      filter: '',
      word: '',
      translation: ''
    };
  }
  static navigationOptions = {
    title: 'Your words',
  };
  render() {
    return (
      <View style={styles.centered}>
        

        <Filter active={this.props.active} onFilterChange={this.props.onFilterChange}/>
        <WordList words={this.props.words} onToggleClick={this.props.onWordClick}/>
        <TextInput
          underlineColorAndroid="transparent"
          selectTextOnFocus={true}
          style={styles.input}
          placeholder = 'Word to add'
          onChangeText={(text) => this.setState({word})}
          value={this.state.word}
        />
        <TextInput
          underlineColorAndroid="transparent"
          selectTextOnFocus={true}
          style={styles.input}
          placeholder = 'Translation'
          onChangeText={(text) => this.setState({translation})}
          value={this.state.translation}
        />
        <Button onPress={() => null} text="Add" />
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
    height: 40,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});