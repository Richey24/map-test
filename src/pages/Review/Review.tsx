import React from 'react'
import "./Review.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import ReviewMain from '../../components/Quote/Review/ReviewMain'

const Review: React.FC = () => {
  return (
    <div className='reviewDiv'>
        <Sidebar />
        <ReviewMain />
    </div>
  )
}

export default Review