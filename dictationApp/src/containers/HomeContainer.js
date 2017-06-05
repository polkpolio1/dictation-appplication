import { fetchWords } from '../actions/wordsActions'
import { connect } from 'react-redux'
import Home from '../components/home/Home'

const mapStateToProps = (state) => {
  return {
    words: state.words,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWords: () => {
      dispatch(fetchWords())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
