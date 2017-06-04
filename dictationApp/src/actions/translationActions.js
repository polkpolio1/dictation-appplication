import { fetch } from "fetch";
import * as types from '../constants/actionTypes'
import {
  Alert
} from 'react-native'

function requestTranslation() {
  return {
    type: types.FETCH_TRANSLATION_REQUEST
  }
}

function receiveTranslation(translation){
  return {
    type: types.FETCH_TRANSLATION_SUCCESS,
    payload: translation
  }
}

function failureTranslation(err){
  return {
    type: types.FETCH_TRANSLATION_FAILURE,
    payload: err
  }
}

export function fetchTranslation(text) {
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
        console.log("ERR", err)
        dispatch(failureTranslation(err))
    })
  }
}
