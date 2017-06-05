import { connect } from 'react-redux'
import { generateDication } from '../actions/dicationActions'
import DictationSettings from '../components/dictationSettings/DictationSettings'

const mapStateToProps = (state) => {
  return {
    words: state.words
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    generateDication: (words) => {
      dispatch(generateDication(words))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DictationSettings)