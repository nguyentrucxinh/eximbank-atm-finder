import React, { Component } from 'react'

class FormSearch extends Component {
    render() {
        return (
            <div className="row">
                <div className="medium-12 large-12 columns">
                    <div className="callout secondary">
                        <form>
                            <div className="row">

                                <div className="small-12 columns">
                                    <legend>Tôi đang tìm</legend>
                                    <input type="radio" name="pokemon" value="Red" id="pokemonRed" required /><label htmlFor="pokemonRed">ATM</label>
                                    <input type="radio" name="pokemon" value="Blue" id="pokemonBlue" /><label htmlFor="pokemonBlue">Chi nhánh/PGD</label>
                                    <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow" /><label htmlFor="pokemonYellow">Đơn vị chấp nhận thẻ(mPOS)</label>
                                    <select>
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
                                        <select>
                                            <option value="husker">Husker</option>
                                            <option value="starbuck">Starbuck</option>
                                            <option value="hotdog">Hot Dog</option>
                                            <option value="apollo">Apollo</option>
                                        </select>

                                        <select>
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
        );
    }
}

export default FormSearch
