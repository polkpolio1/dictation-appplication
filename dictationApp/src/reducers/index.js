import { combineReducers } from "redux"

import words from "./words"
import visibilityFilter from "./visibilityFilter"
import translation from "./translation"

export default combineReducers({
  words,
  visibilityFilter,
  translation
})
