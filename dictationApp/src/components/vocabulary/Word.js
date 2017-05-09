import React from 'react'
import CheckBox from 'react-native-checkbox'

const Word = ({onToggleClick, word}) => (
  <CheckBox
    key={word.id}
    label={word.word + " (" + word.translation + ")"}
    checked={word.learned}
    onChange={() => onToggleClick(word.id)}
  />
)

export default Word