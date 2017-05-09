import { combineReducers } from "redux"

import words from "./words"
import visibilityFilter from "./visibilityFilter"

export default combineReducers({
  words,
  visibilityFilter
})
