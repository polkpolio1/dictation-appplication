import { connect } from 'react-redux'
import { setAnswer } from '../actions/dicationActions'
import Dictation from '../components/dictation/Dictation'

const mapStateToProps = (state) => {
  return {
    dictation: state.dictation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAnswer: (id, answer) => {
      dispatch(setAnswer(id, answer))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dictation)