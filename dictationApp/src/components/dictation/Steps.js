import React from 'react'
import Button from '../libs/Button'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'

const Steps = ({ step, maxStep, translation, onChangeText, answer, next }) => (
  <View style={styles.centered}>

    <Text style={styles.headerText}>
      Word {step}/{maxStep}
    </Text>

    <Text style={styles.resultHeader}>
      Translation: {translation}
    </Text>

    <TextInput
      underlineColorAndroid="transparent"
      selectTextOnFocus={true}
      style={styles.input}
      onChangeText={onChangeText}
      value={answer}
    />

    <View style={styles.resultView}>
      <Button onPress={() => { next() }} text="Next" />
    </View>

  </View>
)

export default Steps

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
  }
})
