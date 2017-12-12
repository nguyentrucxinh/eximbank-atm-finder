import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Filter = ({ allList, onSubmit }) => {

    let _sID, _ctyID, _dID, _tID

    const submit = e => {
        e.preventDefault()
        onSubmit({
            sID: _sID.value,
            ctyID: _ctyID.value,
            dID: _dID.value,
            tID: _tID.value,
            k: "5549585F52505E5Eexi3",
            fnc: "EBPack",
            stpe: 1,
            A: "878506_2479886",
            l: 0
        })
    }

    return (
        <div className="row">
            <div className="medium-12 large-12 columns">
                <div className="callout secondary">
                    <form onSubmit={submit}>
                        <div className="row">

                            <div className="small-12 columns">
                                <legend>Tôi đang tìm</legend>
                                <input ref={(input) => _sID = input} type="radio" name="pokemon" value="1" id="pokemonRed" defaultChecked={true} /><label htmlFor="pokemonRed">ATM</label>
                                <input ref={(input) => _sID = input} type="radio" name="pokemon" value="2" id="pokemonBlue" /><label htmlFor="pokemonBlue">Chi nhánh/PGD</label>
                                <input ref={(input) => _sID = input} type="radio" name="pokemon" value="3" id="pokemonYellow" /><label htmlFor="pokemonYellow">Đơn vị chấp nhận thẻ(mPOS)</label>
                                <select ref={(input) => _tID = input}>
                                    {allList.typeCard.map((value, index) =>
                                        <option key={value.TID} value={value.TID}>{value.TN}</option>
                                    )}
                                </select>
                            </div>

                            <div className="small-12 columns">

                            </div>
                            <div className="small-12 columns">
                                <label>Theo điểm đặt
                                    <select ref={(input) => _ctyID = input}>
                                        {allList.city.map((value, index) =>
                                            <option key={value.cityID} value={value.cityID}>{value.cityVN}</option>
                                        )}
                                    </select>

                                    <select ref={(input) => _dID = input}>
                                        {allList.distWard.map((value, index) =>
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

Filter.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Filter
