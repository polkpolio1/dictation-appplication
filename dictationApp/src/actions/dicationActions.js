import * as types from '../constants/actionTypes'

export const generateDication = (words) => {
  return {
    type: types.GENERATE_DICTATION,
    words
  }
}

export const setAnswer = (id, answer) => {
  return {
    type: types.SET_ANSWER,
    id,
    answer
  }
}

export const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
