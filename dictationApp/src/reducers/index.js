import { combineReducers } from "redux"

import words from "./words"
import visibilityFilter from "./visibilityFilter"
import translation from "./translation"
import dictation from "./dictation"

export default combineReducers({
  words,
  visibilityFilter,
  translation,
  dictation
})
