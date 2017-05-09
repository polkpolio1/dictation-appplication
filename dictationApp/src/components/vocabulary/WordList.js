import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import Word from './Word'

const WordList = ({onToggleClick, words}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>
        List of words:
      </Text>
      <ScrollView style={styles.wordList}>
        {words.map((word) => (
          <Word 
            key={word.id}
            word={word}
            onToggleClick={onToggleClick}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default WordList

const styles = StyleSheet.create({
  view: {
  	flex: 1,
    marginBottom: 20
  },
  header: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});