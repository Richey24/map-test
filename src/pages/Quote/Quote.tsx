import React from 'react'
import "./Quote.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import QuoteMain from '../../components/Quote/QuoteMain'

const Quote: React.FC = () => {
  return (
    <div className='quoteDiv'>
      <Sidebar />
      <QuoteMain />
    </div>
  )
}

export default Quote