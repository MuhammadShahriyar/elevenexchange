import React from 'react'

const CasinoResult = () => {
  return (
    <div className='demomain'>
    <div className="account-statement">
      <div className="header">
        <h2>Casino Results</h2>
      </div>
      <div className="filters">
        <input type="date" className="date-picker" />
        <select className="report-type">
          <option value="">Select Casino Type</option>
        </select>
        <button className="submit-btn">Submit</button>
      </div>
      <div className="table-options">
        <div className='options'>
             <label>Show</label>
        <select className="entries-select">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        <label>Entries</label>
        </div>
       <div>
        <label>Search:</label>
        <input type="text" className="search" placeholder="0 records..." />
       </div>
      </div>
      <table className="data-table">
        <thead>
          <tr>
          <th colspan="1" role="columnheader" class="round-id">Round ID</th> 
          <th colspan="1" role="columnheader">Winner</th>
          </tr>
        </thead>
      </table>
    </div>
    </div>
  )
}

export default CasinoResult