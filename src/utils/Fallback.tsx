import { CircularProgress } from '@mui/material'
import React from 'react'

const Fallback: React.FC = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "90vh"}}>
        <CircularProgress />
    </div>
  )
}

export default Fallback