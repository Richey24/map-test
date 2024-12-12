import React from 'react'
import cancelIcon from "../../../assets/cancel-grey.svg"
import calenderIcon from "../../../assets/calender-white.svg"

const QuoteInput: React.FC = () => {
  return (
    <div className='quoteInput'>
      <div>
        <div>
          <label htmlFor="rfq">RFQ No</label>
          <input type="text" name='rfq' id='rfq' placeholder='RFQ-10234' />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name='title' id='title' placeholder='Request for Equipments' />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="department">Department</label>
          <div>
            <input type="text" name='department' id='department' placeholder='Monthly' />
            <img src={cancelIcon} alt="" />
          </div>
        </div>
        <div>
          <label htmlFor="date">Expected delivery date</label>
          <div>
            <img src={calenderIcon} alt="" />
            <input placeholder='2024-12-02' type="text" name='date' id='date' />
          </div>
          <p>Calculated based on lead time and issue date</p>
        </div>
      </div>
    </div>
  )
}

export default QuoteInput