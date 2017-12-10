import Filter from '../components/Filter'
import { connect } from 'react-redux'
import { getLocations, getAllList } from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
  distWard: state.allList,
  typeCard: state.allList.allList.typeCard,
  typeCardE: state.allList.allList.typeCardE
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
