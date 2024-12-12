import React from 'react'
import "./Terms.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import TermsMain from '../../components/Quote/Terms/TermsMain'

const Terms: React.FC = () => {
  return (
    <div className='termsDiv'>
        <Sidebar />
        <TermsMain />
    </div>
  )
}

export default Terms