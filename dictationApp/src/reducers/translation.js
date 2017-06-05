import * as types from '../constants/actionTypes'

export default function reducer(state={
    translation: '',
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
  switch (action.type) {
    case types.FETCH_TRANSLATION_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case types.FETCH_TRANSLATION_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case types.FETCH_TRANSLATION_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        translation: action.payload,
      }
    case types.CLEAR_TRANSLATION:
      return {
        ...state,
        translation: '',
      }
  }

  return state
}