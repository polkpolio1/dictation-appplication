import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import WordList from './WordList'
import Filter from './Filter'
import AddForm from './AddForm'

export default class Vocabulary extends Component {
  static navigationOptions = {
    title: 'Your words',
  }
  render() {
    return (
      <View style={styles.centered}>
        <Filter filter={this.props.filter} onFilterChange={this.props.onFilterChange}/>
        <WordList words={this.props.words} onToggleClick={this.props.onWordClick}/>
        <AddForm words={this.props.words} onAddClick={this.props.onAddClick}/>
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
})