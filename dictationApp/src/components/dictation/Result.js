import React from 'react'
import Button from '../libs/Button'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

const Results = ({ maxStep, resultTable, result, goHome }) => (
  <View style={styles.centered}>

    <Text style={styles.headerText}>
      RESULT
    </Text>
    <Text style={styles.headerText}>
      Points: {result + '/' + maxStep}
    </Text>
    <Text style={styles.resultHeader}>
      Your errors:
    </Text>

    <ScrollView>
      {resultTable}
    </ScrollView>

    <View style={styles.resultView}>
      <Button onPress={goHome} text="Go Home" />
    </View>

  </View>
)

export default Results

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
  resultView: {
    marginTop: 10,
  },
  resultHeader: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
})