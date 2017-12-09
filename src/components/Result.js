import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <div>
                <div className="row column">
                    <hr />
                    Ho Chi Minh
                </div>
                <div className="row column">
                    <p className="lead">Kết Quả: 1-6 của 6</p>
                </div>

                <div className="row column">
                    <div className="table-scroll">
                        <table className="hover">
                            <thead>
                                <tr>
                                <th width="200">STT</th>
                                <th>Điểm Đặt</th>
                                <th width="150">Địa Chỉ</th>
                                <th width="150">Giờ Hoạt Động</th>
                                <th>Bản Đồ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Content Goes Here</td>
                                <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
                                <td>Content Goes Here</td>
                                <td>Content Goes Here</td>
                                <td>Content Goes Here</td>
                                </tr>
                                <tr>
                                <td>Content Goes Here</td>
                                <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
                                <td>Content Goes Here</td>
                                <td>Content Goes Here</td>
                                <td>Content Goes Here</td>
                                </tr>
                                <tr>
                                <td>Content Goes Here</td>
                                <td>This is longer Content Goes Here Donec id elit non mi porta gravida at eget metus.</td>
                                <td>Content Goes Here</td>
                                <td>Content Goes Here</td>
                                <td>Content Goes Here</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row column">
                    <a className="button hollow expanded">Load More</a>
                </div>
            </div>
        );
    }
}

export default Result
