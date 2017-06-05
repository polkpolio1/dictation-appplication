import { fetch } from "fetch"
import * as types from '../constants/actionTypes'
import {
  Alert
} from 'react-native'

const requestTranslation = () => {
  return {
    type: types.FETCH_TRANSLATION_REQUEST
  }
}

const receiveTranslation = (translation) => {
  return {
    type: types.FETCH_TRANSLATION_SUCCESS,
    payload: translation
  }
}

const failureTranslation = (err) => {
  return {
    type: types.FETCH_TRANSLATION_FAILURE,
    payload: err
  }
}

export const fetchTranslation = (text) => {
  return dispatch => {
    dispatch(requestTranslation())
    return fetch('http://www.transltr.org/api/translate?to=ru&from=en&text=' + text)
      .then(function(response) {
        return response.json()
      })
      .then((response) => {
        dispatch(receiveTranslation(response.translationText))
      })
      .catch((err) => {
        dispatch(failureTranslation(err))
    })
  }
}

export const clearTranslation = () => {
  return {
    type: types.CLEAR_TRANSLATION
  }
}