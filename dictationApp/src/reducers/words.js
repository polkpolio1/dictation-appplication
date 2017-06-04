import * as types from '../constants/actionTypes'
import {
  AsyncStorage,
} from 'react-native';
// let initialState = [
//   {
//     id: 0,
//     word: 'hello',
//     translation: 'Приве, Ку',
//     learned: false
//   },
//   {
//     id: 1,
//     word: 'man',
//     translation: 'Мужик',
//     learned: false
//   },
//   {
//     id: 2,
//     word: 'girl',
//     translation: 'девочка',
//     learned: false
//   },
//   {
//     id: 3,
//     word: 'home',
//     translation: 'дом',
//     learned: false
//   },
//   {
//     id: 4,
//     word: 'car',
//     translation: 'машина',
//     learned: false
//   },
//   {
//     id: 5,
//     word: 'bus',
//     translation: 'автобус',
//     learned: false
//   },
//   {
//     id: 6,
//     word: 'food',
//     translation: 'еда',
//     learned: false
//   },
//   {
//     id: 7,
//     word: 'device',
//     translation: 'устройство',
//     learned: false
//   },
//   {
//     id: 8,
//     word: 'keyboard',
//     translation: 'клавиатура',
//     learned: false
//   },
//   {
//     id: 9,
//     word: 'plane',
//     translation: 'самолет',
//     learned: false
//   }
// ]
// let initialState;
// AsyncStorage.getItem('words')
//   .then(req => initialState = JSON.parse(req))


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

      return Object.assign({}, state, {
        learned: !state.learned
      })

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