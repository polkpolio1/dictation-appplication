import { connect } from 'react-redux'
import { toggleWord, setVisibilityFilter } from '../actions/wordsActions'
import Vocabulary from '../components/vocabulary/Vocabulary'

const getVisibleWords = (words, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return words
    case 'SHOW_LEARNED':
      return words.filter(w => w.learned)
    case 'SHOW_UNLEARNED':
      return words.filter(w => !w.learned)
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    words: getVisibleWords(state.words, state.visibilityFilter),
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWordClick: (id) => {
      dispatch(toggleWord(id))
    },
    onFilterChange: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

const VisibleWordList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vocabulary)

export default VisibleWordList