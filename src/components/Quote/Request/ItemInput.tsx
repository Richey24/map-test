import React from 'react'
import { dummyItems, ItemRow2 } from '../data'
import downIcon from "../../../assets/down.svg"
import CurrencyInput from 'react-currency-input-field'
import calenderIcon from "../../../assets/calender-white.svg"
import { formatCurrency } from '../../../utils/helper'
import deleteIcon from "../../../assets/delete.svg"
import dollarIcon from "../../../assets/dollar.svg"

const ItemInput: React.FC = () => {
  return (
    <div className='addItemDiv'>
      <h5>Add Items</h5>
      <div className='itemTableDiv'>
        <div className='addItemrow'>
          {
            ItemRow2?.map((row) => <span key={row} className={row}>{row}</span>)
          }
        </div>
        <div className='addItemColumn'>
          {
            dummyItems?.map((item) => (
              <div key={item.id}>
                <div className='itemName'><input type="text" defaultValue={item?.name} /><img src={downIcon} alt="" /></div>
                <div className='itemVariant'><input type="text" defaultValue={item?.variants} /><img src={downIcon} alt="" /></div>
                <div className='itemQty'><input type="text" defaultValue={item?.quantity?.amount} /> <h5>{item?.quantity?.type}</h5></div>
                <div className='itemPrice'><img src={dollarIcon} alt="" /><CurrencyInput suffix='.00' defaultValue={item.price} /></div>
                <div className='itemDate'><img src={calenderIcon} alt="" /><input type="text" defaultValue={item?.date?.toLocaleDateString()} /></div>
                <div className='itemAmount'>{formatCurrency("en-US", "USD", item?.amount)} <img src={deleteIcon} alt="" /></div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='iTemTotalDiv'>
        <div>Sub Total <span></span>{formatCurrency("en-US", "USD", 1200)}</div>
      </div>
      <div className='itemNoteDiv'>
        <div>
          <h5>Note</h5>
          <textarea name="note" id="note"></textarea>
          <p>0/200</p>
        </div>
      </div>
    </div>
  )
}

export default ItemInput