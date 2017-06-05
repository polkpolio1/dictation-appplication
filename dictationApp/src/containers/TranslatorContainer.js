import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTranslation, clearTranslation } from '../actions/translationActions'
import { addWord } from '../actions/wordsActions'
import Translator from '../components/translator/Translator'

const mapStateToProps = (state) => {
  return {
    translation: state.translation.translation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTranslation: (text) => {
      dispatch(fetchTranslation(text))
    },
    addWord: (word, translation) => {
      dispatch(addWord(word, translation))
    },
    clearTranslation: () => {
      dispatch(clearTranslation())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translator)
