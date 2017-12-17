import HomeResult from './HomeResult/HomeResult'
import { connect } from 'react-redux'
import { getLocations } from '../../../actions/homeAction'

const mapStateToProps = (state, ownProps) => ({
    results: state.results
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})

const HomeResultContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeResult)

export default HomeResultContainer
