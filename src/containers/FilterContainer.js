import Filter from '../components/Filter'
import { connect } from 'react-redux'
import { getLocations, getAllList } from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
  allList: state.allList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: () => {
    dispatch(getAllList())
  }
})

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)

export default FilterContainer
