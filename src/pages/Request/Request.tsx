import React from 'react'
import "./Request.css"
import Sidebar from '../../components/Sidebar/Sidebar'
import RequestMain from '../../components/Quote/Request/RequestMain'

const Request: React.FC = () => {
  return (
    <div className='requestDiv'>
        <Sidebar />
        <RequestMain />
    </div>
  )
}

export default Request