import React, { Component } from 'react'
import FilterContainer from '../containers/FilterContainer'
import ResultContainer from '../containers/ResultContainer'

class Home extends Component {

    render() {
        return (
            <div>
                <FilterContainer />
                <ResultContainer />
            </div>
        )
    }
}

export default Home