import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Filter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sID: 1,
            ctyID: 8,
            dID: 18,
            tID: 0,
            k: "5549585F52505E5Eexi3",
            fnc: "EBPack",
            stpe: 1,
            A: "878506_2479886",
            l: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeSID = this.handleChangeSID.bind(this)
        this.handleChangeTID = this.handleChangeTID.bind(this)
        this.handleChangeCtyID = this.handleChangeCtyID.bind(this)
        this.handleChangeDID = this.handleChangeDID.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChangeSID(event) {
        this.setState({ sID: event.target.value })
    }

    handleChangeTID(event) {
        this.setState({ tID: event.target.value })
    }

    handleChangeCtyID(event) {
        this.setState({ ctyID: event.target.value })
    }

    handleChangeDID(event) {
        this.setState({ dID: event.target.value })
    }

    render() {
        return (
            <div className="row">
                <div className="medium-12 large-12 columns">
                    <div className="callout secondary">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">

                                <div className="small-12 columns">
                                    <legend>Tôi đang tìm</legend>
                                    <input value={this.state.sID} onChange={this.handleChangeSID} type="radio" name="pokemon" value="1" id="pokemonRed" defaultChecked={true} /><label htmlFor="pokemonRed">ATM</label>
                                    <input value={this.state.sID} onChange={this.handleChangeSID} type="radio" name="pokemon" value="2" id="pokemonBlue" /><label htmlFor="pokemonBlue">Chi nhánh/PGD</label>
                                    <input value={this.state.sID} onChange={this.handleChangeSID} type="radio" name="pokemon" value="3" id="pokemonYellow" /><label htmlFor="pokemonYellow">Đơn vị chấp nhận thẻ(mPOS)</label>
                                    <select value={this.state.tID} onChange={this.handleChangeTID} disabled={!(this.state.sID != 3)}>
                                        {this.props.allList.typeCard.map((value, index) =>
                                            <option key={value.TID} value={value.TID}>{value.TN}</option>
                                        )}
                                    </select>
                                </div>

                                <div className="small-12 columns">

                                </div>
                                <div className="small-12 columns">
                                    <label>Theo điểm đặt
                                        <select value={this.state.ctyID} onChange={this.handleChangeCtyID}>
                                            {this.props.allList.city.map((value, index) =>
                                                <option key={value.cityID} value={value.cityID} disabled={(value.cityID != 8)}>{value.cityVN}</option>
                                            )}
                                        </select>

                                        <select value={this.state.DID} onChange={this.handleChangeDID}>
                                            {this.props.allList.distWard.map((value, index) =>
                                                <option key={value.DID} value={value.DID}>{value.NameVN}</option>
                                            )}
                                        </select>
                                    </label>
                                </div>

                                <div className="small-12 columns">
                                    <button type="submit" className="button">Search Now!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Filter.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    allList: PropTypes.shape({
        city: PropTypes.array.isRequired,
        distWard: PropTypes.array.isRequired,
        typeCard: PropTypes.array.isRequired
    }).isRequired
}

export default Filter
