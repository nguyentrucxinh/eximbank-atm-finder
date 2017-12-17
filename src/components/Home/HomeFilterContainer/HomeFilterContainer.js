import HomeFilter from './HomeFilter/HomeFilter'
import { connect } from 'react-redux'
import { getLocations } from '../../../actions/homeAction'

const mapStateToProps = (state, ownProps) => ({
    allList: state.allList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (filter) => {
        dispatch(getLocations(filter))
    }
})

const HomeFilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeFilter)

export default HomeFilterContainer
