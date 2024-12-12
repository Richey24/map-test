import React from 'react'
import "./TermsMain.css"
import Header from '../../Header/Header'
import QuoteStep from '../../Header/QuoteStep'
import Button from '../Button'
import TermsInput from './TermsInput'

const TermsMain: React.FC = () => {
  return (
    <div className='theTerms'>
        <Header />
        <div className='termsMain'>
            <QuoteStep step={2} title='Quote Response' />
            <div className='termsForm'>
                <h4>Terms and Attachments</h4>
                <p>Provide detailed information on payment and delivery terms</p>
                <TermsInput />
                <Button link='/quote/review' />
            </div>
        </div>
    </div>
  )
}

export default TermsMain