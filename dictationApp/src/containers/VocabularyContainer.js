import React, { Component } from 'react';
import Button from '../components/libs/Button';
import CheckBox from 'react-native-checkbox';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  ScrollView,
  TextInput,
} from 'react-native';


export default class VocabularyContainer extends Component {
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
        <Text style={styles.viewHeader}>
          Filter:
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.filt}
          onValueChange={(filt) => this.setState({filter: filt})}>
          <Picker.Item label="Show all" value="all" />
          <Picker.Item label="Show learned" value="learned" />
          <Picker.Item label="Show unlearned" value="unlearned" />
        </Picker>

        <Text style={styles.viewHeader}>
          List of words:
        </Text>
        <ScrollView style={styles.wordList}>
          <CheckBox
            label='Hello (Привет)'
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
          <CheckBox
            label='Hello (Привет)'
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
          <CheckBox
            label='Hello (Привет)'
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
          <CheckBox
            label='Hello (Привет)'
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
          <CheckBox
            label='Hello (Привет)'
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
        </ScrollView>

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
  picker: {
    color: '#000',
    height: 50,
    marginBottom: 10,
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
  viewHeader: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  word:{
    fontSize: 16,
  },
  wordList:{
    marginBottom: 20
  }
});