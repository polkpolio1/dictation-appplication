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
    return fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?lang=en-ru&key=trnsl.1.1.20170529T220102Z.884c77c11f5158ad.bc23445e27b8f76372285f321594318285792756&text='+text)
      .then(function(response) {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        dispatch(receiveTranslation(response.text[0]))
      })
      .catch((err) => {
        console.log(err)
        dispatch(failureTranslation(err))
    })
  }
}
