import * as types from '../constants/actionTypes'
import { AsyncStorage } from 'react-native'

export const receiveWords = (words) => {
  return {
    type: types.GET_WORDS,
    words
  }
}

export const fetchWords = (words) => {
  return dispatch => {
    AsyncStorage.getItem('words')
      .then(req => {
        dispatch(receiveWords(JSON.parse(req)))
      })
  }
}

export const addWord = (word, translation) => {
  return {
    type: types.ADD_WORD,
    word,
    translation
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleWord = (id) => {
  return {
    type: types.TOGGLE_WORD,
    id
  }
}