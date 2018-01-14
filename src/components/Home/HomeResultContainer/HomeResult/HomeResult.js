import React from 'react'
import PropTypes from 'prop-types'

const HomeResult = ({ results }) => {
  return (
    <div>
      <div className='row column'>
        <hr />
        Ho Chi Minh
        </div>
      <div className='row column'>
        <p className='lead'>Kết Quả: 0-{results.length} của {results.length}</p>
      </div>

      <div className='row column'>
        <div className='table-scroll'>
          <table className='hover'>
            <thead>
              <tr>
                <th width='200'>STT</th>
                <th>Điểm Đặt</th>
                <th width='150'>Địa Chỉ</th>
                <th width='150'>Giờ Hoạt Động</th>
                <th>Bản Đồ</th>
              </tr>
            </thead>
            <tbody>
              {results.map((value, index) =>
                <tr key={value.ID}>
                  <td>{index}</td>
                  <td>{value.NVie}</td>
                  <td>{value.AddVie}</td>
                  <td>{value.wHour}</td>
                  <td>{value.lnkLocation}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className='row column'>
        <a className='button hollow expanded'>Load More</a>
      </div>
    </div>
  )
}

HomeResult.propTypes = {
  results: PropTypes.array.isRequired
}

export default HomeResult
