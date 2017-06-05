import * as types from '../constants/actionTypes'
import {
  AsyncStorage,
} from 'react-native'

const word = (state = {}, action, nextId) => {
  switch (action.type) {
    case types.ADD_WORD:
      return {
        id: nextId,
        word: action.word,
        translation: action.translation,
        learned: false
      }
    case types.TOGGLE_WORD:
      if (state.id !== action.id) {
        return state
      }
      return {
        ...state,
        learned: !state.learned
      }

    default:
      return state
  }
}

const words = (state = [], action) => {
  switch (action.type) {
    case types.GET_WORDS:
      return action.words
    case types.ADD_WORD:
      return [
        ...state,
        word(undefined, action, state.length)
      ]
    case types.TOGGLE_WORD:
      return state.map(t =>
        word(t, action)
      )
    default:
      return state
  }
}

export default words