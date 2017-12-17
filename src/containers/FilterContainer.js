import Filter from '../components/Filter'
import { connect } from 'react-redux'
import { getLocations } from '../actions/homeAction'

const mapStateToProps = (state, ownProps) => ({
  allList: state.allList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (filter) => {
    dispatch(getLocations(filter))
  }
})

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer
