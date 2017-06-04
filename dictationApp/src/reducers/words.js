import * as types from '../constants/actionTypes'

let initialState = [
  {
    id: 0,
    word: 'hello',
    translation: 'Приве, Ку',
    learned: false
  },
  {
    id: 1,
    word: 'man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 2,
    word: 'girl',
    translation: 'девочка',
    learned: false
  },
  {
    id: 3,
    word: 'home',
    translation: 'дом',
    learned: false
  },
  {
    id: 4,
    word: 'car',
    translation: 'машина',
    learned: false
  },
  {
    id: 5,
    word: 'bus',
    translation: 'автобус',
    learned: false
  },
  {
    id: 6,
    word: 'food',
    translation: 'еда',
    learned: false
  },
  {
    id: 7,
    word: 'device',
    translation: 'устройство',
    learned: false
  },
  {
    id: 8,
    word: 'keyboard',
    translation: 'клавиатура',
    learned: false
  },
  {
    id: 9,
    word: 'plane',
    translation: 'самолет',
    learned: false
  }
]
let nextWordId = initialState.length

const word = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_WORD:
      return {
        id: nextWordId++,
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

const words = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_WORD:
      return [
        ...state,
        word(undefined, action)
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