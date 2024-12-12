import React from 'react'
import "./QuoteMain.css"
import cancelIcon from "../../assets/cancel.svg"
import Header from '../Header/Header'
import Information from './Information'
import ItemList from './ItemList'
import downIcon from "../../assets/down.svg"
import termsIcon from "../../assets/terms.svg"
import { useNavigate } from 'react-router-dom'

const QuoteMain: React.FC = () => {
    const navigate = useNavigate()
  return (
    <div className='theQuote'>
        <Header />
        <div className='mainQuote'>
            <div className='quoteHeader'>
                <div>
                    <h5>Quote details</h5>
                    <p>Created on Wed, 12th June 2022, 08:00am</p>
                </div>
                <div className='buttonDiv'>
                    <button onClick={()=> navigate("/quote/request")}>Respond</button>
                    <button><img src={cancelIcon} alt="" /> Reject</button>
                </div>
            </div>
            <Information type='quote' />
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
        </div>
    </div>
  )
}

export default QuoteMain