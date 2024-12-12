import React, { useState } from 'react'
import "./ReviewMain.css"
import "../QuoteMain.css"
import Header from '../../Header/Header'
import QuoteStep from '../../Header/QuoteStep'
import Information from '../Information'
import ItemList from '../ItemList'
import downIcon from "../../../assets/down.svg"
import termsIcon from "../../../assets/terms.svg"
import Button from '../Button'
import ReviewModal from './ReviewModal'

const ReviewMain: React.FC = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleClose = () => {
        setOpenModal(false)
    }
  return (
    <div className='theQuote'>
        <Header />
        <div className='mainQuote'>
            <QuoteStep step={3} title='Request for Quote' />
            <Information type='review' />
            <ItemList />
            <div className='termsDiv'>
                <div>
                    <img src={termsIcon} alt="" />
                    <div>
                        <h5>Terms and Attachments</h5>
                        <p>Review payment and delivery terms</p>
                    </div>
                </div>
                <img src={downIcon} alt="" />
            </div>
            <Button link='submit' setOpenModal={setOpenModal} />
        </div>
        <ReviewModal openModal={openModal} handleClose={handleClose} />
    </div>
  )
}

export default ReviewMain