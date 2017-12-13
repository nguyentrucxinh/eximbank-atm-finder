import Result from '../components/Result'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  results: state.results
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  
})

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)

export default ResultContainer
