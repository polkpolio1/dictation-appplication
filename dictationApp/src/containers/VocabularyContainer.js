import { connect } from 'react-redux'
import { toggleWord, setVisibilityFilter, addWord, fetchWords } from '../actions/wordsActions'
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

const mapStateToProps = (state) => {
  return {
    words: getVisibleWords(state.words, state.visibilityFilter),
    filter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveWords: () => {
      dispatch(fetchWords())
    },
    onWordClick: (id) => {
      dispatch(toggleWord(id))
    },
    onFilterChange: (filter) => {
      dispatch(setVisibilityFilter(filter))
    },
    onAddClick: (word, translation) => {
      dispatch(addWord(word, translation))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vocabulary)