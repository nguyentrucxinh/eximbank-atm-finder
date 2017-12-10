import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Filter = ({ allList, onSubmit }) => {

    let _sID, _ctyID, _dID, _tID

    const submit = e => {
        e.preventDefault()
        console.log(`sID : ${_sID.value}, tID: ${_tID.value}, ctyID: ${_ctyID.value}, dID: ${_dID.value}`)
        onSubmit({
            sID: _sID.value,
            ctyID: _ctyID.value,
            dID: _dID.value,
            tID: _tID.value
        })
        console.log('component')
        console.log(allList)
    }

    return (
        <div className="row">
            <div className="medium-12 large-12 columns">
                <div className="callout secondary">
                    <form onSubmit={submit}>
                        <div className="row">

                            <div className="small-12 columns">
                                <legend>Tôi đang tìm</legend>
                                <input ref={(input) =>  _sID = input } type="radio" name="pokemon" value="1" id="pokemonRed" defaultChecked={true} /><label htmlFor="pokemonRed">ATM</label>
                                <input ref={(input) =>  _sID = input } type="radio" name="pokemon" value="2" id="pokemonBlue" /><label htmlFor="pokemonBlue">Chi nhánh/PGD</label>
                                <input ref={(input) =>  _sID = input } type="radio" name="pokemon" value="3" id="pokemonYellow" /><label htmlFor="pokemonYellow">Đơn vị chấp nhận thẻ(mPOS)</label>
                                <select ref={(input) =>  _tID = input }>
                                    <option value="husker">Husker</option>
                                    <option value="starbuck">Starbuck</option>
                                    <option value="hotdog">Hot Dog</option>
                                    <option value="apollo">Apollo</option>
                                </select>
                            </div>

                            <div className="small-12 columns">

                            </div>
                            <div className="small-12 columns">
                                <label>Theo điểm đặt
                                    <select ref={(input) =>  _ctyID = input }>
                                        <option value="husker">Husker</option>
                                        <option value="starbuck">Starbuck</option>
                                        <option value="hotdog">Hot Dog</option>
                                        <option value="apollo">Apollo</option>
                                    </select>

                                    <select ref={(input) =>  _dID = input }>
                                        <option value="husker">Husker</option>
                                        <option value="starbuck">Starbuck</option>
                                        <option value="hotdog">Hot Dog</option>
                                        <option value="apollo">Apollo</option>
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
