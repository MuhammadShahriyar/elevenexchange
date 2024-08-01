import React from 'react'

const Currentbet = () => {
  return (
    <div className='demomain'>
      <div className="account-statement">
        <div className="header">
          <h2>Current Bet</h2>
        </div>
        <div className="filters">
       
          <select className="report-type">
            <option value="">Select Reports Type</option>
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

         
          <div className="filter-options">
            <label>
              <input type="radio" name="filter" value="all" defaultChecked />
              All
            </label>
            <label>
              <input type="radio" name="filter" value="back" />
              Back
            </label>
            <label>
              <input type="radio" name="filter" value="lay" />
              Lay
            </label>
          </div>

          <div className="totals">
          <span>Total Bets: 0</span>
          <span>Total Amount: 0</span>
        </div>


          <div>
            <label>Search:</label>
            <input type="text" className="search" placeholder="0 records..." />
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Nation</th>
              <th>User Rate</th>
              <th>Amount</th>
              <th>Place Date</th>
            
            </tr>
          </thead>
         
        </table>
      </div>
    </div>
  )
}

export default Currentbet