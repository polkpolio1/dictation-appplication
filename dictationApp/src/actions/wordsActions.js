import * as types from '../constants/actionTypes'

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