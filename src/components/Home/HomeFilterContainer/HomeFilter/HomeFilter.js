import React, { Component } from 'react'
import PropTypes from 'prop-types'

let inputs = [
  {
    id: 1,
    name: 'ATM'
  },
  {
    id: 2,
    name: 'Chi nhánh/PGD'
  },
  {
    id: 3,
    name: 'Đơn vị chấp nhận thẻ(mPOS)'
  }
]

class HomeFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sID: 1,
      ctyID: 8,
      dID: 18,
      tID: 0,
      k: '5549585F52505E5Eexi3',
      fnc: 'EBPack',
      stpe: 1,
      A: '878506_2479886',
      l: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeSID = this.handleChangeSID.bind(this)
    this.handleChangeTID = this.handleChangeTID.bind(this)
    this.handleChangeCtyID = this.handleChangeCtyID.bind(this)
    this.handleChangeDID = this.handleChangeDID.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChangeSID (event) {
    this.setState({ sID: event.target.value })
  }

  handleChangeTID (event) {
    this.setState({ tID: event.target.value })
  }

  handleChangeCtyID (event) {
    this.setState({ ctyID: event.target.value })
  }

  handleChangeDID (event) {
    this.setState({ dID: event.target.value })
  }

  render () {
    return (
      <div className='row'>
        <div className='medium-12 large-12 columns'>
          <div className='callout secondary'>
            <form onSubmit={this.handleSubmit}>
              <div className='row'>

                <div className='small-12 columns'>
                  <legend>I'm finding...</legend>

                  {inputs.map((value, index) =>
                    <div key={value.id}>
                      <input value={value.id} onChange={this.handleChangeSID} type='radio' name='pokemon' defaultChecked={value.id === 1} />
                      <label>{value.name}</label>
                    </div>
                  )}

                  <select value={this.state.tID} onChange={this.handleChangeTID} disabled={Number(this.state.sID) !== 3}>
                    <option value='0'>Please select</option>
                    {this.props.allList.typeCard.map((value, index) =>
                      <option key={value.TID} value={value.TID}>{value.TN}</option>
                    )}
                  </select>
                </div>

                <div className='small-12 columns' />

                <div className='small-12 columns'>
                  <label>By location
                    <select value={this.state.ctyID} onChange={this.handleChangeCtyID}>
                      {this.props.allList.city.map((value, index) =>
                        <option key={value.cityID} value={value.cityID} disabled={Number(value.cityID) !== 8}>{value.cityVN}</option>
                      )}
                    </select>

                    <select value={this.state.DID} onChange={this.handleChangeDID}>
                      {this.props.allList.distWard.map((value, index) =>
                        <option key={value.DID} value={value.DID}>{value.NameVN}</option>
                      )}
                    </select>
                  </label>
                </div>

                <div className='small-12 columns'>
                  <button type='submit' className='button'>Search Now!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

HomeFilter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  allList: PropTypes.shape({
    city: PropTypes.array.isRequired,
    distWard: PropTypes.array.isRequired,
    typeCard: PropTypes.array.isRequired
  }).isRequired
}

export default HomeFilter
