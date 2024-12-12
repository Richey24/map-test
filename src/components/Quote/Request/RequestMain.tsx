import React from 'react'
import "./RequestMain.css"
import Header from '../../Header/Header'
import QuoteStep from '../../Header/QuoteStep'
import QuoteInput from './QuoteInput'
import ItemInput from './ItemInput'
import Button from '../Button'

const RequestMain: React.FC = () => {
  return (
    <div className='theRequest'>
        <Header />
        <div className='requestMain'>
            <QuoteStep step={1} title='Quote Response' />
            <div className='requestForm'>
                <h4>Request for Quote</h4>
                <p>Fill out these details to send the RFQ</p>
                <QuoteInput />
                <ItemInput />
                <Button link='/quote/terms' />
            </div>
        </div>
    </div>
  )
}

export default RequestMain