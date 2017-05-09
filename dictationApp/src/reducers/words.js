import * as types from '../constants/actionTypes'

let initialState = [
  {
    id: 0,
    word: 'Hello',
    translation: 'Приве, Ку',
    learned: false
  },
  {
    id: 1,
    word: 'Man',
    translation: 'Мужик',
    learned: true
  },
  {
    id: 2,
    word: 'Man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 3,
    word: 'Man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 4,
    word: 'Man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 5,
    word: 'Man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 6,
    word: 'Man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 7,
    word: 'Man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 8,
    word: 'Man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 9,
    word: 'Man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 10,
    word: 'Man',
    translation: 'Мужик',
    learned: false
  },
  {
    id: 11,
    word: 'Man',
    translation: 'Мужик',
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