import * as types from '../constants/actionTypes'

const dictation = (state = [], action) => {
	console.log(action)
  switch (action.type) {
    case types.GENERATE_DICTATION:
      return [
      	...action.words
      ]	
	case types.SET_ANSWER:
		return state.map((word, index) => 
			index == action.id ? {
        ...word,
				answer: action.answer
			} : word
		)
    default:
      return state
  }
}

export default dictation